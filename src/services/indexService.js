import http from '../http-common'

const index = (id) => {
    return http.get(`/index/${id}`)
}
const edit = (id) => {
    return http.get(`/edit-user/${id}`)
}
const update = (id, data) => {
    return http.put(`/update-user/${id}`, data)
}

const indexService = { index, edit, update }
export default indexService