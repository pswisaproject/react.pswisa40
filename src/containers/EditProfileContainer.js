import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditProfile from '../components/Authenticated/EditProfile/EditProfile';
import editUserAction from '../store/actions/editUser';

class EditProfileContainer extends Component {
  constructor (props) {
    super(props);
    this.hData = { Ht: this.props.session.Ht };
  }

  render () {
    return <EditProfile
      editUser={this.props.editUser}
      editUserAction={this.editUserAction}
    />;
  }

  editUserAction = (data) => {
    this.props.editUserAction(data, this.hData);
  }
}

function mapStateToProps (state) {
  return {
    session: state.session,
    editUserError: state.editUser.error
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      editUserAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
