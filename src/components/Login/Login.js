import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching} = useSelector((state) => state.user);
    
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='logbg'>
    <div class="login">
        <h1>Login</h1><br/>
        <form>
            <input type="text" name="username" placeholder="Username" required="required" className='inp' onChange={(e) => setUsername(e.target.value)} autoComplete="username"  />
            <input type="password" name="password" placeholder="Password" required="required" className='inp' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"  />
            <button type="submit" onClick={handleClick} disabled={isFetching}>Let me in</button>
        </form>
    </div>
    <Link to='/register' className='notalredy'>Create An Account!</Link>
    </div>
  )
}

export default Login