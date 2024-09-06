import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllCatimages, getCatDetails } from '../../../ApiServer/ApiServer';

function CatDetails() {
    const[cat , setCat] = useState([]);
    const{id} = useParams();

    useEffect(()=>{
        const fetchData = async() =>{
            try
            {
                const catDetails = await getCatDetails(id);
                const catWithImages = await getAllCatimages(catDetails.reference_image_id);
                const data = {
                    ...catDetails,
                    imgUrl : catWithImages.url,
            }
            setCat(data)
            }
            catch(error)
            {
                console.log(error)
            }
        };
        fetchData();
    },[id]);

  return (
    <div>
       <div className='d-main'>
            <div className='d-image'>
                <img src={cat.imgUrl} alt={cat.name} />
            </div>
            <div className='d-content'>
                <h1>Details</h1>
                <ul>
                    <li><strong>Name:</strong> {cat.name}</li>
                    <li><strong>Bred For:</strong> {cat.bred_for}</li>
                    <li><strong>Life Span:</strong> {cat.life_span}</li>
                    <li><strong>Origin:</strong> {cat.origin}</li>
                    <li><strong>Temperament:</strong> {cat.temperament}</li>
                </ul>
                <div className='button'><a href='/cat'>Back</a></div>
            </div>
        </div>
    </div>
  )
}

export default CatDetails;  
