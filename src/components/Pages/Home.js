import React from 'react';
import './style.css';

import { data } from '../../data';

import LazyImage from '../LazyImage';

export const Home = () => {
  return (
    <React.Fragment>
      <div className='hero'>
        <div className='hero-one'></div>
        <div className='hero-two'></div>
        <h1 className='header-title'>
          <span className='header-primary'>Alan</span>
          <span className='header-sub'>The front-end engineer</span>
        </h1>
      </div>
      <div data-test-id='component-app' className='container'>
        <h5 className='gallery-title'>Image Gallery</h5>
        <div className='flexbox'>
          {data.map((item, index) => (
            <LazyImage src={item.src} key={index} />
          ))}
        </div>
        <div className='flexbox-2'>
          {data.map((item, index) => (
            <img className='flexbox-2-img' src={item.src} alt='' key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
