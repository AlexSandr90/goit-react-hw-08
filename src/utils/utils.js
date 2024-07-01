import axios from 'axios';

export const setAuthHeader = (token) => {
  console.log('Setting auth header:', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  console.log('Clearing auth header');
  delete axios.defaults.headers.common.Authorization;
};

