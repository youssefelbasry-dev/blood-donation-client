import React from 'react'
import './Login.css'
import  Sheild from '../../pictures/lr122.png'
import  logo from '../../pictures/docteur.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faKey, faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
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
                <p>Bienvenue sur notre page de connexion !<br/>
                Veuillez saisir vos identifiants ci-dessous.</p>
            </div>
            <div className='LoginForm'>
            <form className="formulaire">
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Entre Username...'/>
                    <label>Username</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textbox">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Mot De Passe...'/>
                    <label>Mot De Passe</label>
                    <FontAwesomeIcon icon={faKey} className='usr'/>
                </div>
                <div className='btnbnr'>
                    <button type="submit" onClick={handleClick} disabled={isFetching}>
                        Se Connecter
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        {passwordType === 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}  
                    </button>
                </div>
                <Link className='noAcount' to='/register'>I don't Have An Account!</Link>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login