import axios from 'axios';
import React, { useState } from 'react';
import borderBrige from '../../../../images/title-icon.png'
import useAuth from './../../../../Hooks/useAuth';
import './Review.css'
import { useForm } from "react-hook-form";



const Review = () => {
  const [success, setSuccess] = useState('');
  const {user} = useAuth()
  const [imageUrl, setImageUrl] = useState(null)
  const { register, handleSubmit, errors } = useForm();

  const handelImgUpload = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '282791da900bc047d811a5c2dcf9f3f5');
    imageData.append('image', event.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(res => setImageUrl(res.data.data.display_url))
    .catch(err => console.log(err))
  }

  const onSubmit = (e) => {
    const reviewData = {
      name: e.name,
      location: e.location,
      comments: e.comments,
      imageUrl: imageUrl
    };
    console.log(reviewData)

    axios.post('https://doctors-port.herokuapp.com/AddReview', reviewData)
      .then(res => {
        setSuccess(true);
      })
  }

  
  return (
    <>
      <div className='review-container'>
        <div className=''>
          <h2 >Give Review</h2>
          <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
          <br/>
          <img className='mt-3' src={borderBrige} alt=""/>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
          <input  type="text" name="name"  placeholder="Name" {...register("name")} required/>
          <br/>
          <input  type="text" name="location"  placeholder="Location" {...register("location")} required/>
          <textarea id="textarea" name="comments" placeholder="Your Comments" {...register("comments")} rows="2" cols="40" className="form-control shadow-none"/>
          <br/>
          <input  type="file" onChange={handelImgUpload} name="file" style={{border: 'none'}}  required/>

          <button className='reviewBtn' type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>

        {success && <p style={{color: 'green', marginTop: '20px'}}>Review added successfully</p>}
      </div>
    </>
  );
};

export default Review;