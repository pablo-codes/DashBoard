import axios from 'axios'

export default
  axios.create({
    baseURL: "https://api-pablo-codes.onrender.com",
    withCredentials: true
  })
