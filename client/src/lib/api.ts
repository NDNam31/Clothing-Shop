const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const api = {
  get: async (endpoint: string, options: FetchOptions = {}) => {
    return request(endpoint, { ...options, method: 'GET' });
  },
  post: async (endpoint: string, body: any, options: FetchOptions = {}) => {
    return request(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
  },
  put: async (endpoint: string, body: any, options: FetchOptions = {}) => {
    return request(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
  },
  delete: async (endpoint: string, options: FetchOptions = {}) => {
    return request(endpoint, { ...options, method: 'DELETE' });
  },
};

async function request(endpoint: string, options: FetchOptions) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}
