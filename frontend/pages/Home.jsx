import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const containerRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://reactbookstore-backend.vercel.app/books')
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Books List</h1>
        <Link to="/books/create" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <MdOutlineAddBox className="text-2xl mr-2" />
          Add New Book
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-200 shadow-md rounded-md">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-4 py-2">Cover</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Published Year</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book._id}>
                  <td className="px-4 py-3">
                    <img src={book.coverImageUrl} alt={book.title} className="h-24 w-auto mx-auto" />
                  </td>
                  <td className="px-4 py-3">{book.title}</td>
                  <td className="px-4 py-3">{book.author}</td>
                  <td className="px-4 py-3">{book.publishedYear}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4">
                      <Link to={`/books/details/${book._id}`} className="text-blue-600 hover:text-blue-700">
                        <BsInfoCircle className="text-xl" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`} className="text-yellow-600 hover:text-yellow-700">
                        <AiOutlineEdit className="text-xl" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`} className="text-red-600 hover:text-red-700">
                        <AiOutlineDelete className="text-xl" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
