/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import auth from '../services/authService';

const Nav = ({ libraryStatus, setLibraryStatus, currentSong }) => {
  const user = auth.getCurrentUser();
  function logout() {
    auth.logout();
    window.location.href = '/login';
  }

  return (
    <nav
      style={{
        color: `${currentSong.color[0]}`,
      }}
      className='navbar navbar-light bg-light'
    >
      <h4 id='logo'> Sophie'21 </h4>
      <h4
        style={{
          cursor: 'default',
        }}
      >
        {user ? `Hello ${user.name} 🎊` : ''}
      </h4>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <button onClick={() => logout()}>Logout</button>
    </nav>
  );
};

export default Nav;
