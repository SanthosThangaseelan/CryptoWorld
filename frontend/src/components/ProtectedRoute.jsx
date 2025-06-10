// src/components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { auth } from '../firebase/firebasseConfig';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (!user) navigate('/login');
    });
    return () => unsub();
  }, []);

  return children;
}
