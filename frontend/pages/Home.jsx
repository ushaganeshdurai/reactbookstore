import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import '../src/index.css';
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const containerRef = useRef(null);
  const [cloudinaryRendered, setCloudinaryRendered] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window && containerRef.current) {
      window.cloudinary.galleryWidget({
        container: containerRef.current,
        carouselStyle: "none",
        cloudName: 'dm3rs6xh4',
        mediaAssets: [{ tag: 'mommy' }],
        onRendered: () => setCloudinaryRendered(true),
      }).render();
    }
  }, []);

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
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1>Books list</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        <div ref={containerRef} className="my-4"></div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className=" rounded-md max-md:hidden">Book name</th>
                <th className=" rounded-md">Author</th>
                <th className=" rounded-md max-md:hidden">Published Year</th>
                <th className=" rounded-md">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id}>
                  <td className=" rounded-md text-center">{book.title}
                  {book.coverImageUrl}
                  </td>
                  <td className=" rounded-md text-center max-md:hidden">{book.author}</td>
                  <td className=" rounded-md text-center max-md:hidden">{book.publishedYear}</td>
                  <td className=" rounded-md text-center">
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
    </>
  );
};

export default Home;
