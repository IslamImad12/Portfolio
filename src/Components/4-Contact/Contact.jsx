import React from 'react'

export default function Contact() {
  return <>
    <section id="contact" class="">
        <div class="container">
            <div class="row">
                <h3>Contact me</h3>
                <div class="col-md-12"><input type="text" placeholder="Name: " class="form-control"/></div> <br/> <br/>
                <div class="col-md-12"><input type="text" placeholder="Email " class="form-control"/></div> <br/> <br/>
                <div class="col-md-12"><textarea class="form-control" name="" id="" placeholder="your message"></textarea></div>
            </div>
        </div>
    </section>
  </>
}
