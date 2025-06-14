import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit =async (e)=>{
        //axios.fetch("http:localhost:5000//login")
        e.preventDefault();
        setError("");

        if(!name || !email || !password){
            setError("Please fill in all the fields");
            return;
        }

        if(password.length<6){
            setError("Password must be atleast of 6 characters");
            return;
        }
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`,{
                name,
                email,
                password,
            });
            toast.success("registration successfull");
            navigate("/login");
        }catch(error){
            setError(error.response.data.message);
            toast.error("Register failed please try again");
            console.log(error);
        }
    }

  return (
    <div className='bg-gray-100 flex pt-10 pb-10 items-center justify-center'>
    {/* But limits its maximum width to md (28rem or 448px) */}
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-center text-2xl font-semibold mb-6'>Sign in</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='black text-sm font-medium text-gray-700'>
                    Name
                </label>
                <input type="text" 
                    value = {name}
                    onChange={(e)=>setName(e.target.value)}
                    className='mt-1 block w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                />
            </div>
            <div className='mb-4'>
                <label className='black text-sm font-medium text-grey-700'>
                    Email
                </label>
                <input type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='mt-1 block w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                />
            </div>
            <div className='mb-4'>
                <label className='black text-sm font-medium text-grey-700'>
                    password
                </label>
                <input type="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='mt-1 block w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                />
            </div>
           
            <button 
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 my-3'
            >Register</button>
        </form>
        <p className='text-center mt-4 text-sm text-gray-700'>Already have an account{""}</p>
        <a href="/login" className='text-blue-500 hover:underline'>Please Login</a>
      </div>
    </div>
  )
}

export default Register
