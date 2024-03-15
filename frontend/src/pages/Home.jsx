import React, { useEffect, useState } from "react";
import '../styles/Home.css'
import BookTable from "../components/BookTable";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://book-u9pn.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    console.log(books);
  }, []);

  return (
    <div className="home">
      <BookTable books={books} />
    </div>
  );
}

export default Home;
