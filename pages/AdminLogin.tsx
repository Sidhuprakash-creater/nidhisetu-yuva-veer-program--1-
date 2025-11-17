import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAdmin, REQUIRED_ADMIN_EMAIL } from '../firebase';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInAdmin(username, password);
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-dark-teal text-center">Admin Login</h1>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={REQUIRED_ADMIN_EMAIL}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-dark-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-teal transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg transition-transform">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;