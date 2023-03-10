import img1 from './images/html.jpg';
import img2 from './images/css.jpg';
import img3 from './images/js3.jpg';

export const QUIZZES = [
  {
    name: 'HTML',
    image: img1,
    description:
      'HTML stands for HyperText Markup Language, It defines the structure of a Web document by using a variety of tags and attributes.',
    subQuiz: [
      {
        name: 'Quiz 1',
        questions: '3',
        time: '30 sec',
        score: false,
        qArr: [
          {
            // qimg: myImg8,
            question: 'Q. GUESS THE ARTIST ?',
            option1: 'SALVADOR DALI ',
            option2: 'VINCENT VAN GOGH',
            option3: 'none',
            option4: 'body',
            answer: '1',
          },
          {
            // qimg: myImg7,
            question: 'Q. NAME THE BUILDING ?',
            option1: "BAHÁ'Í  HOUSE ",
            option2: 'PADMANABHASWAMY TEMPLE',
            option3: 'style',
            option4: 'none',
            answer: '1',
          },
          {
            // qimg: myImg6,
            question: 'Q. GUESS THE NAME OF THE FASHION DESIGNER ?',
            option1: "MANISH MALHOTRA '",
            option2: 'SABYASACHI MUKHERJEE',
            option3: 'HELP TEXT TERMINAL LANGUAGE',
            option4: 'NONE',
            answer: '1',
          },
        ],
      },
      {
        name: 'Quiz 2',
        questions: '3',
        time: '30 sec',
        score: false,
        qArr: [
          {
            // qimg: myImg5,
            question: 'Q. NAME THE ANIMATION STUDIO?',
            option1: 'PIXAR',
            option2: 'DREAMWORKS',
            option3: 'scripting',
            option4: 'none',
            answer: '1',
          },
          {
            // qimg: myImg4,
            question: 'To underline the text?',
            option1: 'u',
            option2: 'underline',
            option3: 'style',
            option4: 'none',
            answer: '1',
          },
          {
            // qimg: myImg3,
            question: 'Q. WHO IS THE FAMOUS ARTIST OF MONA LISA ?',
            option1: 'EDVARD MUNCH',
            option2: 'LEONARDO  DA VINCI',
            option3: 'HELP TEXT TERMINAL LANGUAGE',
            option4: 'NONE',
            answer: '1',
          },
        ],
      },
    ],
  },
  {
    name: 'CSS',
    image: img2,
    description:
      'CSS stands for Cascading Style Sheets, It describes how HTML elements are to be displayed on screen, paper, or in other media.',
    subQuiz: [
      {
        name: 'Quiz 1',
        questions: '6',
        time: '30 sec',
        score: false,
        qArr: [
          {
            // qimg: myImg2,
            question: 'Css stands for?',
            option1: "cascading style sheet'",
            option2: 'cascade sheet style',
            option3: 'color style sheet',
            option4: 'contrast style sheet',
            answer: '1',
          },
          {
            // qimg: myImg1,
            question: 'to change the color we use',
            option1: 'color:',
            option2: 'setColor:',
            option3: 'color-style',
            option4: 'change-color',
            answer: '1',
          },
          {
            // qimg: myImg9,
            question: 'How to link css?',
            option1: 'using link',
            option2: 'using button',
            option3: 'using javascript',
            option4: 'using img',
            answer: '1',
          },
          {
            // qimg: myImg8,
            question: 'To change the color we use?',
            option1: 'color:',
            option2: 'setColor:',
            option3: 'color-style',
            option4: 'change-color',
            answer: '1',
          },
          {
            // qimg: myImg7,
            question: 'How to link css?',
            option1: 'using link',
            option2: 'using button',
            option3: 'using javascript',
            option4: 'using img',
            answer: '1',
          },
          {
            // qimg: myImg6,
            question: 'How to link css?',
            option1: 'using link',
            option2: 'using button',
            option3: 'using javascript',
            option4: 'using img',
            answer: '1',
          },
        ],
      },
    ],
  },
  {
    name: 'JavaScript',
    image: img3,
    description:
      ' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',
    subQuiz: [
      {
        name: 'Quiz 1',
        questions: '4',
        time: '30 sec',
        score: false,
        qArr: [
          {
            // qimg: myImg5,
            question: 'How to create alert box?',
            option1: "alert='hello world'",
            option2: "aler('hello world')",
            option3: "alert.('hello world')",
            option4: "alert('hello world')",
            answer: '4',
          },
          {
            // qimg: myImg4,
            question: 'How to initialize variable?',
            option1: "variable name = 'ali'",
            option2: "var name = 'ali'",
            option3: "variable: 'ali'",
            option4: "variable. 'ali'",
            answer: '2',
          },
          {
            // qimg: myImg3,
            question: 'How to push value in array?',
            option1: 'arr.push(value)',
            option2: 'arr.push.value',
            option3: 'arr.(value)',
            option4: 'arr.value.push(value)',
            answer: '1',
          },
          {
            // qimg: myImg2,
            question: 'What is javascript?',
            option1: 'programming language',
            option2: 'scripting language',
            option3: 'coding language',
            option4: 'web language',
            answer: '2',
          },
        ],
      },
      {
        name: 'Quiz 2',
        questions: '6',
        time: '30 sec',
        score: false,
        qArr: [
          {
            // qimg: require("./images/Picture7.png"),
            question: 'Which creates random number?',
            option1: 'Math.floor()',
            option2: 'Math.ceil()',
            option3: 'Math.random()',
            option4: 'Math.high',
            answer: '3',
          },
          {
            // qimg: require("./images/Picture7.png"),
            question: 'What does array returns?',
            option1: 'function',
            option2: 'object',
            option3: 'index number',
            option4: 'data type',
            answer: '2',
          },
          {
            // qimg: require("./images/Picture7.png"),
            question: 'Object property name & value are separated by?',
            option1: 'semicolon ;',
            option2: 'colon :',
            option3: 'dot .',
            option4: 'comma ,',
            answer: '2',
          },
          {
            // qimg: require("./images/Picture7.png"),
            question: 'Object properties are separated by?',
            option1: 'comma ,',
            option2: 'dot .',
            option3: 'colon :',
            option4: 'semicolon ;',
            answer: '1',
          },
          {
            // qimg: require("./images/Picture7.png"),
            question: 'What is the correct syntax for object initialization?',
            option1: 'var var_name = {property_name:property_value}',
            option2: 'var var_name = {property_value:property_name}',
            option3: 'var var_value = {property_name:property_value}',
            option4: 'object = {property_name:property_value}',
            answer: '1',
          },
          {
            // qimg: require("./images/Picture7.png"),
            question: 'DOM stands for?',
            option1: 'document object modification',
            option2: 'document observed module',
            option3: 'document object model',
            option4: 'document object module',
            answer: '3',
          },
        ],
      },
    ],
  },
];
