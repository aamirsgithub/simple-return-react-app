import React from 'react';
import './Header.css';
import NavbarComponent from '../navbar/NavbarComponent';
import image from './../../assets/boxes-floating-1.png';

const Header = () => {
  return (

    <header> 
      <div className='text-body'>

        <NavbarComponent /> 

        <div className="container-fluid py-5">
          <div className='row text-white px-5'>
            <p className='h1 font-weight-bold'>Return Your Product <br/> Without Leaving <br/> <span className='text-cyan'>Your Home</span></p>
          </div>


          <div className='row text-white font-10 ps-5 mt-3'>
            <p>We pick up returns purchased from any online retailer.<br/>
              No more printing labels, packaging, or trips to the post office
            </p>
          </div>

          <div className='d-flex ps-5 mt-3 small'>
            <div><a className='btn btn-lg btn-cyan px-5' href="#">Get Started</a></div>

            <div><a className='btn btn-lg btn-white text-cyan px-5 ms-3' href="#">Our Pricing</a></div>
          </div>


          <div className='row ps-5 mt-3'>
            <div className='col-4'><input className='form-control' type="text" placeholder='Enter Zip Code'/> </div>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

