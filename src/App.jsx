import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import FlightDetailPage from './pages/FlightDetailPage';
import MyBookingsPage from './pages/MyBookingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // 可选
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultPage />} />
            <Route path="/flight/:id" element={<FlightDetailPage />} />
            <Route path="/mybookings" element={
              <ProtectedRoute>
                <MyBookingsPage />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> {/* 可选 */}
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </AuthProvider>
  );
}
