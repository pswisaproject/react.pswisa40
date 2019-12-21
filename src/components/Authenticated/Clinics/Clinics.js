import React from 'react';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/Button/Button';
import styles from './Clinics.module.css';

const dateInputRef = React.createRef();
const docTypeInputRef = React.createRef();
const countryInputRef = React.createRef();
const cityInputRef = React.createRef();
const ratingInputRef = React.createRef();

const Clinics = (props) => {
  console.log('Clinics render', props);

  const localFunctions = {
    handleSearchBtnClick: function (e) {
      let date = dateInputRef.current.value;
      let type = docTypeInputRef.current.value;
      let country = countryInputRef.current.value;
      let city = cityInputRef.current.value;
      let rating = ratingInputRef.current.value;
      props.searchClinicsAction(
        props.sessionData,
        {date, type, country, city, rating}
      );
    },
    getDoctors: function (e) {
      let result = null;
      if (props.searchClinicsDataResponse != null) {
        if (props.searchClinicsDataResponse[0] != null) {
          result = props.searchClinicsDataResponse[0].map((e, i) => {
            return (<div key={i}>Available doctors id: {e}</div>);
          });
        }
      }
      return result;
    }
  };

  return (
    <div className={styles.clinics}>
      <Input
        ref={dateInputRef}
        label='Date'
        placeholder='Enter examination date'
      />
      <Input
        ref={docTypeInputRef}
        label='Type'
        placeholder='Enter speciality'
      />
      <Input
        ref={countryInputRef}
        label='Country'
        placeholder='Enter country'
      />
      <Input
        ref={cityInputRef}
        label='City'
        placeholder='Enter city'
      />
      <Input
        ref={ratingInputRef}
        label='Rating'
        placeholder='0 - 5'
      />
      <Button
        onClick={() => localFunctions.handleSearchBtnClick()}
        value='Search for clinics'
      />
      {localFunctions.getDoctors()}
    </div>
  );
};

export default Clinics;
