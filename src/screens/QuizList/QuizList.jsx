import React, { Component } from 'react';
import Header from '../../components/Header/Header';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class QuizList extends Component {
  constructor() {
    super();
  }

  render() {
    const { list, onPress, logout } = this.props;

    return (
      <div>
        <Header logout={logout} />
        <div style={{ margin: '80px 3% 3% 3%' }}>
          {list.map((quiz, index) => {
            return (
              <Card
                // className={classes.card}
                style={{
                  maxWidth: 345,
                  display: 'inline-block',
                  margin: '1%',
                }}>
                <div
                  style={{
                    margin: '10px 0px',
                  }}>
                  {quiz.qrCode}
                </div>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{ objectFit: 'cover' }}
                    height="140"
                    image={quiz.image}
                    title={quiz.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="headline"
                      component="h2"
                      style={{ textAlign: 'left' }}>
                      {quiz.name}
                    </Typography>
                    <Typography component="p" style={{ textAlign: 'left' }}>
                      {quiz.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => onPress(index)}
                    size="small"
                    color="primary">
                    Join
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QuizList;
