import axios from 'axios';
import {BASE_URL} from "./config";

const API = axios.create({
    // baseURL: 'https://nikonych.pythonanywhere.com/api', // Замените на ваш базовый URL
    baseURL: `${BASE_URL}/api`, // Замените на ваш базовый URL
});
export default API;
