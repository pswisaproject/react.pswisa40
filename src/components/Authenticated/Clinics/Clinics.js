import React, { Component } from 'react';
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
    selectedRating: '',
    readingMore: false
  }

  constructor (props) {
    super(props);
    this.dateRef = React.createRef();
    this.doctorTypeRef = React.createRef();
    this.countryRef = React.createRef();
    this.cityRef = React.createRef();
    this.ratingRef = React.createRef();

    // this should be by id, not by string, but the function is already written as is.
    this.doctorTypeOptions = [
      { value: '', label: 'Enter specialty'},
      { value: 'INTERNAL_MEDICINE', label: 'Internal Medicine'},
      { value: 'SURGERY', label: 'Surgery'},
      { value: 'PEDIATRICS', label: 'Pediactrics'},
      { value: 'DERMATOLOGY', label: 'Dermatology'},
      { value: 'CARDIOLOGY', label: 'Cardiology'},
      { value: 'NEUROLOGY', label: 'Neurology'},
      { value: 'RADIOLOGY', label: 'Radiology'},
      { value: 'ONCOLOGY', label: 'Oncology'},
      { value: 'PSYCHIATRY', label: 'Psychiatry'},
      { value: 'ENDOCRINOLOGY', label: 'Endocrinology'},
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
    console.log(this.props.searchClinicsDataResponse, 'PROPPSS');
    const clinicCards = this.props.searchClinicsDataResponse && this.props.searchClinicsDataResponse.clinics_data.map((value, index) => {
      return (
        <>
        {/* ---------- CLINIC CARDS BELOW ---------- */}
          {!this.state.readingMore && (
            <div className={styles.clinicCard} key={index}>
              <div className={styles.clinicInfoDiv}>
                <div className={styles.infoDiv}>
                  <div className={styles.clinicInfoLabel}>Clinic name:</div>
                  <div className={styles.info}>{value.name}</div>
                </div>
                <div className={styles.infoDiv}>
                  <div className={styles.clinicInfoLabel}>Clinic address:</div>
                  <div className={styles.info}>{value.address}</div>
                </div>
                <div className={styles.infoDiv}>
                  <div className={styles.clinicInfoLabel}>Checkup price:</div>
                  <div className={styles.info}>{value.checkup_price}</div>
                </div>
                <div className={styles.infoDiv}>
                  <div className={styles.clinicInfoLabel}>Operation price:</div>
                  <div className={styles.info}>{value.operation_price}</div>
                </div>
                <div className={styles.infoDiv}>
                  <div className={styles.clinicInfoLabel}>Rating:</div>
                  <div className={styles.info}>{value.rating}</div>
                </div>
              </div>
              <div className={styles.clinicCardOptionsDiv}>
                <div className={styles.moreInfoButtonDiv}>
                  <div className={styles.moreInfoButton} onClick={(e) => this.handleMoreInfo(e)}>
                    More Info
                  </div>
                </div>
              </div>
            </div>)}
            {/* ---------- DOCTOR CARDS BELOW ---------- */}
          {this.state.readingMore && (
            value.doctors_data.map((value, index) => {
              return (
                <div className={styles.clinicCard} key={index}>
                  <div className={styles.clinicInfoDiv}>
                    <div className={styles.infoDiv}>
                      <div className={styles.clinicInfoLabel}>Doctor name:</div>
                      <div className={styles.info}>{value.name}</div>
                    </div>
                    <div className={styles.infoDiv}>
                      <div className={styles.clinicInfoLabel}>Doctor surname:</div>
                      <div className={styles.info}>{value.surname}</div>
                    </div>
                    <div className={styles.infoDiv}>
                      <div className={styles.clinicInfoLabel}>Doctor rating:</div>
                      <div className={styles.info}>{value.rating}</div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </>
    )});
      

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
        {this.state.readingMore && (
          <div className={styles.filterButtonsDiv}>
            <div className={styles.filterButtons} onClick={(e) => this.handleMoreInfo(e)}>
              Less Info
            </div>
        </div>)}
        <div className={styles.clinicCardContainer}> 
          {clinicCards}
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

  handleMoreInfo = (e) => {
    this.setState({ readingMore: !this.state.readingMore });
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
      readingMore: false,
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
