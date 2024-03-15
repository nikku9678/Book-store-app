import React,{useState} from 'react'
import axios from 'axios';
import '../styles/DeleteBook.css'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`https://book-u9pn.onrender.com/books/${id}`)
      .then(() => {
        toast("Book deleted successfully",{type:"success"});
        navigate('/');
       
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
     
  };
  const handleCancel=()=>{
    navigate('/')
  }
  return (
    <div className='del'>
      <div>
      <h3>Do you want to delete the Book </h3>
      </div>
      <div className='del-btn'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleDelete}>Delete</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBook
