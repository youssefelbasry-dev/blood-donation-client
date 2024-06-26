import React from 'react'
import './Rows.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Rows(){

    useEffect(() => {
        // Get the element with id "elementId"
        const element = document.getElementById('donate');
    
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView(0,0);
          window.scrollTo(0, 0);
        }
      }, []); // Run this effect only once
      

  return (
    <div className="container" id='donate'>
        <br/><br/><br/><br/><br/><br/>
            <div className="row g-4">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="pricing card-effect text-center">
                        <i className="fa-solid fa-clipboard-check text-primary" style={{fontSize:'30px'}}></i>
                        <h2 className="text-primary" style={{textTransform:'uppercase'}}>Les conditions</h2>
                        <hr/>
                        <ul className="list-unstyled mb-4">
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le donneur doit être en bonne santé et ne souffrir d'aucune maladie infectieuse</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le donneur doit avoir entre 18 et 65 ans.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le poids du donneur ne doit pas être inférieur à 50 kg.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le pourcentage d'hémoglobine pour les hommes devrait être de 14 à 17 g et pour les femmes de 12 à 14 g.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le pouls doit être compris entre 50 et 100 par minute.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> La température ne doit pas dépasser 37 degrés Celsius.Que la tension artérielle moyenne est inférieure à 120/80 mm Hg.</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-primary" to='/Donate-sang'><i className="fa-solid fa-clipboard-list"></i>Test</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="pricing card-effect text-center">
                        <i className="fa-solid fa-heart-circle-bolt text-primary" style={{fontSize:'30px'}}></i>
                        <h2 className="text-primary" style={{textTransform:'uppercase'}}>Les avantage</h2>
                        <hr/>
                        <ul className="list-unstyled mb-4">
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Augmenter l'activité de la moelle osseuse pour produire de nouvelles cellules sanguines (globules rouges, globules blancs)</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Augmenter l'activité de la circulation sanguine.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le don de sang aide à réduire le fer dans le sang, car il est considéré comme l'une des causes des maladies cardiaques.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Susceptibles de souffrir de maladies circulatoires</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Susceptibles de souffrir de maladies de leucémie..</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check text-success"></i>
                                <Link> Le don de sang est également bénéfique pour votre bien-être mental et émotionnel</Link>
                            </li>
                            
                            
                        </ul>
                        <Link className="btn btn-primary" to='/Donate-sang'><i className="fa-solid fa-clipboard-list"></i> Test</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="pricing card-effect text-center">
                        <i className="fa-solid fa-circle-info text-primary" style={{fontSize:'30px'}}></i>
                        <h2 className="text-primary" style={{textTransform:'uppercase'}}>Non éligible</h2>
                        <hr/>
                        <ul className="list-unstyled mb-4">
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Moins de 18 ans.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Personnes atteintes de maladies infectieuses telles que (SIDA, hépatite B et C, syphilis, paludisme)</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Les personnes atteintes de maladies génétiques du sang.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Personnes souffrant d'anémie sévère.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Les personnes atteintes de maladies chroniques, telles que le diabète, l'hypertension artérielle, le cancer.</Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-xmark text-danger"></i>
                                <Link> Avoir eu de piercing ou de tatouages dans les 4 derniers mois précédant le don.</Link>
                            </li>
                            
                        </ul>
                        <Link className="btn btn-primary" to='/Donate-sang'><i className="fa-solid fa-clipboard-list"></i> Test</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
