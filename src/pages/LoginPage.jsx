import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      navigate('/');
    } catch {
      setError('Login failed. Check credentials.');
    }
  };
  const onSelectFlight = (flight) => {
    navigate('/register');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Welcome Back</h2>
      <form onSubmit={onSubmit}>
        <FormField label="Username or Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <FormField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" style={{ marginTop: 10 }}>Login</button>
      </form>
      <br></br>Don't have an account? 
      <button onClick={() => onSelectFlight()}>Sign up</button>

    </div>
  );
}
