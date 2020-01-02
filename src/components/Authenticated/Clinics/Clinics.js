import React, { Component } from 'react';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/Button/Button';
import styles from './Clinics.module.css';
import FilterSelect from '../../UI/FormElements/FilterSelect/FilterSelect';
import DatePicker from 'react-datepicker';
import '../../../assets/libs/react-datepicker-css/react-datepicker.css';

class Clinics extends Component {
  state = {
    date: null,
    selectedDoctorType: '',
    selectedCountry: '',
    selectedCity: '',
    selectedRating: ''
  }

  constructor (props) {
    super(props);
    this.dateRef = React.createRef();
    this.doctorTypeRef = React.createRef();
    this.countryRef = React.createRef();
    this.cityRef = React.createRef();
    this.ratingRef = React.createRef();

    this.doctorTypeOptions = [
      { value: '', label: 'Enter specialty'},
      { value: 1, label: 'Internal Medicine'},
      { value: 2, label: 'Surgery'},
      { value: 3, label: 'Pediactrics'},
      { value: 4, label: 'Dermatology'},
      { value: 5, label: 'Cardiology'},
      { value: 6, label: 'Neurology'},
      { value: 7, label: 'Radiology'},
      { value: 8, label: 'Oncology'},
      { value: 9, label: 'Psychiatry'},
      { value: 10, label: 'Endocrinology'},
    ];

    this.ratingOptions = [
      { value: '', label: 'Enter rating'},
      { value: 1, label: '1'},
      { value: 2, label: '2'},
      { value: 3, label: '3'},
      { value: 4, label: '4'},
      { value: 5, label: '5'},
    ];

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
          <div className={styles.datePickerDiv}>
            <DatePicker 
              className={styles.customCalendar}
              placeholderText='Click to select a date'
              selected={this.state.departureDate}
              ref={this.dateRef}
              isClearable
            />
          </div>
          <div className={styles.selectDiv}>
            <FilterSelect
              ref={this.doctorTypeRef}
              onChange={(e) => this.handleSelected(this.doctorTypeRef, e)}
              placeholder='Enter speciality'
              value={this.state.selectedDoctorType ? this.doctorTypeOptions[this.state.selectedDoctorType] : ''}
              options={this.doctorTypeOptions}
            />
          </div>
          <div className={styles.selectDiv}>
            <FilterSelect
              ref={this.ratingRef}
              onChange={(e) => this.handleSelected(this.ratingRef, e)}
              placeholder='Enter rating'
              value={this.state.selectedRating ? this.ratingOptions[this.state.selectedRating] : ''}
              options={this.ratingOptions}
            />
          </div>
          <div className={styles.selectDiv}>
            <FilterSelect
              ref={this.countryRef}
              onChange={(e) => this.handleSelected(this.countryRef, e)}
              placeholder='Enter country'
              options={options}
            />
          </div>
          <div className={styles.selectDiv}>
            <FilterSelect
              ref={this.cityRef}
              onChange={(e) => this.handleSelected(this.cityRef, e)}
              placeholder='Enter city'
              options={options}
            />
          </div>
          <div className={styles.filterButtonsDiv}>
            <div className={styles.filterButtons} onClick={(e) => this.handleSearch(e)}>
              Search
            </div>
          </div>
          <div className={styles.filterButtonsDiv}>
            <div className={styles.filterButtons} onClick={(e) => this.handleReset(e)}>
              Reset
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSelected = (ref, e) => {
    console.log(e.value);
    switch (ref) {
      case this.doctorTypeRef:
        this.setState({
          selectedDoctorType: e.value
        });
        break;
      case this.ratingRef:
        this.setState({
          selectedRating: e.value
        });
        break;
      case this.cityRef:
        this.setState({
          selectedCity: e.value
        });
        break;
      case this.countryRef:
        this.setState({
          selectedCountry: e.value
        });
        break;
      default:
        break;
    }
  }

  handleSearch = (e) => {
    const selectedDoctorType = this.state.selectedDoctorType;
    const selectedRating = this.state.selectedRating;
    const selectedCountry = this.state.selectedCountry;
    const selectedCity = this.state.selectedCity;
    const selectedDate = this.state.date;

    const searchData = {
      date: selectedDate,
      type: selectedDoctorType,
      country:  selectedCountry,
      city: selectedCity,
      rating: selectedRating
    };
    this.props.searchClinicsAction(searchData);
  }

  handleReset = (e) => {
    this.setState({
      date: null,
      selectedCity: '',
      selectedCountry: '',
      selectedDoctorType: '',
      selectedRating: ''
    });
    this.props.searchClinicsAction(null);
  }
}

export default Clinics;
