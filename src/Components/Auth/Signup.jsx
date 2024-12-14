import React, { useEffect, useState } from 'react';
import authService from '../../appwrite/auth';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../../Store/Slices/ChatSlice';
import { useNavigate } from 'react-router-dom';
import config from '../../appwrite/Config';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const user = await authService.createAccount({email, password, name});
      if(user){
        const session = await authService.getCurrentUser()
        try {
          const setonline = await config.createUpdatePost({documentId: session.$id, text: 'online'})
          console.log(setonline)
          console.log("clfea")
        } catch (error) {
          
        }
        if(session){
          navigate('/')
          
        }
      }
    } catch (error) {
      setError(error);
    }

  }



  return (
    <div className="flex bg-black justify-center items-center h-screen w-full">
      <div className="bg-white p-8 rounded shadow-md w-[30%]">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-2" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            Sign Up
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;