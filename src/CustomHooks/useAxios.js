import axios from 'axios';
import React from 'react';

const axiosIntance = axios.create({
    baseURL: 'https://tamanna-b12a11-backend.vercel.app' 
})

const useAxios = () => {
    return axiosIntance ;
}

export default useAxios;