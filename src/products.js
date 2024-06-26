import React from "react";
import Product from "./product";
import img1 from './pictures/sang.jpg'
import img2 from './pictures/donner.jpg'
import img3 from './pictures/blood1.jpg'
import { useEffect } from "react";

export default function Products(){

    useEffect(() => {

        // Get the element with id "elementId"
        const element = document.getElementById('info');
    
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView(1000, 0);
        }
      }, []); // Run this effect only once

const products = [
    {
    id: 1,
    title: 'DEFINITION DU SANG:',
    text:'Liquide rouge, visqueux, qui circule dans les vaisseaux, à travers tout lorganisme, où il joue des rôles essentiels et multiples. Le sang est composé à 55% de plasma et à 45% de cellules.',
    image : img1
    },
    {
    id: 2,
    title: 'DEFINITION DU DON DU SANG:',
    text:'Le don du sang: est une pratique qui consiste à se faire prélever une partie de son sang, ou de ses produits comme le plasma et les plaquettes sanguines,afin de lutiliser pour des transfusions médicales.',
    image : img2
    },
    {
    id: 3,
    title: 'TYPE DE DON DU SANG:',
    text:'Sang total :cest le type de don de sang le plus courant ; Il comprend tous les composants du sang (globules rouges, plasma et plaquettes). •Plaquettes. •Plasma. •Des globules rouges.',
    image: img3
    },
    ];
    return(
            <div className="container" id="info">
                <br/><br/><br/><br/>
                <div class="row mb-5">
                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                    <h6 class="text-primary text-center">Information</h6>
                    <h1 class="text-center" style={{textTransform: 'uppercase'}}>Nos informations</h1>
                </div>
            </div>
        <div className="row ">
            {products.map((product) => (
            <Product key={product.id} title={product.title}
            image={product.image}  text={product.text}/>
            ))}
        </div>
        </div>
        
    )
};
