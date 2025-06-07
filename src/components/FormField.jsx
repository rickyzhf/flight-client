import React from 'react';

export default function FormField({ label, ...props }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
      <input {...props} style={{ width: '100%', padding: 8, boxSizing: 'border-box' }} />
    </div>
  );
}
