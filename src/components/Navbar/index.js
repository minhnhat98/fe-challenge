import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { routes } from '../../routes';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink exact='true' to='/' className='nav-logo'>
            AlanCoding
            <i className='fas fa-code'></i>
          </NavLink>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {routes.map((item, index) => {
              return (
                item.isShowNavbar && (
                  <li className='nav-item' key={index}>
                    <NavLink
                      exact='true'
                      to={item.path}
                      className='nav-links'
                      onClick={handleClick}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
              );
            })}
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
