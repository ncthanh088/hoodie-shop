import axios from 'axios';
import { baseUrl } from '../constants';

export const getItems = () => {
    return axios.get(`${baseUrl}/products`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        })
}

export const getItemById = (id) => {
    return axios.get(`${baseUrl}/products/${id}`)
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
}