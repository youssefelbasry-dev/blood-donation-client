import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://blood-donation-api-1.onrender.com/auth/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='regbg'>
    <div class="register">
        <h1>Register</h1><br/>
        <form method="post">
            <input type="text" name="username" placeholder="Username" required="required" className='inp' onChange={(e) => setUsername(e.target.value)} autoComplete="username"  />
            <input type="email" name="email" placeholder="Email" required="required" className='inp' onChange={(e) => setEmail(e.target.value)} autoComplete="Email"  />
            <input type="password" name="password" placeholder="Password" required="required" className='inp' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"  />
            <button type="submit" class="loginbtn" id='loginbtn' onClick={handleSubmit}>Let me in</button>
        </form>
    </div>
    <Link to='/Login' className='alredy'>Alredy Have Account!</Link>
    </div>
  )
}

export default Register