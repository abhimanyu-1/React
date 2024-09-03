import axios from "axios";

const BASE_URL = 'https://api.thedogapi.com/'

export const getAll = async() => {
    const response = axios.get(`${BASE_URL}/v1/breeds`);
    return (await response).data;
}

export const getAllimages = async(img) => {
    const response = axios.get(`${BASE_URL}/v1/images/${img}`);
    return (await response).data;
}

export const getDetails = async(id) => {
    const response = axios.get(`${BASE_URL}/v1/breeds/${id}`);
    return (await response).data;
}