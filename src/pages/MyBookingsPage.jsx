import React, { useEffect } from 'react';
import { useBooking } from '../hooks/useBooking';
import ProtectedRoute from '../components/ProtectedRoute';

export default function MyBookingsPage() {
  const { bookings, loading, fetchBookings } = useBooking();

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div>Loading bookings...</div>;

  return (
    <ProtectedRoute>
      <div style={{ maxWidth: 800, margin: '40px auto' }}>
        <h2>My Bookings</h2>
        {bookings.length === 0 ? (
          <div>No bookings found.</div>
        ) : (
          bookings.map(b => (
            <div key={b.referenceCode} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
              <div><b>Reference:</b> {b.referenceCode}</div>
              <div><b>Flight:</b> {b.fromAirport} → {b.toAirport}</div>
              <div><b>Status:</b> {b.status}</div>
              <div><b>Booked on:</b> {new Date(b.bookingTime).toLocaleString()}</div>
            </div>
          ))
        )}
      </div>
    </ProtectedRoute>
  );
}
