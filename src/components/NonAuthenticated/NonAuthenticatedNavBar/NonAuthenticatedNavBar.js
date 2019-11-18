import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NonAuthenticatedNavBar.module.css';
import { nonAuthenticatedRoutes as paths } from '../../../constants/paths';

class NavBar extends Component {
  render () {
    return (
      <div className={styles.NavBar}>
        <div className={styles.NavBarElementsContainer}>
          <ul className={styles.topNav}>
            <li>
              <Link to={paths.HOME}>Home</Link>
            </li>
            <li>
              <Link to={paths.LOGIN}>Login</Link>
            </li>
            <li>
              <Link to={paths.REGISTER}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
