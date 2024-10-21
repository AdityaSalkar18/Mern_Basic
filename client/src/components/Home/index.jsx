import React from 'react';
import { Link } from "react-router-dom";
import NavbarS from '../Main';
import { BsBookHalf } from 'react-icons/bs';
// import styles from './styles.module.css';

export const Home = () => {
 
  return (
    <div>
      <NavbarS />
     
      <div class="px-4 py-5 my-5 text-center">
      <BsBookHalf style={{ fontSize: '50px', color: '#3C4142' }} />
    
    <h1 class="display-5 fw-bold text-body-emphasis mb-3">LIBRARY MANAGMENT SYSTEM</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 mb-3">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <h6 class="mt-5 mb-3">Get Started</h6>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/bookrec"><button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="ztnpc">Add Record</button></Link>
      </div>
    </div>
  </div>

    </div>
  );
};

export default Home;
