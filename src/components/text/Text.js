import React from 'react'
import './Text.css'
import poster from '../../pictures/Blood-Donation-1.jpg'
import vedio from '../../pictures/project-fr.mp4'


export default function Text(){

  return (
    <div className='container'>
        <div className="row">    
                <div id="text" className ="col-lg-12 col-md-12 col-sm-12">
                    <br/><br/>
                    <h2 className ="card-title mt-3 text-danger text-center">UNE GOUT DU SANG EGAL UNE VIE.</h2>
                    <h4 className ="card-title mt-3 text-danger text-center">FAITES UN DON S'IL VOUS PLAIT.</h4><br/>
                    <p className="text-center">
                        "Peu de votre sang peut donnerde nombreuses années
                        de vie a QUELQU'UN."<br/>
                        "Ne refusez jamais de donner du sang si vous pouvez,
                        comme vous peut être le prochain nécessiteux."
                    </p><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 center">
                    <div  className="embed-responsive embed-responsive-16by9">
                        <video id="vedio" className="embed-responsive-item" style={{borderRadius: '20px'}} poster={poster} controls >
                            <source src={vedio} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
    </div>
  )
}