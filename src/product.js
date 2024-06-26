import React from "react";
import './Product.css'
import { useEffect } from "react";



export default function Product(props){
    useEffect(() => {

        // Get the element with id "elementId"
        const element = document.getElementById('info');
    
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView(1000, 0);
        }
      }, []); // Run this effect only once

      
    return(
        
    
        <div className="col-lg-4 col-md-12 col-sm-12" id='info'>
            <div className="card shadow-sm ">
                  <img id='img' className="bd-placeholder-img card-img-top" src={props.image} alt="" />
                  <div className="card-body">
                      <p className="card-title text-center text-primary">{props.title}</p>
                      <p className="card-text text-center">{props.text}</p>
                  </div>
             </div>
        </div>
        
    );
}