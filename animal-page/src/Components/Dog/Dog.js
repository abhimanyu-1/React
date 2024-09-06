import React, { useEffect, useState } from 'react';
import './Dog.css';
import { getAll , getAllimages} from '../../ApiServer/ApiServer';


function Home() {
    const[breeds, setBreeds] = useState([]);
    const[search , setSearch] = useState('');

    useEffect(() => {
        const fetchBreedsAndImages = async () => {
            try {
                const breedData = await getAll();
                const breedsWithImages = await Promise.all(
                    breedData.map(async (breed) => {
                        const imageData = await getAllimages(breed.reference_image_id);
                        return {
                            ...breed,
                            imageUrl: imageData.url,
                        };
                    })
                );
                setBreeds(breedsWithImages);
                console.log(breedsWithImages);
            } catch (error) {
                console.error('Error fetching breed data or images:', error);
            }
        };
        fetchBreedsAndImages();
    }, []);

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const filterdBreeds = breeds.filter((breed)=>
                    breed.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>

        <div className='search'>
            <input type='text' 
                   placeholder='Type the name for seaarch'
                   value={search}
                   onChange={handleInput}>
            </input>
        </div>

        <div className='main'>
            {filterdBreeds.map((breed) => (
                <div className='container' >
                    <div className='images'>
                        <img 
                            src={breed.imageUrl} 
                            alt={breed.name} 
                            onError={(e) => e.target.src = '/path/to/placeholder/image.jpg'} 
                        />
                    </div>
                    <h4>{breed.name}</h4>
                    <a href={`/details/${breed.id}`}>Details</a>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Home;
