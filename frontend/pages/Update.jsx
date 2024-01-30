import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Backbutton from "../components/Backbutton";
import { useParams } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setpublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://reactbookstore-backend.vercel.app/books${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setpublishedYear(response.data.publishedYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };
    setLoading(true);
    //to access books use post
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(true);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl">Update a book</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col rounded-md border-2 border-sky-400 p-4 mx-auto w-[600]">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">publishedYear</label>
          <input
            type="number"
            value={publishedYear}
            onChange={(e) => setpublishedYear(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <button
          className="p-2 m-8 bg-sky-500 text-white"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Update;
