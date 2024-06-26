import React, { useState } from 'react'
import './Insc.css'
import { useEffect } from 'react';
import axios from 'axios';
import logo from '../../pictures/lr122.png'

export default function Insc(){

	const [Alert, setAlert] = useState(false);
	



	useEffect(() => {
		// Get the element with id "elementId"
		const element = document.getElementById('contaiiiner');
	
		// If the element exists, scroll to it
		if (element) {
		  element.scrollIntoView(0,0);
		  window.scrollTo(0, 0);
		}
	  }, []); // Run this effect only once


	  const url='https://blood-donation-api-1.onrender.com/posts';
	  const [data,setData]=useState({
		nom: "",
    	prenom: "",
   		email: "",
    	tel: "",
    	ville: "",
    	Type_de_sang: "",
    	temps_dappel: ""
	  })

	  function submit(e){
			e.preventDefault();
			axios.post(url,{
				nom: data.nom,
    			prenom: data.prenom,
   				email: data.email,
    			tel: data.tel,
    			ville: data.ville,
    			Type_de_sang: data.Type_de_sang,
    			temps_dappel: data.temps_dappel
			})
			.then(res => {
				console.log(res.data);
				setData({
 				 	nom: "",
  					prenom: "",
  					email: "",
  					tel: "",
  					ville: "",
  					Type_de_sang: "",
  					temps_dappel: ""
				});
				
				setAlert(true);

				setTimeout(() => {
  				setAlert(false);
				}, 10000);
			})
			.catch(error => {
				console.log(error);
			});
			
	  }
      function scrollToTop() {
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }	

	  function handle(e){
		 const newdata={ ...data}
		 newdata[e.target.id]=e.target.value
		 setData(newdata); 
		 console.log(newdata);
	  }
  return (
    <div className="contaiiner" id='contaiiiner'>
		{Alert && (
        <div className='container'>
        	<div className="alert ">
				<div className='icon'>
					<img className="logo" src={logo} alt=""/>
				</div>
			    <div className='message'>
					<h4>Thanks For Donating</h4>
				</div>
			</div>
        </div>)}
	        <div className="phone">
                <header>
                  <div className="blooddrop" id='contaiiner'></div>
                </header>
                <h1 className='h1'>Donate blood</h1>
                <h4 className='h4'>Et faire la différence</h4>
                <p className='p'>Pourquoi attendre pour sauver une vie ? Les excuses ne sauvent jamais des vies, le don de sang le fait. Chaque goutte aidera. Inscrivez-vous pour obtenir plus d'informations et peut-être vous engager à donner du sang.</p>
	                <form onSubmit={(e)=>submit(e)} className="w-80 needs-validation" action='insert.php' method='POST' id='form'>
                        <div className="input-group was-validated">
                            <input onChange={(e)=>handle(e)} value={data.nom}  type="text" name="nom" className="form-control" pattern="[A-Za-z]{3,15}"  placeholder=" " id="nom"  required/>
					        <label for="text">Nom</label>
                        </div>
                        <div className="input-group was-validated">
                            <input onChange={(e)=>handle(e)} value={data.prenom} type="text" name="prenom" className="form-control" pattern="[A-Za-z]{3,15}" placeholder=" "  id="prenom" required/>
					        <label for="text">Prenom</label>
                        </div>
		                <div className="input-group was-validated">
                            <input onChange={(e)=>handle(e)} value={data.email} type="email" name="email" className="form-control"  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,3}" placeholder=" " id="email" required/>
					        <label for="email">Email</label>
                        </div>
				        <div className="input-group was-validated">
                            <input onChange={(e)=>handle(e)} value={data.tel} type="tel" name="tel" className="form-control"  pattern="[0-9]{10}" placeholder=" " id="tel" required/>
					        <label for="tel">Télephone</label>
                        </div>
				        <div className="input-group was-validated">
			                <select onChange={(e)=>handle(e)} value={data.ville} name="ville" className="form-control" id="ville" placeholder=" " required>
						        <option></option>
						        <option value="Agadir">Agadir</option>
						        <option value="Al Hoceima">Al Hoceima</option>
						        <option value="Azilal">Azilal</option>
						        <option value="Beni Mellal">Beni Mellal</option>
						        <option value="Ben Slimane">Ben Slimane</option>
						        <option value="Boulemane">Boulemane</option>
						        <option value="Casablanca">Casablanca</option>
						        <option value="Chaouen">Chaouen</option>
						        <option value="El Jadida">El Jadida</option>
						        <option value="Kelaat-Sraghna">Kelaat-Sraghna</option>
						        <option value="Er Rachidia">Er Rachidia</option>
						        <option value="Essaouira">Essaouira</option>
						        <option value="Fes">Fes</option>
						        <option value="Figuig">Figuig</option>
						        <option value="Guelmim">Guelmim</option>
						        <option value="Ifrane">Ifrane</option>
						        <option value="Kenitra">Kenitra</option>
						        <option value="Khemisset">Khemisset</option>
						        <option value="Khenifra">Khenifra</option>
						        <option value="Khouribga">Khouribga</option>
						        <option value="Laayoune">Laayoune</option>
						        <option value="Larache">Larache</option>
						        <option value="Marrakech">Marrakech</option>
						        <option value="Meknes">Meknes</option>
						        <option value="Nador">Nador</option>
						        <option value="Ouarzazate">Ouarzazate</option>
						        <option value="Oujda">Oujda</option>
						        <option value="Rabat-Sale">Rabat-Sale</option>
						        <option value="Safi">Safi</option>
						        <option value="Settat">Settat</option>
						        <option value="Sidi Kacem">Sidi Kacem</option>
						        <option value="Tangier">Tangier</option>
						        <option value="Tan-Tan">Tan-Tan</option>
						        <option value="Taounate">Taounate</option>
						        <option value="Taroudannt">Taroudannt</option>
						        <option value="Tata">Tata</option>
						        <option value="Taza">Taza</option>
						        <option value="Tetouan">Tetouan</option>
						        <option value="Tiznit">Tiznit</option>
					        </select>
                            <label for="text">Ville</label>
		                </div>
		                <div className="input-group was-validated">
			                <select onChange={(e)=>handle(e)} value={data.Type_de_sang} name="tb" className="form-control" id="Type_de_sang" placeholder=" " required>
				                <option></option>
				                <option>O<sup>+</sup></option>
				                <option>O<sup>-</sup></option>
				                <option>A<sup>+</sup></option>
				                <option>A<sup>-</sup></option>
				                <option>B<sup>+</sup></option>
				                <option>B<sup>-</sup></option>
				                <option>AB<sup>+</sup></option>
				                <option>AB<sup>-</sup></option>
			                </select>
			                <label for="text">Type de sang</label>
		                </div>
		                <div className="input-group was-validated">
			                <select onChange={(e)=>handle(e)} value={data.temps_dappel} name="time" className="form-control" id="temps_dappel" placeholder=" " required>
				                <option></option>
				                <option>24H</option>
				                <option>8H-12H</option>
				                <option>12H-18H</option>
				                <option>18H-00H</option>
			                </select>
                            <label for="time">Temps d'appel</label>
		                </div>
		                <button className="btnn" name="btnn" type="submit" onClick={scrollToTop}>Nouveau donneur</button>
		            </form>
			    </div>
            </div>
		
  )
}

