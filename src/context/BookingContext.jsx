import React, { createContext, useState, useEffect } from 'react';
import * as flightApi from '../services/flightApi';

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  // const fetchBookings = bookings;
  
  const fetchBookings = (status = 'Upcoming') => {
    setLoading(true);
    return flightApi.getBookings(status)
      .then((data) => setBookings(data.data))
      .finally(() => setLoading(false));
  };

  const createBooking = (flightId) => flightApi.createBooking(flightId);

  return (
    <BookingContext.Provider value={{ bookings, loading, fetchBookings, createBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
