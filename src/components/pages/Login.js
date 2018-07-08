import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../redux/actions/userActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.state = {
            email: '',
            password: '',
        };

        this.userActions = bindActionCreators(userActions, dispatch);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    isAccountValid() {
        let email = this.state.email;
        let password = this.state.password;
        this.userActions.isAccountValid({
            email: email,
            password: password
        });
    }

    render() {
        if(this.props.user.id) {
            this.props.history.push('/welcome');
        }
        return (
            <div style={{textAlign: 'center', padding: 250}}>
                <TextField
                    id="email"
                    label="Email"
                    placeholder="Ex. abc@gmail.com"
                    margin="normal"
                    fullWidth="true"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                /><br />
                <TextField
                    id="password"
                    label="Password"
                    placeholder="******"
                    margin="normal"
                    type="password"
                    fullWidth="true"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                /><br />
                <div style={{color: 'red', fontWeight: 500}}>{this.props.user.error}</div>
                <div style={{textAlign: 'left', margin: '20px 0'}}>
                    <Button variant="contained" color="primary" onClick={() => this.isAccountValid()}>
                        Login
                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps)(Login);
