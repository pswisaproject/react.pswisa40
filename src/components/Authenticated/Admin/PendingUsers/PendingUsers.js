import React, { Component } from 'react';
import styles from './PendingUsers.module.css';

class PendingUsers extends Component {
  render () {
    
    const pendingUsers = this.props.pendingUsers && this.props.pendingUsers.pending_users.map((value, index) => {
      return (
        <div className={styles.userContainer} key={index}>
          <div className={styles.userId}>{value.id}</div>
          <div className={styles.userEmail}>{value.email}</div>
          <div className={styles.userRegReq}>{value.reg_request}</div>
          <div className={styles.approveDiv}>
            <div className={styles.approveDenyButtonDiv}>
              <div className={styles.approveDenyButton} onClick={(e) => this.handleRegistration(value.id, 1, e)}>Approve</div>
            </div>
          </div>
          <div className={styles.denyDiv}>
            <div className={styles.approveDenyButtonDiv}>
              <div className={styles.approveDenyButton}onClick={(e) => this.handleRegistration(value.id, 0, e)}>Deny</div>
            </div>
          </div>
          {/* <div className={styles.textAreaDiv}>
            <input ref={value.id} />
          </div> */}
        </div>
      );
    });

    return (
      <div className={styles.pendingUsersContainer}>
        <div className={styles.containerTitle}>Pending Users</div>
        <div className={styles.pendingUsersListContainer}>
          <div className={styles.tableRow}>
            <div className={styles.userId}>User ID</div>
            <div className={styles.userEmail}>Email address</div>
            <div className={styles.userRegReq}>Registration status</div>
          </div>
          {pendingUsers}
        </div>
      </div>
    );
  }

  handleRegistration = (id, isApproved, e) => {
    // const message = React.findDOMNode(this.refs.id).value;
    // console.log(message);
    const data = {id, isApproved}
    this.props.handleUserRegistration(data);
    this.props.getPendingUsers();
  }
}

export default PendingUsers;
