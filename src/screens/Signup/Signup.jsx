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

class Signup extends Component {
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
    const { updateText, showLogin } = this.props;
    const { showPass } = this.state;
    return (
      <div>
        <Header />
        <div className="mainDiv">
          <FormControl className="formDiv">
            <Typography variant="display2">Sign Up</Typography>
            <br />
            <TextField
              className="formEle"
              id="input-with-icon-grid"
              // placeholder="abc@mail.com"
              // inputProps={{ maxLength: 17 }}
              // fullWidth={true}
              // style={{width:300}}
              label="Username"
              type="text"
              onChange={updateText}
              name="name"
              // helperText="Some important text"
              margin="normal"
              // required={true} "show * means required"
              // error={true} "shows like there is error"
              // multiline={true} "behaves like textarea"
            />

            <TextField
              className="formEle"
              id="input-with-icon-grid"
              label="Email"
              type="email"
              onChange={updateText}
              name="userEmail"
              margin="normal"
            />

            <TextField
              className="formEle"
              id="input-with-icon-grid"
              label="Password"
              type={showPass ? 'text' : 'password'}
              onChange={updateText}
              name="userPassword"
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
            <br />

            <Button
              className="formEle"
              variant="contained"
              color="primary"
              onClick={showLogin}>
              Sign up
            </Button>
            <br />
            <br />

            <Typography variant="body2">Already on MelangeQuiz?</Typography>

            <Button
              className="formEle"
              variant="contained"
              color="secondary"
              onClick={showLogin}>
              sign in
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Signup;
