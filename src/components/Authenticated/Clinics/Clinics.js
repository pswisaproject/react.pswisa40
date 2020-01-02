import React, { Component } from 'react';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/Button/Button';
import styles from './Clinics.module.css';
import FilterSelect from '../../UI/FormElements/FilterSelect/FilterSelect';
import DatePicker from 'react-datepicker';

class Clinics extends Component {
  state = {
    
  }

  constructor (props) {
    super(props);
    this.dateInputRef = React.createRef();
    this.docTypeInputRef = React.createRef();
    this.countryInputRef = React.createRef();
    this.cityInputRef = React.createRef();
    this.ratingInputRef = React.createRef();
  }

  render () {
    const options = [ // temporary
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <DatePicker>
            
          </DatePicker>
          <FilterSelect
            ref={this.docTypeInputRef}
            placeholder='Enter speciality'
          />
          <FilterSelect
            ref={this.countryInputRef}
            placeholder='Enter country'
          />
          <FilterSelect
            ref={this.cityInputRef}
            placeholder='Enter city'
          />
          <FilterSelect
            ref={this.ratingInputRef}
            placeholder='Enter rating'
            options={options}
            // onChange={(e) => this.handleSelected(this.selectDeparturePostalCodeRef, e)}
          />
          <div className={styles.searchButtonDiv}>
            <div className={styles.searchButton}>
              Search
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const dateInputRef = React.createRef();
// const docTypeInputRef = React.createRef();
// const countryInputRef = React.createRef();
// const cityInputRef = React.createRef();
// const ratingInputRef = React.createRef();

// const Clinics = (props) => {
//   console.log('Clinics render', props);

//   const localFunctions = {
//     handleSearchBtnClick: function (e) {
//       let date = dateInputRef.current.value;
//       let type = docTypeInputRef.current.value;
//       let country = countryInputRef.current.value;
//       let city = cityInputRef.current.value;
//       let rating = ratingInputRef.current.value;
//       props.searchClinicsAction(
//         props.sessionData,
//         {date, type, country, city, rating}
//       );
//     },
//     getDoctors: function (e) {
//       let result = null;
//       if (props.searchClinicsDataResponse != null) {
//         if (props.searchClinicsDataResponse[0] != null) {
//           result = props.searchClinicsDataResponse[0].map((e, i) => {
//             return (<div key={i}>Available doctors id: {e}</div>);
//           });
//         }
//       }
//       return result;
//     }
//   };

//   return (
//     <div className={styles.clinics}>
//       <Input
//         ref={dateInputRef}
//         label='Date'
//         placeholder='Enter examination date'
//       />
//       <Input
//         ref={docTypeInputRef}
//         label='Type'
//         placeholder='Enter speciality'
//       />
//       <Input
//         ref={countryInputRef}
//         label='Country'
//         placeholder='Enter country'
//       />
//       <Input
//         ref={cityInputRef}
//         label='City'
//         placeholder='Enter city'
//       />
//       <Input
//         ref={ratingInputRef}
//         label='Rating'
//         placeholder='0 - 5'
//       />
//       <Button
//         onClick={() => localFunctions.handleSearchBtnClick()}
//         value='Search for clinics'
//       />
//       {localFunctions.getDoctors()}
//     </div>
//   );
// };

export default Clinics;
