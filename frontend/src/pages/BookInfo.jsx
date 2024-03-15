import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/BookInfo.css'
import Image from '../assets/Nikku pic 76 (2).jpg'
import { Navigate } from "react-router-dom";
function BookInfo() {
  const [book, setBook] = useState({});
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate=useNavigate();
  const goBack=()=>{
    navigate('/')
  }
  
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`https://book-u9pn.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  }, []);
  return (
    <div>
      
      <div className="card2">
        <div className="info-container">
          <p>
            <b>Book name : </b>{book.title}
          </p>
          <p><b>Author</b> : {book.author}</p>
          <p><b>Publish Year</b> : {book.publishYear}</p>
          <p><b>Created date </b>: {new Date(book.createdAt).toString()}</p>
          <p><b>Update date</b> : {new Date(book.updatedAt).toString()}</p>
        </div>
        <div className="back">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={goBack}>Go back</button>
      </div>
      </div>
    </div>
  );
}

export default BookInfo;
