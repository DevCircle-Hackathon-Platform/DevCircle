// src/pages/Sample.tsx
import { useEffect, useState } from 'react';
import { apiFetch } from '../lib/api';

export default function Sample() {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    apiFetch('/api/sample')
      .then((res) => setData(res.message))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Sample API Test</h1>
      {data && <p>Backend says: {data}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
