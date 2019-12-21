import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthenticatedNavBar.module.css';
import { authenticatedRoutes as paths } from '../../../constants/paths';
import DashboardSvg from '../../../assets/images/svg/Dashboard';
import ClinicsSvg from '../../../assets/images/svg/ClinicsSvg';

// LOGOUT: '/logout',
// DASHBOARD: '/dashboard',
// CLINICS: '/clinics'

const clinicSectionRoutes = [
  paths.CLINICS
];

const clinicsSection = React.createRef();
const clinicsSectionArrowRef = React.createRef();
const AuthenticatedNavBar = (props) => {
  const [location, setLocation] = useState('');

  // imitating didMount()
  useEffect(() => {
    setLocation(props.location.pathname);
    props.authNavBarOpened ? openSelectedSection(location) : hideAllSection();
  }, [location, props.authNavBarOpened]);

  // created as a field so it can access context and props
  const createSectionElements = {
    // helper function for dinamically creating menu elements
    createSectionElements: function (menuSectionTitle, menuRoutes, menuSectionRef, arrowRef) {
      // makes menu elements based on routes
      const generatedUlElements = menuRoutes.map((e, i) => {
        return (
          <li key={i} className={styles.liItem}>
            <Link to={e} className={props.location.pathname === e ? styles.highlightSelected : ''} >Clinics</Link>
          </li>
        );
      });

      return (
        <>
          <li>
            <div
              onClick={() => { toggleSection(menuSectionRef, arrowRef); }}
              className={menuRoutes.includes(props.location.pathname) ? [styles.highlightSelected, styles.ulHeading].join(' ') : styles.ulHeading}
            >
              <div className={styles.ulHeadingSvgWrapper}>
                {this.createSvgIcon(menuSectionTitle)}
              </div>
              <div className={styles.ulHeadingTextWrapper}>
                {menuSectionTitle}
              </div>
              <div className={styles.ulHeadingArrowWrapper}>
                <div ref={arrowRef} className={styles.arrowClass}  />
              </div>
            </div>
            <ul className={styles.ulContainerRow} ref={menuSectionRef}>
              <div className={styles.leftLineBefore}  />
              <ul className={styles.ulContainerColumn}>
                {generatedUlElements}
              </ul>
            </ul>
          </li>
        </>
      );
    },

    // helper function to add svg icons to sections
    createSvgIcon: function (menuSectionTitle) {
      var svg = '';
      switch (menuSectionTitle) {
        case 'Clinics':
          svg = <ClinicsSvg width='20px' />;
          break;
      }
      return svg;
      return <></>;
    }
  };

  // main return to render component
  return (
    <div
      className={props.authNavBarOpened ? styles.authNavBar : [styles.authNavBar, styles.closeNavBar].join(' ')}
      
      onMouseEnter={() => !props.authNavBarOpened && openSelectedSection(props.location.pathname)}
      onMouseLeave={() => !props.authNavBarOpened && hideAllSection()}
    >
      <ul className={styles.ulContainerList}>
        <li>
          <Link
            to={paths.DASHBOARD}
            className={props.location.pathname === paths.DASHBOARD ? styles.highlightSelected : ''}
            
          >
            <DashboardSvg width='20px' style={{ minWidth: '20px' }} />
            <div className={styles.dashboardWrapper}>Dashboard</div>
          </Link>
        </li>
        {
          createSectionElements.createSectionElements('Clinics', clinicSectionRoutes, clinicsSection, clinicsSectionArrowRef)
        }
        {/* {
          createSectionElements.createSectionElements(context.strings.cargoHeading, cargoSectionRoutes, cargoSection, cargoSectionArrowRef)
        }
        {
          createSectionElements.createSectionElements(context.strings.warehouseHeading, warehouseSectionRoutes, warehouseSection, warehouseSectionArrowRef)
        } */}
      </ul>
    </div>
  );
};

function openSelectedSection (location) {
  switch (location) {
    case paths.CLINICS:
      toggleSection(clinicsSection, clinicsSectionArrowRef);
      break;
    default:
      break;
  }
}

function hideAllSection () {
  clinicsSection.current.classList.remove(styles.showContent);
  clinicsSectionArrowRef.current.classList.remove(styles.rotateArrow);
}

function toggleSection (sectionRef, arrowRef) {
  sectionRef.current.classList.toggle(styles.showContent);
  arrowRef.current.classList.toggle(styles.rotateArrow);
}

export default AuthenticatedNavBar;
