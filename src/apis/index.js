import axios from 'axios'

const API = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
    
})


export const fetchGetData = async () =>{
    const res = await API.get('/users')
    console.log(res)
    return res
}