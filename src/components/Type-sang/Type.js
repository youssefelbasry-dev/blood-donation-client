import React from 'react'
import './Type.css'

export default function Type(){
  return (
    <div className='container'>
        <div id="content">
                <h3>Select the donor blood type:</h3>
                    <div id="blood_selector" style={{backgroundColor: 'transparent'}}>
                        <div>O−</div>
                        <div>O+</div>
                        <div>A−</div>
                        <div>A+</div>
                        <div>B−</div>
                        <div>B+</div>
                        <div>AB−</div>
                        <div>AB+</div>
                    </div>
                    <div id="blood_content">
                      
                      <div className="main_bag">
                        <div className="blood"></div>
                      </div>
                    </div>
                    <div id="center_via_c">
                      <div className="center_via">
                        <div className="blood_via"></div>
                      </div>
                    </div>
                    <div id="humans">
                      <div className="human left">
                        <div className="scribble"><span className="blood_type">O−</span>
                          <div className="head"></div>
                          <div className="body"></div>
                        </div>
                        <div className="via"></div>
                        <div className="blood_via"></div>
                      </div>
                      <div className="human right">
                        <div className="scribble"><span className="blood_type">O+</span>
                          <div className="head"></div>
                          <div className="body"></div>
                        </div>
                        <div className="via"></div>
                        <div className="blood_via"></div>
                      </div>
                      <div className="human left">
                        <div className="scribble"><span className="blood_type">A−</span>
                          <div className="head"></div>
                          <div className="body"></div>
                        </div>
                        <div className="via"></div>
                        <div className="blood_via"></div>
                      </div>
                      <div className="human right">
                        <div className="scribble"><span className="blood_type">A+</span>
                          <div className="head"></div>
                          <div className="body"></div>
                        </div>
                        <div className="via"></div>
                        <div className="blood_via"></div>
                      </div>
                      <div className="human left">
                    <div className="scribble"><span className="blood_type">B−</span>
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="via"></div>
                    <div className="blood_via"></div>
                  </div>
                  <div className="human right">
                    <div className="scribble"><span className="blood_type">B+</span>
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="via"></div>
                    <div className="blood_via"></div>
                  </div>
                  <div className="human left">
                    <div className="scribble"><span className="blood_type">AB−</span>
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="via"></div>
                    <div className="blood_via"></div>
                  </div>
                  <div className="human right">
                    <div className="scribble"><span className="blood_type">AB+</span>
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="via"></div>
                    <div className="blood_via"></div>
                  </div>
                </div>
              </div>
    </div>
    
  )
}