import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as flightApi from '../services/flightApi';
import FlightCard from '../components/FlightCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultPage() {
  const query = useQuery();
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const from = query.get('from');
  const to = query.get('to');
  const departureDate = query.get('departureDate');

useEffect(() => {
  if (!from || !to || !departureDate) {
    navigate('/');
    return;
  }

  setLoading(true);
  flightApi.searchFlights({ from, to, departureDate })
    .then((res) => {
      console.log("Fetched Flights:", res.data);
      setFlights(res.data);
    })
    .catch((err) => {
      console.error("API error:", err);
      setFlights([]); 
    })
    .finally(() => setLoading(false));
    // return () => abortController.abort();
}, [from, to, departureDate, navigate]);



  const onSelectFlight = (flight) => {
    navigate(`/flight/${flight.id}`);
  };

return (
    <div style={{ maxWidth: 1000, margin: '40px auto' }}>
      <h2>Search Results</h2>

      {loading && <div>Loading flights...</div>}
      {!loading && flights.length === 0 && <div>No flights found.</div>}

      {!loading && flights.length > 0 && (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>From</th>
              <th>To</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Price</th>
              <th>Seat Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.fromAirport}</td>
                <td>{flight.toAirport}</td>
                <td>{new Date(flight.departureTime).toLocaleString()}</td>
                <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                <td>${flight.basePrice + flight.taxes}</td>
                <td>{flight.seatClass}</td>
                <td>
                  <button onClick={() => onSelectFlight(flight)}>Select</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
