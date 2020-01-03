import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {
  if (props.patientInfo == null || props.medicalInfo == null) {
    return <></>
  }
  else {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.infoDiv}>
            <div className={styles.infoDivText}>Patient Card</div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>First name:</div>
              <div className={styles.info}>{props.patientInfo.first_name}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Last name:</div>
              <div className={styles.info}>{props.patientInfo.last_name}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Healthcare ID:</div>
              <div className={styles.info}>{props.patientInfo.healthcare_id}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Email address:</div>
              <div className={styles.info}>{props.patientInfo.email}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Phone number:</div>
              <div className={styles.info}>{props.patientInfo.phone}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Address:</div>
              <div className={styles.info}>{props.patientInfo.address}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>City:</div>
              <div className={styles.info}>{props.patientInfo.city}</div>
            </div>
            <div className={styles.infoFieldDiv}>
              <div className={styles.infoField}>Country:</div>
              <div className={styles.info}>{props.patientInfo.country}</div>
            </div>
          </div>
          <div className={styles.infoDiv}>
            <div className={styles.infoDivText}>Medical Information</div>
            {props.medicalInfo.diagnosis_names.map((e, i) => {
              return (
              <div key={i}>
                <div className={styles.infoFieldDiv}>
                  <div className={styles.infoField}>Diagnosis:</div>
                  <div className={styles.info}>{e}</div>
               </div>
              </div>
            )})}
          </div>
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
