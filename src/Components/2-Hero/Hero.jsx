import React from 'react'
import Eslam from '../../images/Eslam-Emad.png'
import lap from '../../images/lap.png'
export default function Hero() {
  return <>
    <section class=" " id="Home">
        <div class="container mx-auto">
            <div class="row d-flex justify-content-center">
                 <div class="col-md-6  justify-content-center align-items-center">
                  <img src={Eslam} alt=""  width='100px' className='Eslam'/>
                     <h1>Hi all i'm Eslam Emad</h1>
                     <p>A Passionate Front-End Developer having an experience of building Web applications 
                         With Javascript / React js / HTML/ CSS / Bootstrap / and some other cool libraries and framework </p>
                     <div class="icons">
                        {/* <!-- github linkedin gmail facebook --> */}
                         <i></i>    
                         <i></i>    
                         <i></i>    
                         <i></i>     
                     </div>
                     <div class="buttons">
                        <a class="btn btn-danger " href="#contact">Contact</a>
                         <a class="btn btn-outline-danger mx-1 " id="downloadBtn"
                          href="https://drive.google.com/file/d/1Vgi4cmkcl3C0DZQVs_lAIvwrQ4pqPsfM/view?usp=drive_link">SEE MY RESUME</a>
                     </div>
     
                 </div>
                 <div class="col-md-6  d-flex justify-content-center align-items-center">
                     <img src={lap} alt="" />
                </div>
            </div>
         </div>
    </section>
  </>
}
