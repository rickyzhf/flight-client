import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as flightApi from '../services/flightApi';
import { useBooking } from '../hooks/useBooking';

export default function FlightDetailPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const { createBooking } = useBooking();
  const navigate = useNavigate();
console.log("111111111111110d -"+id);
  useEffect(() => {
    setLoading(true);
    flightApi.searchFlightsId(id)
      .then((data) => {
        console.log("111111111111111110 -"+data[0]);
        console.log("111111111111111120 -"+data.data);
        if (Array.isArray(data)) setFlight(data.data);
        else setFlight(data.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onBook = async () => {
    try {
      await createBooking(id);
      alert('Booking successful!');
      navigate('/mybookings');
    } catch {
      alert('Booking failed.');
    }
  };

  if (loading) return <div>Loading flight details...</div>;
  if (!flight) return <div>Flight not found</div>;

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Flight Details</h2>
      <p><b>Flight Number:</b> {flight.flightNumber}</p>
      <p><b>From:</b> {flight.fromAirport}</p>
      <p><b>To:</b> {flight.toAirport}</p>
      <p><b>Departure Time:</b> {new Date(flight.departureTime).toLocaleString()}</p>
      <p><b>Arrival Time:</b> {new Date(flight.arrivalTime).toLocaleString()}</p>
      <p><b>Airline:</b> {flight.airline}</p>
      <p><b>Price:</b> ${(flight.basePrice + flight.taxes).toFixed(2)}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
}
