import Axios from 'axios'

const hostname =
  typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : ''

const api = Axios.create({
  baseURL: `http://${hostname}:5000/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
