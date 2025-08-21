import axios from 'axios';

const mockApi = {
  post: async (url, data) => {
    if (url === '/auth/login') {
      return {
        data: {
          user: { id: '1', email: data.email, role: data.email === 'admin@test.com' ? 'admin' : 'employee' },
          token: 'mock-token',
        },
      };
    }
    throw new Error('Mock API not implemented');
  },
  get: async (url) => {
    if (url === '/tasks') {
      return {
        data: [
          { id: '1', title: 'Sample Task', description: 'Test task', assignee: '2', status: 'pending', dueDate: '2025-09-01' },
        ],
      };
    }
    if (url === '/users') {
      return {
        data: [
          { id: '1', email: 'admin@test.com', role: 'admin' },
          { id: '2', email: 'emp@test.com', role: 'employee' },
        ],
      };
    }
    if (url === '/tasks/my-tasks') {
      return {
        data: [
          { id: '1', title: 'Sample Task', description: 'Test task', assignee: '2', status: 'pending', dueDate: '2025-09-01' },
        ],
      };
    }
    throw new Error('Mock API not implemented');
  },
  patch: async (url, data) => {
    if (url.startsWith('/tasks/')) {
      return { data: { id: url.split('/')[2], ...data, title: 'Sample Task', description: 'Test task', assignee: '2', dueDate: '2025-09-01' } };
    }
    throw new Error('Mock API not implemented');
  },
};

const api = process.env.REACT_APP_MOCK_API ? mockApi : axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;