import axios from "axios";

const DOG_BASE_URL = 'https://api.thedogapi.com/'
const CAT_BASE_URL = 'https://api.thecatapi.com'

export const getAll = async() => {
    const response = axios.get(`${DOG_BASE_URL}/v1/breeds`);
    return (await response).data;
}

export const getAllimages = async(img) => {
    const response = axios.get(`${DOG_BASE_URL}/v1/images/${img}`);
    return (await response).data;
}

export const getDetails = async(id) => {
    const response = axios.get(`${DOG_BASE_URL}/v1/breeds/${id}`);
    return (await response).data;
}

//------------------------------
                                                                                                                                                    
export const getAllCat = async() => {
    const response = axios.get(`${CAT_BASE_URL}/v1/breeds`);
    return (await response).data;
}

export const getAllCatimages = async(img) => {
    const response = axios.get(`${CAT_BASE_URL}/v1/images/${img}`);
    return (await response).data;
}

export const getCatDetails = async(id) => {
    const response = axios.get(`${CAT_BASE_URL}/v1/breeds/${id}`);
    return (await response).data;
}
