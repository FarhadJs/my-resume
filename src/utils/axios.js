// filepath: /home/raiden/Documents/Projects/My Projects/Vue/my-present-website/src/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://farhadfallahi.liara.run/api', // Replace with your API base URL
  // baseURL: 'http://localhost:3000/api', // Replace with your API base URL
  headers: { 'X-Custom-Header': 'MyResume' }
})

export default axiosInstance