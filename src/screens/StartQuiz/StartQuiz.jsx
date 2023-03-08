import React, { Component } from 'react';
import Header from '../../components/Header/Header';

import myImg1 from '../../images/Picture1.png';
import myImg10 from '../../images/Picture10.png';
import myImg11 from '../../images/Picture11.png';
import myImg12 from '../../images/Picture12.png';
import myImg13 from '../../images/Picture13.png';
import myImg14 from '../../images/Picture14.png';
import myImg15 from '../../images/Picture15.png';
import myImg16 from '../../images/Picture16.png';
import myImg17 from '../../images/Picture17.png';
import myImg18 from '../../images/Picture18.png';
import myImg19 from '../../images/Picture19.png';
import myImg2 from '../../images/Picture2.png';
import myImg20 from '../../images/Picture20.png';
import myImg3 from '../../images/Picture3.png';
import myImg4 from '../../images/Picture4.png';
import myImg5 from '../../images/Picture5.png';
import myImg6 from '../../images/Picture6.png';
import myImg7 from '../../images/Picture7.png';
import myImg8 from '../../images/Picture8.png';
import myImg9 from '../../images/Picture9.png';

import NavigateNext from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';

import SentimentDissatisfied from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentSatisfied from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentVeryDissatisfied from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfiedRounded';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

class QuizList extends Component {
  constructor() {
    super();

    this.state = {
      radioVal: null,

      sec: 30,
      min: 0,

      correct: 0,
      scored: false,

      similey: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.quizTimer = this.quizTimer.bind(this);
    this.timer();
  }

  handleChange(e) {
    this.setState({
      radioVal: e.target.value,
    });
  }

  async updating() {
    const { started, qstnNo, onPress } = this.props;
    const { correct, radioVal } = this.state;

    // var radio = document.querySelector("input[name='option']:checked");

    if (radioVal == null) {
      alert('Selection Required');
    } else {
      if (
        qstnNo === started.qArr.length - 1 &&
        started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          correct: correct + 1,
          min: 0,
          sec: 0,
        });
      } else if (
        qstnNo === started.qArr.length - 1 &&
        !started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          min: 0,
          sec: 0,
        });
      } else if (
        !(qstnNo === started.qArr.length - 1) &&
        started.qArr[qstnNo].answer.match(radioVal)
      ) {
        await this.setState({
          correct: correct + 1,
          radioVal: null,
        });

        onPress(qstnNo);
      } else {
        await this.setState({
          radioVal: null,
        });
        onPress(qstnNo);
      }
    }
  }

  async scoreCal() {
    const { started } = this.props;
    const { correct } = this.state;

    await this.setState({
      scored: (correct * (100 / started.qArr.length)).toFixed(2),
      date: new Date(),
    });

    this.saveScore();
    // localStorage.setItem("score", JSON.stringify(score))
  }

  saveScore() {
    const { started } = this.props;
    const { scored, date } = this.state;

    started.score = scored;
    started.attemptDate = date.toLocaleDateString();
    started.attemptTime = date.toLocaleTimeString();

    if (scored == 100) {
      this.setState({
        similey: (
          <SentimentVerySatisfied className="similey" color="disabled" />
        ),
      });
    } else if (scored == 0) {
      this.setState({
        similey: (
          <SentimentVeryDissatisfied className="similey" color="disabled" />
        ),
      });
    } else if (scored >= 60) {
      this.setState({
        similey: <SentimentSatisfied className="similey" color="disabled" />,
      });
    } else if (scored < 60 && scored > 0) {
      this.setState({
        similey: <SentimentDissatisfied className="similey" color="disabled" />,
      });
    }
  }

  quizTimer() {
    const { sec, min } = this.state;

    if (sec === 0 && min === 0) {
      clearInterval(this.time);

      this.scoreCal();
    } else if (sec <= 0 && !(min === 0)) {
      this.setState({
        sec: 59,
        min: min - 1,
      });
    } else {
      this.setState({
        sec: sec - 1,
      });
    }
  }

  timer() {
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { started, qstnNo, back, quizName, subQuizName, logout } = this.props;
    const { correct, scored, min, sec } = this.state;

    const myImg = [
      myImg1,
      myImg2,
      myImg3,
      myImg4,
      myImg5,
      myImg6,
      myImg7,
      myImg8,
      myImg9,
      myImg10,
      myImg11,
      myImg12,
      myImg13,
      myImg14,
      myImg15,
      myImg16,
      myImg17,
      myImg18,
      myImg19,
      myImg20,
    ];

    return (
      <div style={{ margin: '80px 3% 3% 3%' }}>
        {scored !== false ? (
          <div>
            <Header logout={logout} />

            <Typography variant="display1">
              {quizName}({subQuizName})
            </Typography>
            <br />
            <div className="resultDiv">
              <div>
                <br />
                <br />
                <CircularProgress
                  size={200}
                  thickness={2}
                  variant="static"
                  value={scored}
                />
                {this.state.similey}
                <Typography variant="headline">{scored} %</Typography>
                <br />
                <Typography variant="subheading">
                  Total Questions: {started.qArr.length}
                </Typography>
                <Typography variant="subheading">Correct: {correct}</Typography>
              </div>
              <Button
                className="backBtn"
                size="large"
                variant="contained"
                color="primary"
                onClick={() => back()}>
                back
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Header />
            <Typography variant="title">
              {min}:{sec}
            </Typography>
            <br />
            <div className="qstnDiv">
              <FormControl
                component="fieldset"
                style={{ margin: '15px 15px 30px 15px' }}>
                <img
                  src={myImg[qstnNo]}
                  width={250}
                  height={250}
                  alt="Quizz Image"
                />
                {/* console.log(qstnNo) */}
                <h3>
                  {qstnNo + 1}. {started.qArr[qstnNo].question}
                </h3>
                {/* <FormLabel component="legend">Gender</FormLabel> */}
                <RadioGroup
                  // aria-label="Gender"
                  // name="gender1"
                  // className={classes.group}
                  value={this.state.radioVal}
                  onChange={this.handleChange}>
                  <FormControlLabel
                    value="1"
                    name="option"
                    control={<Radio />}
                    label={started.qArr[qstnNo].option1}
                  />
                  <FormControlLabel
                    value="2"
                    name="option"
                    control={<Radio />}
                    label={started.qArr[qstnNo].option2}
                  />
                  <FormControlLabel
                    value="3"
                    name="option"
                    control={<Radio />}
                    label={started.qArr[qstnNo].option3}
                  />
                  <FormControlLabel
                    value="4"
                    name="option"
                    control={<Radio />}
                    label={started.qArr[qstnNo].option4}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <Button
              className="nextBtn"
              variant="fab"
              color="primary"
              onClick={this.updating.bind(this)}>
              <NavigateNext />
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default QuizList;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
