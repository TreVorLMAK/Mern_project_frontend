import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        image: "",
        description: ""
    })

    const handleChange = (e)=>{
        // const value = e.target.value
        // const name = e.taget.name
        const {name,value} = e.target
        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value
        })
    }

    const CreateBlog = async(e)=>{
        e.preventDefault()
        const response = await axios.post("http://localhost:3000/blog", data,{
            headers:{
                "Content-Type": "multipart/form-data"
                }
        })
        if(response.status === 200){
            navigate("/")
        }else{
            alert("Something went wrong")
        }
    }

  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Wanna create blog?</div>
        <div className="mt-3 text-center text-4xl font-bold">Create Blog</div>
        <form action="" onSubmit={CreateBlog}>
        <div className="p-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Title*" onChange={handleChange}
            />
            <input
              type="text"
              name="subtitle"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Subtitle *" onChange={handleChange}
            />
          </div>
          <input
            type="file"
            name="image"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Image*" onChange={handleChange}
          />
          <br />
          <textarea
            name="description"
            id="text"
            cols="30"
            rows="10"
            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
            placeholder="Description*" onChange={handleChange}
          >
            
          </textarea>
        </div>
        </form>
        <div className="text-center">
          <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white" onClick={CreateBlog} >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
