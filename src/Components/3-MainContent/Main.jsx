import React from 'react'

import freshcart from '../../images/freshcart.jpg'
import Taste from '../../images/Another-taste.jpeg'
import toDoList from '../../images/to-do list.jpg'
import Prayer from '../../images/Prayer.jpeg'
import Daniel from '../../images/Daniel.jpeg'

export default function Main() {
  return (<>
    <div id='Projects'>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <button className='btn btn-danger btn-proj'>All Projects</button>
            <button className='btn btn-danger btn-proj'>HTML & CSS</button>
            <button className='btn btn-danger btn-proj'>JavaScript</button>
            <button className='btn btn-danger btn-proj'>React & Next</button>
          </div>
          <div className="col-md-3">
              <article className='card '>
                  <img src={freshcart} alt="" />
                  <div className="card-body">
                    <h5>Project</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a className='btn btn-outline-danger' href='https://e-commerce-01-mu.vercel.app/'>Demo</a>
                  </div>
              </article>
          </div>
          <div className="col-md-3">
              <article className='card '>
                  <img src={toDoList} alt="" />
                  <div className="card-body">
                    <h5>Project</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a className='btn btn-outline-danger' href='https://islamimad12.github.io/To-Do-List/'>Demo</a>
                  </div>
              </article>
          </div>
          <div className="col-md-3">
              <article className='card '>
                  <img src={Prayer} alt="" />
                  <div className="card-body">
                    <h5>Project</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a className='btn btn-outline-danger' href='https://prayer-now.vercel.app/'>Demo</a>
                  </div>
              </article>
          </div>
          {/* col */}
          <div className="col-md-2"></div>
          <div className="col-md-3">
              <article className='card '>
                  <img src={Taste} alt="" />
                  <div className="card-body">
                    <h5>Project</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a className='btn btn-outline-danger' href='https://another-taste.vercel.app/'>Demo</a>
                  </div>
              </article>
          </div>
          <div className="col-md-3">
              <article className='card'>
                  <img src={Daniel} alt="" />
                  <div className="card-body">
                    <h5>Project</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a className='btn btn-outline-danger' href='https://islamimad12.github.io/daniel/'>Demo</a>
                  </div>
              </article>
          </div>
        </div>
      </div>
    </div>
  
  </>
  )
}
