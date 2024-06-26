import React from 'react'
import { useEffect } from 'react';
import './Test.css'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Test(){
  const navigate = useNavigate();
    useEffect(() => {
		// Get the element with id "elementId"
		const element = document.getElementById('contaiiner');
	
		// If the element exists, scroll to it
		if (element) {
		  element.scrollIntoView();
		}
	  }, []); // Run this effect only once
    
      function handleSubmit(event) {
        event.preventDefault();
        const Swal = require('sweetalert2')
          
        // Check if the user is eligible
        if(document.getElementById('yes').checked && 
        document.getElementById('lees').checked &&
        document.getElementById('try').checked &&
        document.getElementById('as').checked &&
        document.getElementById('fain').checked) {
          // Show an alert message and redirect the user
          
          Swal.fire({
            title: "Bien!",
            text: "Merci de répondre. Vous devriez être éligible pour faire un don, alors continuez à vous inscrire.",
            icon: "success",
            timer: 8000,
            timerProgressBar: true,
            button: 'ok'
            }).then(function() {
                // Redirect the user to another page when the timer ends
                // window.location = "insc";
                navigate('/insc');
              });
              
        } else {
          // Show an alert message and redirect the user
          Swal.fire({
            title: 'Error!',
            text: 'Vous n"êtes pas éligible, Nous vous conseillons de ne pas vous inscrire comme donneur de sang!',
            icon: 'error',
            confirmButtonText: 'ok',
            timer: 8000,
            timerProgressBar: true,
          }).then(function() {
            // Redirect the user to another page when the timer ends
            // window.location = "/";
            navigate('/');
          });
          
        }
      }

      
  return (
    
    <div className="contaiiner" id='contaiiner'>
        
    <div className="phone">
        <header>
            <div className="blood-drop"></div>
        </header>
        <h1 className='h1'>Donate blood</h1>
        
            <p id="p" style={{fontFamily: 'Urbanist, sans-serif'}}>
               Avant de vous inscrire comme donneur de sang<br/>La plupart des gens peuvent donner du sang, mais parfois il n'est pas possible d'être un donneur de sang.<br/>
               Veuillez répondre aux cinq questions suivantes afin que nous puissions vous indiquer si le don de sang vous convient.
               Vos réponses ne sont en aucun cas enregistrées<br/>Ces questions ne s'appliquent que si vous souhaitez vous inscrire en tant que nouveau donneur de sang.
            </p>
        
        
        <form onSubmit={handleSubmit}>
        <h4 id='qst'>1. Vous avez entre 18 et 65 ans ?</h4>
        <p className="radio">
            <input type="radio" id="yes" name="age"/>
            <label for="f-option" className="label">Yes</label>

            <input type="radio" id="no" name="age"/>
            <label for="s-option" className="label">No</label>
        </p>
           
        <h4 id='qst'>2. Pesez-vous actuellement moins de 50 kg?</h4>
        <p className="radio">
            <input type="radio" id="up" name="kg"/>
            <label for="f-option" className="label">Yes</label>
    
            <input type="radio" id="lees" name="kg"/>
            <label for="s-option" className="label">No</label>
        </p>
       
        <h4 id='qst'>3. Avez-vous atteintes de maladies génétiques du sang.?</h4>
        <p className="radio">
            <input type="radio" id="mount" name="prd"/>
            <label for="f-option" className="label">Yes</label>
    
            <input type="radio" id="try" name="prd"/>
            <label for="s-option" className="label">No</label>
        </p>
        <h4 id='qst'>4. Avez-vous atteintes de maladies chroniques, telles que le diabète, l'hypertension artérielle?</h4>
        <p className="radio">
            <input type="radio" id="all" name="jan"/>
            <label for="f-option" className="label">Yes</label>
    
            <input type="radio" id="as" name="jan"/>
            <label for="s-option" className="label">No</label>
        </p>
      
        <h4 id='qst'>5. Avez-vous déjà eu un cancer autre que le carcinome basocellulaire ou le carcinome cervical insitu (CIN) ?</h4>
        <p className="radio">
            <input type="radio" id="main" name="cancer"/>
            <label for="f-option" className="label">Yes</label>
    
            <input type="radio" id="fain" name="cancer"/>
            <label for="s-option" className="label">No</label>
        </p>
        <button className="submit" id="btn">Result!</button>
        </form>
    </div>
    
</div>

  )
}

