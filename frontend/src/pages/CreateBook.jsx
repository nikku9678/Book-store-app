import React, { useEffect,useState } from 'react'
import '../styles/CreateBook.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
function CreateBook() {
  const [title,setTitle] =useState('');
  const [author,setAuthor] =useState('');
  const [publishYear,setPublishYear] =useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('https://book-u9pn.onrender.com/books',data)
      .then(() => {
        setLoading(false);
        toast("Book created successfully",{type:"success"});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
      console.log(data)
  };
  
 
  return (
    <div className='create'>
      
        <div className='create-createBox' >
        <h2>Add Book</h2> 
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder='Enter Title'
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              name="author"
              placeholder='Enter author name'
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Publish Year</label>
            <input
              type="number"
              name="year"
              placeholder='Enter publish year'
              value={publishYear}
              onChange={(e)=>setPublishYear(e.target.value)}
            />
          </div>
          <div className="btn">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'  onClick={handleSaveBook}>Add Book</button>
          </div>
          
        </div>
    </div>
  )
}

export default CreateBook;
