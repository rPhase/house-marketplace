import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

const NavOptions = [
  { id: 1, route: '/', text: 'Explore', icon: ExploreIcon },
  { id: 2, route: '/offers', text: 'Offers', icon: OfferIcon },
  { id: 3, route: '/profile', text: 'Profile', icon: PersonOutlineIcon },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return '#2c2c2c';
    }
    return '#8f8f8f';
  };

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          {NavOptions.map((option) => (
            <li
              key={option.id}
              className='navbarListItem'
              onClick={() => navigate(option.route)}
            >
              <option.icon
                fill={pathMatchRoute(option.route)}
                width='36px'
                height='36px'
              />
              <p
                className={
                  pathMatchRoute(option.route) === '#2c2c2c'
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                {option.text}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
