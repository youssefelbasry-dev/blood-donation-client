import React from 'react'
import './Find.css'
import { useEffect } from 'react';
import axios from "axios"
import { useState } from "react"
export default function Find(){
  
    useEffect(() => {
		// Get the element with id "elementId"
		const element = document.getElementById('contaiiner');
	
		// If the element exists, scroll to it
		if (element) {
		  element.scrollIntoView(0,0);
		  window.scrollTo(0, 0);
		}
	}, []); // Run this effect only once




    // const [todos,setTodos]=useState([])


    const [formData, setFormData] = useState({ Type_de_sang: '', ville: '' });
    const [filteredDonors, setFilteredDonors] = useState([]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { Type_de_sang, ville } = formData;
        try {
            const response = await axios.get(`https://blood-donation-api-1.onrender.com/posts?Type_de_sang=${Type_de_sang}&ville=${ville}`);
            setFilteredDonors(response.data.filter(todos => todos.Type_de_sang === Type_de_sang && todos.ville === ville));
        } catch (error) {
             console.log(error);
        }
    }
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


      
  return (
    <div className="ctrl">
        <div className="container">
            <div className="text-center" id="form">
            <br/><br/><br/><br/><br/>
                <h2 className="text-center"><i class="fa-solid fa-magnifying-glass"></i></h2>
                <h2 className="text-center">TROUVER UN DONNEUR</h2>
                <br/><br/>
                <form  onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select  className="form-select" name="ville" onChange={handleChange} value={formData.ville} required>
                                <option >Select votre ville</option>
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
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select className="form-select" name="Type_de_sang" onChange={handleChange} value={formData.Type_de_sang}  required>
                                <option >Select votre type de sang</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>    
                    <br/>
                    <button style={{fontFamily: "'Courier New', Courier, monospace"}} type="submit" className="btn btn-primary" name="btn" id='btnfind'>Rechercher</button>
                </form>
            </div>
            <br/>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table id="tableau" className="table sticky table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="text-primary">Nom</th>
                            <th scope="col" className="text-primary">Prenom</th>
                            <th scope="col" className="text-primary">Ville</th>
                            <th scope="col" className="text-primary">Type de sang</th>
                            <th scope="col" className="text-primary">Télephone</th>
                            <th scope="col" className="text-primary">Temps d'appel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDonors.map((todo)=>{
                            return(
                                <tr key={todo.id}>
                                    <td data-label="Nom">{todo.nom}</td>
                                    <td data-label="Prenom">{todo.prenom}</td>
                                    <td data-label="Ville">{todo.ville}</td>
                                    <td data-label="Type de sang">{todo.Type_de_sang}</td>
                                    <td data-label="Telphone">{todo.tel}</td>
                                    <td data-label="Temps dappel">{todo.temps_dappel}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

