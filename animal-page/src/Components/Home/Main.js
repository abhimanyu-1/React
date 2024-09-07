import React, { useState, useEffect } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DOG_BASE_URL = 'https://api.thedogapi.com/v1/images/search';
const CAT_BASE_URL = 'https://api.thecatapi.com/v1/images/search';

function Main() {
  const navigate = useNavigate();

  // State to store image URLs
  const [dogImage, setDogImage] = useState('');
  const [catImage, setCatImage] = useState('');

  // Function to fetch random dog image
  const fetchDogImage = async () => {
    try {
      const response = await axios.get(DOG_BASE_URL);
      setDogImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  // Function to fetch random cat image
  const fetchCatImage = async () => {
    try {
      const response = await axios.get(CAT_BASE_URL);
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  // Fetch images on component mount
  useEffect(() => {
    fetchDogImage();
    fetchCatImage();
    const interval = setInterval(()=>{
      fetchCatImage();
      fetchDogImage();
    },2000)
  }, []);

  const Routing = () => {
    navigate('/dog');
  };
  const CatRouting = () => {
    navigate('/cat');
  };

  return (
    <div className='m-main'>
      
      <div className='m-dog' onClick={Routing}>
        <img src={dogImage} alt="Random Dog" />
      </div>

      <div className='m-cat' onClick={CatRouting}>
        <img src={catImage} alt="Random Cat" />
      </div>

    </div>
  );
}

export default Main;
