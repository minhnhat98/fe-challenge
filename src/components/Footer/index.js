import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='item1'>
          <a
            href='/privacy'
            target='_blank'
            className='nav-item'
            rel='noreferrer'
          >
            Privacy
          </a>
        </div>

        <div className='item2'>
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{' '}
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} AlanNguyen. All Rights Reserved.
          </span>
        </div>
        <a
          href='https://github.com/minhnhat98/fe-challenge'
          target='_blank'
          className='item3'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://www.facebook.com/minasamaaa/'
          target='_blank'
          className='item4'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href='https://www.youtube.com/channel/UCMhZBNizqgCgVW0u1Jnf2hw'
          target='_blank'
          className='item5'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
