import {Question} from '../../data';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import {select, nextScreen} from '..';

const startGame = (data) => {
  return (Object.assign({}, data, {question: 0, stats: []}));
};

export const nextQuestion = (data, evt) => {
  const question = data.question;

  if (question < 9) {
    return Object.assign({}, data, {
      question: question + 1
    });
  } else {
    return nextScreen(data);
  }
};

export const displayNextQuestion = (data, evt) => {
  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  select(nextQuestion(data));
};

const gameScreens = {
  [Question.ONE_IMAGE]: game2,
  [Question.TWO_IMAGES]: game1,
  [Question.THREE_IMAGES]: game3
};

export default (data) => {
  if (typeof (data.question) !== 'number') {
    data = startGame(data);
  }

  const question = data.questions[data.question];
  const screen = gameScreens[question.type];

  return screen(data, question);
};
