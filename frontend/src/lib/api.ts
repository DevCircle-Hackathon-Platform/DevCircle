// src/lib/api.ts
// Utility to call backend API

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
