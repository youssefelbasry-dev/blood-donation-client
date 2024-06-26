import React from 'react'
import './Groups.css'
import bld from '../../pictures/bld1.jpeg'
import tb1 from '../../pictures/bt-a.png'
import tb2 from '../../pictures/bt-b.png'
import tb3 from '../../pictures/bt-o.png'
import tb4 from '../../pictures/bt-ab.png'



import { useEffect } from 'react';

export default function Groups(){

    useEffect(() => {
        // Get the element with id "elementId"
        const element = document.getElementById('groupsanguin');
    
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView(1000, 0);
          window.scrollTo(0, 0);
        }
      }, []); // Run this effect only once


  return (
    <div className="container" id="groupsanguin">
        <br/><br/><br/>
            <div className="row mb-5">
                <div className="col-lg-12">
                    <br/><br/>
                    <h1 className="text-primary text-center">GROUPE SANGUIN</h1>
                    <br/>
                    <p className="text-center" data-aos='fade'>
                        Un groupe sanguin est une classification reposant sur la présence ou l'absence de substances antigéniques héritées à la surface des globules rouges (hématies). Ces antigènes peuvent être des protéines, des glucides, des glycoprotéines ou des glycolipides, selon le système de groupe sanguin, et certains de ces antigènes sont également présents à la surface d'autres types de cellules de différents tissus.
                        Les divers groupes sanguins sont regroupés en systèmes. Appartient à un même système de groupes sanguins l'ensemble des épitopes ou phénotypes résultant de l'action des divers allèles d'un même gène ou de gènes étroitement liés.
                    </p>
                </div>
            </div>   
            <div className="card" style={{backgroundColor:"transparent"}}>
                <div className="row">
                    <div className ="col-md-4">
                        <img src ={bld} style={{height: '250px'}} className="img-fluid rounded"  alt='img-doc'/>
                    </div>
                    <div className ="col-md-8">
                        <h2 className ="card-title mt-3 text-primary text-center" >COMPABILITÉ DES GROUPES SANGUINS</h2>
                        <p className="text-center" >
                            Avant de procéder à une transfusion, il est primordial qu’il y ait compatibilité entre le groupe sanguin du donneur et celui du receveur. Si l'on transfuse au malade un composant sanguin d'un groupe non compatible, son système immunitaire va reconnaître la présence de substances qui lui sont étrangères, appelées « antigènes ». Une incompatibilité peut entraîner le rejet du composant sanguin et une aggravation de l'état du malade. Des tests de compatibilité sont réalisés à l'hôpital avant chaque transfusion.
                        </p>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="row g-3">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="text-center">
                       <img src={tb1} style={{height: '200px',width: '150px'}} className="img-fluid"  alt='img-bld'/> 
                    </div>
                    <h4 className="text-danger text-center">Groupe A :</h4>
                    <p className="text-center">La surface des globules rouges contient<br/>
                        l'antigène A et le plasma contient des<br/>
                        anticorps anti-B. L'anticorps anti-B<br/>
                        attaquerait les cellules sanguines<br/>
                        contenant l'antigène B
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="text-center">
                       <img src={tb2} style={{height: '200px',width: '150px'}} className="img-fluid"  alt='img-bld'/> 
                    </div>
                    <h4 className="text-danger text-center">Groupe B :</h4>
                    <p className="text-center">La surface des globules rouges contient<br/>
                        l'antigène B et le plasma contient des<br/>
                        anticorps anti-A. L'anticorps anti-A<br/>
                        attaquerait les cellules sanguines<br/>
                        qui contiennent l'antigène A..
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="text-center">
                       <img src={tb3} style={{height: '200px',width: '150px'}} className="img-fluid"  alt='img-bld'/> 
                    </div>
                    <h4 className="text-danger text-center">Groupe O :</h4>
                    <p className="text-center">Le plasma contient à la fois des anticorps<br/>
                        anti-A et anti-B, mais la surface des<br/>
                        globules rouges ne contient aucun antigène
                        A ou B. n'importe groupe<br/>
                        sanguin peut recevoir ce type 
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="text-center">
                       <img src={tb4} style={{height: '200px',width: '150px'}} className="img-fluid"  alt='img-bld'/> 
                    </div>
                    <h4 className="text-danger text-center">Groupe AB :</h4>
                    <p className="text-center">Les globules rouges possèdentà la fois
                        les <br/>antigènesA et B,mais le plasma ne<br/>
                        contient pas d'anticorps anti-A ou<br/> anti-B.
                        type AB recevoirn'importe<br/> quel groupe sanguin ABO.
                    </p>
                </div>
            </div>
        </div>    
  )
}
