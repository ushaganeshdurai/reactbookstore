import React, { useEffect, useState } from "react";
import axios from "axios";
import '../src/index.css'
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => { 
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1>Books list</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-700 rounded-md">NO.</th>
              <th className="border border-slate-700 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-700 rounded-md">Author</th>
              <th className="border border-slate-700 rounded-md max-md:hidden">Published Year</th>
              <th className="border border-slate-700 ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author} 
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishedYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <AiOutlineDelete />
                    </Link>
                  </div>
                </td>
              </tr>
      ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
