import {Question, Results} from '../../data';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import {select, nextScreen} from '..';

const startGame = (data) => {
  return (Object.assign({}, data, {question: 0, stats: []}));
};

export const nextQuestion = (data, evt) => {
  const question = data.question;
  const lifes = data.lifes;

  if (lifes > 0 && question < 9) {
    return Object.assign({}, data, {
      question: question + 1
    });
  } else {
    return nextScreen(data);
  }
};

const answer = (data, type) => {
  const stats = data.stats;

  return Object.assign({}, data, {
    stats: stats.concat([type])
  });
};

export const answerCorrect = (data) => {
  return answer(data, Results.CORRECT);
};

export const answerFast = (data) => {
  return answer(data, Results.FAST);
};

export const answerSlow = (data) => {
  return answer(data, Results.SLOW);
};

export const answerWrong = (data) => {
  const answerData = answer(data, Results.WRONG);
  return Object.assign({}, answerData, {
    lifes: answerData.lifes - 1
  });
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
