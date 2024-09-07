import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllCat ,getAllCatimages} from '../../../ApiServer/ApiServer';

function Home() {
    const[catBreeds,setCatBreeds] = useState([])
    const[search,setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCat();
                const mainData = await Promise.all(
                    data.map(async (breeds) => {
                        if(breeds.reference_image_id)
                        {
                            const images = await getAllCatimages(breeds.reference_image_id);
                            return {
                                ...breeds,
                                imageUrl: images.url,
                            };
                        }
                        else{
                            return {
                                ...breeds,
                                imageUrl: '',
                            };
                        }
                    })
                );
                setCatBreeds(mainData);
            } catch (error) {
                console.error('Unable to fetch data', error);
            }
        };
        fetchData();
    }, []);

    const HandleInput = (event) => {
        setSearch(event.target.value);
    };

    const catFilter = catBreeds.filter((breed) =>
        breed.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
      <div>
            <div className='search'>
                <input type='text' 
                    placeholder='Type the name for seaarch'
                    onChange={HandleInput}
                    value={search}
                    >
                </input>
            </div>


            <div className='main'>
                {
                    catFilter.map((breeds)=>(   
                        <div className='container' >
                        <div className='images'>
                            <img 
                               src={breeds.imageUrl}
                                alt={breeds.name}
                            />
                        </div>
                        <h4>{breeds.name}</h4>
                        <a href={`/catdetails/${breeds.id}`}>Details</a>
                    </div>
                    ))}
         </div>
        </div>
    )}

export default Home
