import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AuthenticatedNavBar.module.css';
import { authenticatedRoutes as paths } from '../../../constants/paths';
import { logout } from '../../../store/actions/logout';

class NonAuthenticatedNavBar extends Component {
  render () {
    return (
      <div className={styles.NavBar}>
        <div className={styles.NavBarElementsContainer}>
          <ul className={styles.topNav}>
            <li>
              <Link to={paths.DASHBOARD}>Dashboard</Link>
            </li>
            <li><a onClick={() => this.props.logout()}>Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      loggedin: state.login.loggedin
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      logout
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(NonAuthenticatedNavBar);
