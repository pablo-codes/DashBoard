import http from '../http-common'


const registerUser = (data) => {
   return http.post('/register-user', data)
}
const loginUser = (data) => {
   return http.post("/login-user", data)
}


const blogService = { registerUser, loginUser }
export default blogService