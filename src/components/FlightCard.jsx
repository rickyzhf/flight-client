import React from 'react';

export default function FlightCard({ flight, onSelect }) {
  return (
    <div style={{ border: '1px solid #ddd', marginBottom: 10, padding: 10, cursor: 'pointer' }} onClick={() => onSelect(flight)}>
      <div><b>{flight.flightNumber}</b> — {flight.fromAirport} → {flight.toAirport}</div>
      <div>Departure: {new Date(flight.departureTime).toLocaleString()}</div>
      <div>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</div>
      <div>Airline: {flight.airline}</div>
      <div>Price: ${(flight.basePrice + flight.taxes).toFixed(2)}</div>
    </div>
  );
}
