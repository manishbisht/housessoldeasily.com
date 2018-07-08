import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.userActions = bindActionCreators(userActions, dispatch);
    }

    logout() {
        this.userActions.logout({});
    }

    render() {
        if(!this.props.user.id) {
            this.props.history.push('/');
        }
        return (
            <div style={{textAlign: 'center', padding: 250}}>
                Welcome to dashboard !!<br />
                <Button variant="contained" color="primary" onClick={() => this.logout()}>
                    Logout
                </Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps)(Dashboard);
