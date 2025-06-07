import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';

export default function HomePage() {
  const [trip, setTrip] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arriveDate, setArriveDate] = useState('');
  const [passager, setPassager] = useState('');
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !departureDate) return alert('Please fill all fields');
    navigate(`/search?from=${from}&to=${to}&departureDate=${departureDate}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Search Flights</h2>
      <form onSubmit={onSearch}>
        <FormField label="Trip type" value={trip} onChange={e => setTrip(e.target.value)}  />
        <FormField label="From" value={from} onChange={e => setFrom(e.target.value)} required />
        
        <FormField label="To" value={to} onChange={e => setTo(e.target.value)} required />
        <FormField label="Departure Date" type="date" value={departureDate} onChange={e => setDepartureDate(e.target.value)} required />
        <FormField label="Arrive Date" type="date" value={arriveDate} onChange={e => setArriveDate(e.target.value)}  />
        <FormField label="Passager" value={passager} onChange={e => setPassager(e.target.value)} />
       <button type="submit" style={{ marginTop: 10 }}>Search flights</button>
      </form>
    </div>
  );
}
