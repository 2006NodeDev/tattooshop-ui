import axios from 'axios'


export const bookingClient = axios.create({
    baseURL: 'http://localhost:2013',
    headers:{
        'Content-Type': 'application/json',
    }
})