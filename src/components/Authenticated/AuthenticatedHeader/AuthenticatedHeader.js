import React from 'react';
import styles from './AuthenticatedHeader.module.css';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import NotificationSvg from '../../../assets/images/svg/NotificationSvg';
import UserSvg from '../../../assets/images/svg/UserSvg';
import UserProfileDropdownContainer from '../../../containers/UserProfileDropdownContainer';

const AuthenticatedHeader = (props) => {
  return (
    <div className={[styles.appHeader, styles.headerShadow].join(' ')} data-theme={props.theme}>
      <div className={props.authNavBarOpened ? styles.headerLogo : [styles.headerLogo, styles.shrinkHeader].join(' ')}>
        <div className={props.authNavBarOpened ? styles.projectHeaderTitle : styles.hideElement}>PSWISA40</div>
        {/* <div className={styles.logoSrc} /> is not used */}
        <div className={styles.burgerDiv}>
          <BurgerButton theme={props.theme} onChange={() => props.toggleAuthNavBar()} checked={!props.authNavBarOpened} />
        </div>
      </div>
      <div className={styles.appHeaderContent}>
        <div className={styles.appHeaderRight}>
          <div className={styles.headerButtons}>
            <div className={styles.notificationButton} data-theme={props.theme}>
              <NotificationSvg className={styles.svgIcons} />
            </div>
            <div className={styles.userProfileButton} data-theme={props.theme}>
               <UserSvg className={styles.svgIcons} />
            </div>
            <UserProfileDropdownContainer /> {/* TODO: check if props.profPic exists, and if it does, put it as the icon, else put defualt svg */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedHeader;
