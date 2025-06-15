import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={{ padding: 10, backgroundColor: '#87CEEB', display: 'flex', justifyContent: 'space-between' }}>
      <div><Link to="/">FlightApp</Link></div>
      <nav>
        {user ? (
          <>
            <Link to="/mybookings" style={{ marginRight: 10 }}>My Bookings</Link>
            <Link to="/management" style={{ marginRight: 10 }}>Manage</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
