import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://mud-cs23-backend.herokuapp.com/api',
    headers: {
      Authorization: `Token ${token}`
    }
  });
};

export default axiosWithAuth;

// Local:   http://localhost:8000/api
// Test Server: https://lambda-mud-test.herokuapp.com/api
