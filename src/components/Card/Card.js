import React from 'react'
import './Card.css'
import Lab from '../../pictures/lab.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Card(){

  useEffect(() => {
    // Get the element with id "elementId"
    const element = document.getElementById('cardd');

    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView();
    }
  }, []); // Run this effect only once

  return (
    <div className ="profile-area" id='cardd'>
        <br/>
            <div className ="container">
                <div className ="row">
                    <div className ="col-lg-6 col-md-12 col-sm-12" id="card1">
                        <div className ="card text-center" id="card">
                            <div className ="img1">
                                <img src={Lab}  alt='img-doc'/>
                            </div>
                            <div className ="circle">
                                <span><i className="fa-solid fa-notes-medical" ></i></span>
                            </div>
                            <div className ="main-text">
                                <h2 className="text-success">Conseils avant le don de sang :</h2>
                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Assurez-vous d’être en forme : ne donnez pas lorsque vous vous sentez fatigué(e), ressentez une gêne ou une douleur.</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Evitez de venir à jeun : optez pour un petit-déjeuner ou un déjeuner équilibré.</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Hydratez-vous régulièrement : n’hésitez pas à boire de l’eau ou des jus de fruits avant et après le don.</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Evitez les boissons alcoolisées dans les heures qui précèdent le don.</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className ="col-lg-6 col-md-12 col-sm-12 " id="card2">
                        <div className ="card text-center" id="card">
                            <div className ="img1">
                                <img src={Lab}  alt='img-doc'/>
                            </div>
                            <div className ="circle">
                                <span><i className="fa-solid fa-notes-medical" ></i></span>
                            </div>
                            <div className ="main-text">
                                <h2 className="text-success">Conseils après le don de sang :</h2>
                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Après le don, reposez-vous et prenez une collation, et après 10-15 minutes, vous pouvez quitter le lieu du don</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Évitez toute activité physique intense ou soulever des objets lourds pendant 5 heures après le don.</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> En cas de vertige, il est recommandé de s'allonger sur le dos, les pieds surélevés.</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check text-success"></i>
                                        <Link> Buvez beaucoup de liquides</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}