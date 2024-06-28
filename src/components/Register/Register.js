import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  Sheild from '../../pictures/lr122.png'
import  logo from '../../pictures/docteur.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faKey, faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState('password');

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
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  }
  return (
    <div className='Login'>
        <div className='LoginDS'>
            <div className='LoginImg'>
                <div className='imgdivsheild'>
                    <img src={Sheild} alt='sheild'/>
                </div>
                <h1>BloodLink</h1>
                <p>Plateforme en ligne facilitant l'inscription des donneurs de sang,<br/> la recherche de donneurs par groupe sanguin et localisation..</p>
            </div>
        </div>
        <div className='LoginDiv'>
            <div className='LoginInfo'>
                <div className='imglg'>
                     <img src={logo} alt='logo'/>
                </div>
                <h1>BloodLink!</h1>
                <p>Bienvenue sur notre page de registrement !<br/>
                Veuillez saisir vos identifiants ci-dessous.</p>
            </div>
            <div className='LoginForm'>
            <form className="formulaire">
                <div className="textboxx">
                    <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Entre Username...'/>
                    <label>Username</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textboxx">
                    <input type="email" className='inputLg' onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder='Entre Email...'/>
                    <label>Email Address</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textboxx">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Mot De Passe...'/>
                    <label>Mot De Passe</label>
                    <FontAwesomeIcon icon={faKey} className='usr'/>
                </div>
                <div className='btnbnr'>
                    <button type="submit" onClick={handleSubmit}>
                        Register
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        {passwordType === 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}  
                    </button>
                </div>
                <Link className='noAcount' to='/login'>Already Have An Account!</Link>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register