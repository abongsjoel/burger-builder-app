import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tj-burger-builder.firebaseio.com/'
});

export default instance;