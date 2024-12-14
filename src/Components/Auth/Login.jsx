import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      
    } catch (error) {
      setError(error)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black w-full">
      <div className="bg-white p-8 rounded shadow-md w-[25%]">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-2" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold mb-2" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;