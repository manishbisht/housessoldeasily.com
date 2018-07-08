import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import cookie from 'react-cookies'
import * as userActions from '../redux/actions/userActions';
import Header from './common/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const LoginPage = withRouter(Login);
const SignupPage = withRouter(Signup);
const DashboardPage = withRouter(Dashboard);
const HomePage = withRouter(Home);

class App extends Component {
    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.userActions = bindActionCreators(userActions, dispatch);
    }

    componentWillMount() {
        let userId = cookie.load('userId');
        if (userId) {
            this.userActions.continueLogin({
                userId: userId
            });
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/login" render={() => <LoginPage/>}/>
                    <Route exact path="/signup" render={() => <SignupPage/>}/>
                    <Route exact path="/welcome" render={() => <DashboardPage/>}/>
                    <Route exact path="/" render={() => <HomePage/>}/>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps)(App);
