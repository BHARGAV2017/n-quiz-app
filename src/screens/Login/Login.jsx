import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPass: false,
    };
  }

  toggle() {
    const { showPass } = this.state;

    this.setState({
      showPass: !showPass,
    });
  }

  render() {
    const { updateText, validation, showSignup } = this.props;
    const { showPass } = this.state;
    return (
      <div>
        <Header />
        <div className="mainDiv">
          <FormControl className="formDiv">
            <Typography variant="display2">Sign In</Typography>
            <br />
            <TextField
              className="formEle"
              id="input-with-icon-grid"
              // placeholder="abc@mail.com"
              // inputProps={{ maxLength: 17 }}
              // fullWidth={true}
              // style={{width:300}}
              label="Email"
              type="email"
              onChange={updateText}
              name="loginEmail"
              // helperText="Some important text"
              margin="normal"
              // required={true} "show * means required"
              // error={true} "shows like there is error"
              // multiline={true} "behaves like textarea"
            />

            <TextField
              className="formEle"
              id="input-with-icon-grid"
              label="Password"
              type={showPass ? 'text' : 'password'}
              onChange={updateText}
              name="loginPass"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.toggle.bind(this)}>
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />

            <Button className="formEle" color="primary">
              Forgot password?
            </Button>
            <br />

            <Button
              className="formEle"
              variant="contained"
              color="primary"
              onClick={validation}>
              Sign In
            </Button>
            <br />
            <br />
            <Typography variant="body2">New to QuizCloud?</Typography>

            <Button
              className="formEle"
              variant="contained"
              color="secondary"
              onClick={showSignup}>
              Sign up
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Login;
