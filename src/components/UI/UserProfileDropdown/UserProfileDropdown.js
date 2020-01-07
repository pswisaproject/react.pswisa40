import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserProfileDropdown.module.css';
import TicketSvg from '../../../assets/images/svg/TicketSvg';
import ChatSvg from '../../../assets/images/svg/ChatSvg';
import { authenticatedRoutes as paths } from '../../../constants/paths';

const UserProfileDropdown = (props) => {
  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  // event listener
  const handleClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  function handleShowMenu (event) {
    !isVisible
      ? setIsVisible(true)
      : setIsVisible(false);
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.userProfileButtonContainer} onClick={(e) => handleShowMenu(e)}>
        <div className={styles.userProfileButton} />
        <div className={styles.userProfileArrow} />
      </div>
      {
        isVisible && (
          <div className={styles.menu}>
            <div className={styles.menuHeader}>
              <div className={styles.menuHeaderContent}>
                <div className={styles.profilePicture} /> {/* If picture is given through props, show it, otherwise show a default  picture */}
                <div className={styles.profileInformation}>
                  <div className={styles.profileName}>User's Name</div>
                  <div className={styles.profileDescription}>A placeholder description to see if it will wrap and such.</div>
                </div>
                <div className={styles.logoutButtonDiv}>
                  <div className={styles.logoutButton}>Logout</div>
                </div>
              </div>
            </div>
            <div className={styles.scrollArea}>
              <div className={styles.scrollBarContainer}>
                <ul className={styles.listColumn}>
                  <li className={styles.listHeader}>My account</li>
                  {/* Temporary addresses to suppress errors */}
                  <li className={styles.listItem}><Link to={paths.EDIT_PROFILE}>Edit Profile</Link></li>
                </ul>
              </div>
            </div>
            <div className={styles.gridMenu}>
              <div className={styles.yellowButtonContainer}>
                <div className={styles.yellowButton}>
                  <ChatSvg className={styles.chatSvg} /> {/* Use another SVG. This one's from online. */}
                  <div className={styles.chatText}>Chat</div>
                </div>
              </div>
              <div className={styles.yellowButtonContainer}>
                <div className={styles.redButton}>
                  <TicketSvg className={styles.ticketSvg} /> {/* Use another SVG. This one's from online. */}
                  <div className={styles.ticketText}>Support ticket</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonAtBottomDiv}>
              <div className={styles.buttonAtBottom} onClick={props.handleLogout}>
                Logout
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default UserProfileDropdown;
