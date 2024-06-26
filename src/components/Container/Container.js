import React from 'react'
import './Container.css'


export default function Container(){

  return (
      <div className='container'>
          <div className="row mb-5">
              <div className="col-lg-12">
                  <br/><br/><br/>
                  <h1 className="text-center text-primary" >IMPORTANCE DU DON DU SANG</h1>
                  <br/>
                  <p className="text-center" style= {{fontSize:'17px'}}>La transfusion sanguine fait partie des opérations qui contribuent à sauver des vies; Il est donné dans de tels cas:<br/>
                      • Lorsque des complications surviennent chez les femmes enceintes, telles que des saignements avant, pendant ou après l'accouchement.
                      <br/>• Pour les patients pendant les opérations chirurgicales telles que les opérations cardiaques, les vaisseaux sanguins, la chirurgie de transplantation d'organes et autres.
                      <br/>• Pour les personnes atteintes de maladies du sang.
                      <br/>• Pour les personnes blessées dans des accidents.
                      <br/>• des patients atteints du cancer.</p>
              </div>
          </div>  
          <div className="row g-3">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="iconbox text-center " style={{fontSize:'30px'}}>
                        <i className="fa-solid fa-person-dress"  aria-hidden="true" ></i>
                    </div>
                    <p className="text-center">Femmes avec<br/>
                        complication<br/>
                        de grossesse. 
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="iconbox text-center "  style={{fontSize:'30px',borderRadius: '50%'}}>
                        <i className="fa-solid fa-child" aria-hidden="true" ></i>
                    </div>
                    <p className="text-center">Enfants souffrant<br/>
                        d'anémie sévère due<br/>
                        à la malnutrition. 
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="iconbox text-center"  style={{fontSize:'30px',borderRadius: '50%'}}>
                        <i className="fa-solid fa-user-injured" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">Personnes souffrant<br/>
                        de troubles graves<br/>
                        suite à des catastrophes.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="iconbox text-center"  style={{fontSize:'30px',borderRadius: '50%'}}>
                        <i className="fa-solid fa-bed-pulse" aria-hidden="true"></i>
                    </div>
                    <p className="text-center">Procédures médicales<br/>
                        complexes et patients<br/>
                        atteints de cancer. 
                    </p>
                </div>
            </div>   
      </div>
  )
}