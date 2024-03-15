import React, { useEffect,useState } from 'react'
import '../styles/CreateBook.css'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://book-u9pn.onrender.com/books/${id}`)
    .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setTitle(response.data.title)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`https://book-u9pn.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        toast("Book edited successfully",{type:"success"});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

 
  return (
    <div>
      <div className='create'>
        <div className='create-createBox' >
      <h2>Edit Book</h2>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Publish Year</label>
            <input
              type="number"
              name="year"
              value={publishYear}
              onChange={(e)=>setPublishYear(e.target.value)}
            />
          </div>
          <div className="btn">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full' onClick={handleEditBook}>Save</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default EditBook;
