import React, { useEffect, useState } from 'react'
import './imageGallery.css'

function ImageGyalerry() {

    const[images,setImages] = useState([])

    useEffect(()=>{
        const fetchImages=()=>{
            const data = [
                {
                    id:"1",
                    url:"https://picsum.photos/id/1/300/200",
                    title:"image1"
                },
                {
                    id:"2",
                    url:" https://picsum.photos/id/2/300/200",
                    title:"image2"
                },
                {
                    id:"3",
                    url:"https://picsum.photos/id/3/300/200",
                    title:"image3"
                },
                {
                    id:"4",
                    url:"https://picsum.photos/id/4/300/200",
                    title:"image4"
                },
                {
                    id:"5",
                    url:"https://picsum.photos/id/5/300/200",
                    title:"image5"
                },
                {
                    id:"6",
                    url:"https://picsum.photos/id/6/300/200",
                    title:"image6"
                }
            ]
            setImages(data);
        }
        fetchImages()
    },[])

    const deleteImage = (id) =>{
        setImages(images.filter((image)=>image.id !== id))
    };

  return (
    <div>
      <h1>Image Gyallery</h1>
      <div className='main-gallery'>
        {
            images.map((values)=>(
            <div className='image-card'>
                <img src={values.url}></img>
                <div className='contents'>
                    <h4>{values.title}</h4>
                    <a href='#' onClick={()=>deleteImage(values.id)}>Delete</a>
                </div>
            </div>
            ))      
        }
      </div>
    </div>
  )
}

export default ImageGyalerry
