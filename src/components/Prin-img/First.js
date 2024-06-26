import React from 'react'
import './First.css'
import blood  from '../../pictures/bllod-ilustration.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch} from 'react-redux';
import { logout } from '../redux/userRedux';
export default function First(){
  const dispatch = useDispatch();
   
  const handleLogoutClick = () => {
    dispatch(logout());
  };

    useEffect(() => {
        // Get the element with id "elementId"
        const element = document.getElementById('hero');
    
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView(1000, 0);
        }
      }, []); // Run this effect only once
  return (
    
    <div id="hero"> 
    <div className="container text-light text-start text-sm-start py-5">
       <br/><br/><br/><br/><br/>
        <div className="d-sm-flex align-items-start justify-content-start">
            <div className="py-3">
                <h1 className="display-5">Blood <span className="text-primary">Donation</span></h1>
                <br/>
                <p className="py-1 lead">Bienvenue sur notre Site Web, Ici vous pouvez donner du sang et trouver des donneurs de sang avec des informations et des conseils sur le don de sang et quelques statiques pour le don de sang dans notre pays.</p>
                <br/>
                <Link className=" text-center" to='Trouver-donneur'><HashLink className="btn btn-primary text-center" to='/Trouver-donneur#contaiiner'>Trouver-donneur</HashLink></Link>
                <Link className="text-center" to='Donate-sang'><HashLink className="btn btn-primary  text-center" to='/Donate-sang#contaiiner'>Donate-sang</HashLink></Link>
                <Link className="text-center"  onClick={handleLogoutClick}><HashLink className="btn btn-primary  text-center">Logout</HashLink></Link>

            </div>
            <img className="floating d-none d-sm-block img-fluid w-50" src={blood} alt=""/>
        </div>
    </div>
</div>
  )
}