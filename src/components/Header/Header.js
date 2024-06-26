import React from 'react'
import './Header.css'
import logo from '../../pictures/lr122.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function Header(){


  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white fixed-top" >
  <div className="container">
    <Link className="navbar-brand" to='/'>
     <img className="logo" src={logo} alt=""/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'><HashLink className="nav-link active" aria-current="page" to='/#hero'>Home</HashLink></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/'><HashLink className="nav-link" to='/#info'>Information</HashLink></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'><HashLink className="nav-link" to='/#groupsanguin'>Groupe-sanguin</HashLink></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Faire-un-don'><HashLink className="nav-link" to='/Faire-un-don#donate'>Faire-un-don</HashLink></Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to='/Faire-un-don'><HashLink className="nav-link" to='/Faire-un-don#cardd'>Conseil</HashLink></Link>
        </li>
      </ul>
      <HashLink className="btn btn-primary ms-lg-3" to='Trouver-donneur#contaiiner'  style={{fontSize:"15px"}} >Trouver-donneur</HashLink>
    </div>
  </div>
</nav>

  )
}
