import React from 'react'
import './Botn.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Botn(){
  const navigate = useNavigate();
  const handleClick = (evt) => {
    evt.target.classList.add('loading');
    setTimeout(() => {
      evt.target.classList.remove('loading');
      // window.location= '/Donate-sang'; // Redirect to new page
      navigate('/Donate-sang#contaiiner');
    }, 2000);
  }

  return (
    <div className='container'>
        <br/><br/>
            <div className="bd">
                    <Link className="botn" onClick={handleClick}>
                        <i className="fa-solid fa-heart-circle-plus"></i>
                        <span className="text text-center">
                            Nouveau donneur
                        </span>
                        <span className="loading-animate"></span>
                    </Link>
            </div>
    </div>
  )
}
