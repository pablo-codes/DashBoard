import axios from 'axios'

export default
  axios.create({
    baseURL: "https://server-sj6t.onrender.com",
    withCredentials: true
  })
