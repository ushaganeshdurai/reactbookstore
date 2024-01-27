import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Backbutton from "../components/Backbutton";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setpublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook =()=>{
    const data = {
      title,author,publishedYear
    };setLoading(true)
    axios.post('http://localhost:5555/books',data).then(()=>{
      setLoading(false);
      navigate('/')
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }

  return <div>Create</div>;
};

export default Create;
