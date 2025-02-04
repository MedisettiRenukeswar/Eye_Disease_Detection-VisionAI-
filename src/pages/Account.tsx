import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const res = await axios.get('http://localhost:5000/api/account', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      {user ? (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <p className="text-lg mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="text-lg"><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}