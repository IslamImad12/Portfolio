import React from 'react'
import img2 from '../../images/2202757-removebg-preview.png'
export default function Skills() {
  return <>
    <section id="Skills">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-md-6">
                    <h3>Proficiency</h3>
                    <span>HTML</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'95%' , 'background-color':'#dd1b1b' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>CSS</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'86%' , 'background-color':'#22a5e2' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>JS</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'76%' , 'background-color':'#f8f535' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>React js</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'80%' , 'background-color':'#1a94cc' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>Bootstrap</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'95%' , 'background-color':'#bd1ad3' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>tailwind</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'80%' , 'background-color':'#22a5e2' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    <span>Next js</span> <br/>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{'width':'70%' , 'background-color':'#343434' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                    
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <img src={img2} class="w-100" alt=""/>
                </div>
            </div>
        </div>
    </section>
  </>
}