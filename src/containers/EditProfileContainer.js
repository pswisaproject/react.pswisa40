import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditProfile from '../components/Authenticated/EditProfile/EditProfile';
import editUser from '../store/actions/editUser';

class EditProfileContainer extends Component {
  constructor (props) {
    super(props);
    this.hData = { Ht: this.props.session.Ht };
  }

  render () {
    return <EditProfile
      editUser={this.editUser}
    />;
  }

  editUser = (data) => {
    this.props.editUser(data, this.hData);
  }
}

function mapStateToProps (state) {
  return {
    session: state.session
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      editUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
