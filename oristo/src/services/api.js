// ✅ api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7246/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token');
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("🔒 Unauthorized. Possibly invalid/expired token.");
    }
    return Promise.reject(err);
  }
);

// ✅ Task API functions
export const getTasks = async () => {
    const response = await API.get('/Task');
    return response.data;
}
export const createTask = async (data) => {
  const response = await API.post('/Task', data);
  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await API.put(`/Task/${id}`, data);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await API.delete(`/Task/${id}`);
  return response.data;
};
