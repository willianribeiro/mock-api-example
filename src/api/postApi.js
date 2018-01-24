import axios from 'axios'

// ENV VARIABLES
const BASE_URL = 'http://jsonplaceholder.typicode.com'


// EXPORT
export default {
  list,
  get,
  save,
  remove
}


// API
function list() {
  return axios.get(`${BASE_URL}/posts`)
}

function get(id) {
  return axios.get(`${BASE_URL}/posts/${id}`)
}

function save(entry) {
  return axios.post(`${BASE_URL}/posts`, { ...entry })
}

function remove(id) {
  return axios.delete(`${BASE_URL}/posts/${id}`)
}