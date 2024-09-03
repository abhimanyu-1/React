import React, { useEffect, useState } from 'react';
import './Details.css';
import { getAllimages, getDetails } from '../../ApiServer/ApiServer';
import { useParams } from 'react-router-dom';

function Details() {
    const [breed, setBreed] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailData = await getDetails(id);
                const imageData = await getAllimages(detailData.reference_image_id);
                const wholeData = {
                    ...detailData,
                    imgUrl: imageData.url,
                };
                setBreed(wholeData);
                console.log(wholeData);
            } catch (error) {
                console.error('Error fetching breed details:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className='d-main'>
            <div className='d-image'>
                <img src={breed.imgUrl} alt={breed.name} />
            </div>
            <div className='d-content'>
                <h1>Details</h1>
                <ul>
                    <li><strong>Name:</strong> {breed.name}</li>
                    <li><strong>Bred For:</strong> {breed.bred_for}</li>
                    <li><strong>Life Span:</strong> {breed.life_span}</li>
                    <li><strong>Origin:</strong> {breed.origin}</li>
                    <li><strong>Temperament:</strong> {breed.temperament}</li>
                </ul>
                <div className='button'><a href='/'>Back</a></div>
            </div>
        </div>
    );
}

export default Details;
