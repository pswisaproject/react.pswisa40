import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const FilterSelect = React.forwardRef((props, ref) => {
  const customStyles = {
    container: (base, state) => ({
      ...base,
      height: '30px',
      marginBottom: '15px'
    }),
    control: function (base, state) {
      return {
        ...base,
        minHeight: '100%',
        maxHeight: '100%',
        border: '1px solid #545cd8',
        borderRadius: '4px',

        '&:hover': {
          borderColor: '#545cd8',
          cursor: 'pointer'
        }
      };
    },
    indicatorSeparator: function (base, state) {
      return {
        ...base,
        marginBottom: '6px',
        marginTop: '5px'
      };
    },
    indicatorsContainer: function (base, state) {
      return {
        ...base,
        height: '30px',
        minHeight: '100%',
        maxHeight: '100%'
      };
    },
    valueContainer: (base) => ({
      ...base,
      height: '25px',
      minHeight: '25px'
    }),
    placeholder: (base) => ({
      ...base,
      top: '45%',
      fontWeight: 400,
      color: '#a8a8a8',
      fontSize: '13.25px'
    }),
    input: (base) => ({
      ...base,
      position: 'relative',
      top: '-5%',
      fontSize: '13.25px'
    }),
    singleValue: (base) => ({
      ...base,
      top: '45%',
      fontWeight: 600,
      color: '#6c757d',
      fontSize: '13.25px'
    }),
    option: (base) => ({
      ...base,
      '&:hover': {
        cursor: 'pointer'
      }
      // '&:active': {
      //   backgroundColor: '#e0f3ff',
      //   color: '#545cd8'
      // }
    })
  };

  return (
    <>
      <Select
        ref={ref}
        styles={customStyles}
        onChange={props.onChange}
        options={props.options}
        placeholder={props.placeholder}
        value={props.value}
        isDisabled={props.isDisabled}
      />
    </>
  );
});

FilterSelect.defaultProps = {
  required: false,
  isDisabled: false,
  options: {},
  onKeyDownPress: () => {}
};

FilterSelect.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.object,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default FilterSelect;
