import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BookTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function BookTable({ books }) {
  const [search,setSearch] =useState('')
  return (
    <div className="book-table">
      <div className="table-head">
      <div><h2>Book List</h2></div>
      <div><input type="text" placeholder="Search book" onChange={(e)=>setSearch(e.target.value)} /></div>
      </div>
      <div className="table2">
        <table>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Operations</th>
          </tr>
          {books.filter((item)=>{
            return search.toLowerCase()===''? item:item.title.toLowerCase().includes(search.toLowerCase())
          }).map((book, index) => (
            <>
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>
                  <Link to={`/books/delete/${book._id}`}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <Link to={`/books/info/${book._id}`}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default BookTable;
