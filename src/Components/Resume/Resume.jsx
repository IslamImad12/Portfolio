import React from 'react'
import img3 from '../../images/Route.jpg'
import img4 from '../../images/EZ-DK.jpg'
export default function Resume() {
  return <>
    <section class="py-5" id="Resume">
        <div class="container">
            <h3 class="text-center">Achievements and certification</h3>
            <div class="row">
                <div class=" col-md-6"><img src={img3} class="w-100" alt=""/></div>
                <div class=" col-md-6"><img src={img4} class="w-100" alt=""/></div>
            </div>
        </div>
    </section>
  </>
}
