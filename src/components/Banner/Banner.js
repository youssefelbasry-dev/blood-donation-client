import React from 'react'
import './Banner.css'
import doc from '../../pictures/docteur.png'
import logo from '../../pictures/lr122.png'
import { Link } from 'react-router-dom';

export default function Banner(){



  return (
    <div className='container'>
        <br/><br/><br/>
                <div className="banner-container">
                    <div className="banner">
                        <div className="doc">
                            <img src={doc} alt="" />
                        </div>
                        <div className="content">
                            <h6>Etre un</h6>
                            <h5>super-héros et</h5>
                            <h4>donner du sang</h4>
                            <br/>
                            <Link className="btn" to='/Donate-sang'>Donate</Link>
                        </div>
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="banner-container">
                    <div className="banner">
                        <div className="doc">
                            <img src={doc} alt="" />
                        </div>
                        
                        <div className="content">
                            <i className="fa-solid fa-person"></i>
                            <span className="text-white">=</span>
                            <i className="fa-solid fa-person"></i>
                            <i className="fa-solid fa-person"></i>
                            <i className="fa-solid fa-person"></i>
                            <p></p>
                            <h5 style={{fontSize: '19px'}}>1 Litre peut toucher</h5>
                            <h6> 3 vies</h6>
                            <br/>
                            <Link className="btn" to='/Donate-sang'>Donate</Link>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
    </div>
  )
}
