import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', padding: 250}}>
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary" style={{margin: 10}}>
                        Login
                    </Button>
                </Link>
                <Link to="/signup" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="secondary" style={{margin: 10}}>
                        Sign up
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Home;
