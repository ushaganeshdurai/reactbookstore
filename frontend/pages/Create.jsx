import { useState } from "react";
import Backbutton from "../components/Backbutton";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import Uploadwidget from "./Uploadwidget"; // Adjust the import path if necessary

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState(""); // New state for cover image URL
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear,
      coverImageUrl // Include the cover image URL
    };

    console.log('Data to be sent:', data); // Log the data to be sent

    setLoading(true);
    axios.post('https://reactbookstore-backend.vercel.app/books', data)
      .then(() => {
        setLoading(false);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl">Create a book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col rounded-md border-2 border-sky-400 p-4 mx-auto w-[600px]">
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
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input
            type="number"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Cover image</label>
          <Uploadwidget setImageUrl={setCoverImageUrl} />
        </div>
        <button onClick={handleSaveBook} className="p-2 m-8 bg-sky-500 rounded-sm text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default Create;
