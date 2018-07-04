import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Signup extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', padding: 250}}>
                <TextField
                    id="email"
                    label="Email"
                    placeholder="Ex. abc@gmail.com"
                    margin="normal"
                    fullWidth="true"
                /><br />
                <TextField
                    id="password"
                    label="Password"
                    placeholder="******"
                    margin="normal"
                    type="password"
                    fullWidth="true"
                /><br />
                <div style={{textAlign: 'left', margin: '20px 0'}}>
                    <Button variant="contained" color="primary">
                        Sign up
                    </Button>
                </div>
            </div>
        );
    }
}

export default Signup;
