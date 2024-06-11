import React from 'react'
import img1 from '../../images/4421964-removebg-preview.png'
export default function About() {
  return <>
    <div className="container " id='About'>
        {/* <h2>About</h2> */}
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 d-flex justify-content-center mx-auto"><img src={img1} alt=""  width={'300px'}/></div>
            <div className="col-md-6">
                <h3>What I Do</h3>
                <p> CRAZY FRONT END DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK</p>
                <p>Develope highly interactive Front-End / User Interface For Your Web applications</p>
                <p>Develope Websites with React js</p>
                <p>Designs websites with tailwind & Bootstrap</p>
            </div>
        </div>
    </div>
  </>
}
