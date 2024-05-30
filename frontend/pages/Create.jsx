import { useState,useRef,useEffect } from "react";
import Backbutton from "../components/Backbutton";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner"
import axios from "axios"


const Uploadwidget =()=>{
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(()=>{
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current=cloudinaryRef.current.createUploadWidget({
      cloudName: 'dm3rs6xh4',
      uploadPreset:'chumma',
      tags:['reactbookstore']
    },function(err,res){
console.log(res);
    })
  },[]);
  return(
    <button className="p-2 m-8 text-white rounded-md  bg-sky-500" onClick={()=>widgetRef.current.open()}>Upload</button>
  )
}


const Create = () => {

  const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [publishedYear, setpublishedYear] = useState("");
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 
  const handleSaveBook = ()=>{
    const data = {
      title,author,publishedYear
    };setLoading(true)
    //to access books use post
    axios.post('https://reactbookstore-backend.vercel.app/books',data).then(()=>{
      setLoading(false);
      navigate('/home')
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }

  return(
    <div className="p-4">

      <Backbutton />
      <h1 className="text-3xl">Create a book</h1>
      {loading?<Spinner/>:' '}
      <div className="flex flex-col rounded-md border-2 border-sky-400 p-4 mx-auto w-[600]">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="p-4 border-2 border-gray-500"  />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="p-4 border-2 border-gray-500"  />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input type="number" value={publishedYear} onChange={(e)=>setpublishedYear(e.target.value)} className="p-4 border-2 border-gray-500"  />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Cover image</label>
           <Uploadwidget /> 
        </div>
        <button onClick={handleSaveBook} className="p-2 m-8 bg-sky-500 rounded-sm text-white">Save</button>
      </div>
  
    </div>
  )
};

export default Create;