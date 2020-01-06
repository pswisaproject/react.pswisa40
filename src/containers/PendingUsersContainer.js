import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingUsers from '../components/Authenticated/Admin/PendingUsers/PendingUsers';
import getPendingUsers from '../store/actions/getPendingUsers';
import handleUserRegistration from '../store/actions/handleUserRegistration';

class PendingUsersContainer extends Component {
	constructor (props) {
		super(props);
		this.hData = {
			Ht: this.props.session.Ht,
		}
	}

  componentDidMount () {
		this.getPendingUsers(this.hData)
  }

  render () {
    return <PendingUsers 
			getPendingUsers={this.getPendingUsers}
			pendingUsers={this.props.pendingUsers.response.data}
			handleUserRegistration={this.handleUserRegistration}
		/>
	}
	
	getPendingUsers = () => {
		this.props.getPendingUsers(this.hData)
	}

	handleUserRegistration = (data) => {
		this.props.handleUserRegistration(data, this.hData);
	}
}

function mapStateToProps (state) {
  return {
    session: state.session,
    pendingUsers: state.pendingUsers
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
				getPendingUsers,
				handleUserRegistration
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingUsersContainer);
