import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); //get id
  const handleDelbook = () => {
    setloading(true);
    axios
      .delete(`https://reactbookstore-omega.vercel.app//books/${id}`)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        setloading(fasle);
        console.log(error);
      });
  };

  return (<div className="p-4">
    <Backbutton/>
    <h1>Delete a book</h1>
    {loading?<Spinner/>:' '}
    <div className="flex flex-col border-2 items-center rounded-xl w-[600] mx-auto ">
      <button onClick={handleDelbook} className="bg-red-500 text-white">Delete</button>
    </div>
  </div>);
};

export default Delete;
