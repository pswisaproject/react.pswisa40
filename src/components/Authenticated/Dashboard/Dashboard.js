import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {
  console.log(props, 'PROPS');
  if (props.patientInfo == null || props.medicalInfo == null) {
    return <></>
  } else
  {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.patientInfoDiv}>
            <div className={styles.patientInfoDivText}>Patient Information</div>
            <li>First Name: {props.patientInfo.first_name}</li>
            <li>Last Name: {props.patientInfo.last_name}</li>
            <li>Healthcare ID: {props.patientInfo.healthcare_id}</li>
            <li>Email address: {props.patientInfo.email}</li>
            <li>Phone number: {props.patientInfo.phone}</li>
            <li>Address: {props.patientInfo.address}</li>
            <li>City: {props.patientInfo.city}</li>
            <li>Country: {props.patientInfo.country}</li>
          </div>
          <div className={styles.medicalInfoDiv}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.patientInfoDiv}>
            <div className={styles.patientInfoDivText}>Medical Information</div>
            <li>Prva bolest: {props.medicalInfo.diagnosis_names[0]}</li>
            <li>Druga bolest: {props.medicalInfo.diagnosis_names[1]}</li>
          </div>
          <div className={styles.medicalInfoDiv}></div>
        </div>
      </>
    );
  }
};

function extractPatientInfo (props) {
  const extracted = props.patientInfo;
  const patientInfo = {
    healthcareID: props.patientInfo.healthcare_id
  }
  return patientInfo;
}

export default Dashboard;
