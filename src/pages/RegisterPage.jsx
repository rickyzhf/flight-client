import React, { useState } from 'react';
import { register } from '../services/flightApi';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '', country: '', phone: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(form);
      navigate('/login');
    } catch {
      setError('Registration failed.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Create your account</h2>
      <form onSubmit={onSubmit}>
        <FormField label="Email address" name="email" type="email" value={form.email} onChange={onChange} required />
        <FormField label="Password" name="password" type="password" value={form.password} onChange={onChange} required />
        <FormField label="First Name" name="firstName" value={form.firstName} onChange={onChange} required />
        <FormField label="Last Name" name="lastName" value={form.lastName} onChange={onChange} required />
        <FormField label="Country/Region" name="country" value={form.country} onChange={onChange} required />
        <FormField label="Phone number" name="phone" value={form.phone} onChange={onChange} required />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" style={{ marginTop: 10 }}>Register</button>
      </form>
    </div>
  );
}
