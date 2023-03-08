import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              style={{ flexGrow: '1', textAlign: 'left' }}>
              MelangeQuiz
            </Typography>
            {logout ? (
              <Button size="small" color="inherit" onClick={() => logout()}>
                LogOut
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
