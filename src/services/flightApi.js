import http from './http';

export const login = (credentials) => http.post('/auth/login', credentials);

export const register = (data) => http.post('/auth/register', data);

export const checkLogin = () => http.get('/auth/check');

export const searchFlights = (params) => http.post('/flights/search', params);

export const searchFlightsId = (id) =>  http.get(`/flights/searchId?id=${id}`);
// export const searchFlightsId = (id) =>  http.post('/flights/searchId', id);
export const getBookings = (status) => http.get(`/bookings?status=${status}`);

// export const createBooking = (params) => http.post('/bookings', params);
export const createBooking = (flightId) =>  http.post('/bookings', null, { params: { flightId },  });
