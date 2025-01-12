import React, { useState } from 'react';
import freshcart from '../../images/freshcart.jpg';
import Taste from '../../images/Another-taste.jpeg';
import toDoList from '../../images/to-do list.jpg';
import Prayer from '../../images/Prayer.jpeg';
import Daniel from '../../images/Daniel.jpeg';
import Devdolio from '../../images/Devdolio.jpeg';
import Bookmark from '../../images/Bookmark.jpeg';

export default function Main() {
  const [currentActive, setCurrentActive] = useState('all');
  
  const myProjects = [
    {projectTitle: 'fresh cart', category: 'react', imgPath: freshcart ,demo:'https://e-commerce-01-mu.vercel.app/'},
    {projectTitle: 'Another Taste', category: 'react', imgPath: Taste ,demo:'https://another-taste.vercel.app/'},
    {projectTitle: 'to do list', category: 'js', imgPath: toDoList ,demo:'https://islamimad12.github.io/To-Do-List/'},
    {projectTitle: 'prayer', category: 'react', imgPath: Prayer ,demo:'https://prayer-now.vercel.app/'},
    {projectTitle: 'Daniel', category: 'css', imgPath: Daniel ,demo:'https://islamimad12.github.io/daniel/'},
    {projectTitle: 'Devfolio', category: 'css', imgPath: Devdolio ,demo:'https://islamimad12.github.io/devfolio/'},
    {projectTitle: 'Bookmark', category: 'js', imgPath: Bookmark ,demo:'https://islamimad12.github.io/Bookmark-app/'},
  ];

  const [arr, setArr] = useState(myProjects);

  return (
    <>
      <div id='Projects'>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <button
                onClick={() => {
                  setArr(myProjects);
                  setCurrentActive('all');
                }}
                className={`btn btn-danger btn-proj ${currentActive === 'all' ? 'active' : ''}`}
              >
                All Projects
              </button>
              <button
                onClick={() => {
                  const newArr = myProjects.filter((item) => item.category === 'css');
                  setArr(newArr);
                  setCurrentActive('css');
                }}
                className={`btn btn-danger btn-proj ${currentActive === 'css' ? 'active' : ''}`}
              >
                HTML & CSS
              </button>
              <button
                className={`btn btn-danger btn-proj ${currentActive === 'js' ? 'active' : ''}`}
                onClick={() => {
                  const newArr = myProjects.filter((item) => item.category === 'js');
                  setArr(newArr);
                  setCurrentActive('js');
                }}
              >
                JavaScript
              </button>
              <button
                className={`btn btn-danger btn-proj ${currentActive === 'react' ? 'active' : ''}`}
                onClick={() => {
                  const newArr = myProjects.filter((item) => item.category === 'react');
                  setArr(newArr);
                  setCurrentActive('react');
                }}
              >
                React & Next
              </button>
            </div>
            <div className="col-md-10">
              <div className="row">
                {arr.map((item) => (
                  <section className="col-md-4" key={item.imgPath}>
                    <article className="card">
                      <img src={item.imgPath} alt={item.projectTitle} />
                      <div className="card-body">
                        <h5>{item.projectTitle}</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a className="btn btn-outline-danger" href={item.demo}>
                          Demo
                        </a>
                      </div>
                    </article>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
