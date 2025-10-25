import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-blue-500/30 shadow-xl shadow-blue-500/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-blue-500'>Admin</span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            <div>
              <label className='flex flex-col'>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='border-b-2 border-gray-300 p-2 outline-none mb-6' required placeholder='Your Email ID' />
            </div>
            <div>
              <label className='flex flex-col'>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='border-b-2 border-gray-300 p-2 outline-none mb-6' required placeholder='Password' />
            </div>
            <button type='submit' className='w-full py-3 font-medium bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-300 transition-all duration-500' >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
