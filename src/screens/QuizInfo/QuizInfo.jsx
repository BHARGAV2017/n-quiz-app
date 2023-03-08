import React, { Component } from 'react';
import Header from '../../components/Header/Header';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class QuizInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { quiz, onBack, onPress, logout } = this.props;
    return (
      <div>
        <Header logout={logout} />
        <div style={{ margin: '80px 3% 3% 3%' }}>
          {quiz.subQuiz.map((subQuiz, index) => {
            return (
              <Card
                // className={classes.card}
                key={index}
                style={{
                  maxWidth: 345,
                  display: 'inline-block',
                  margin: '1%',
                }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{ objectFit: 'cover' }}
                    height="140"
                    image={quiz.image}
                    title={subQuiz.name}
                  />

                  {subQuiz.score ? (
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                        style={{ textAlign: 'left' }}>
                        {subQuiz.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{ textAlign: 'left', fontSize: '13px' }}>
                        You have attempted this Quiz.
                      </Typography>
                      <br />
                      <Typography variant="body2" style={{ textAlign: 'left' }}>
                        Percentage: {subQuiz.score} %
                        <br />
                        Attempted Date: {subQuiz.attemptDate}
                        <br />
                        Attempted Time: {subQuiz.attemptTime}
                      </Typography>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                        style={{ textAlign: 'left' }}>
                        {subQuiz.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{ textAlign: 'left', fontSize: '13px' }}>
                        This Quiz is based on the following criteria:
                      </Typography>
                      <br />
                      <Typography variant="body2" style={{ textAlign: 'left' }}>
                        Total Questions: {subQuiz.questions}
                        <br />
                        Total Time: {subQuiz.time}
                        <br />
                        Passing Score: 60 %
                      </Typography>
                    </CardContent>
                  )}
                </CardActionArea>

                <CardActions>
                  <Button onClick={onBack} size="small" color="secondary">
                    back
                  </Button>
                  {!subQuiz.score ? (
                    <Button
                      onClick={() => onPress(index)}
                      size="small"
                      color="primary">
                      start
                    </Button>
                  ) : null}
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
