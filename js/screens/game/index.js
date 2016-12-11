import {Question, Results} from '../../data';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import {select, nextScreen} from '..';

const startGame = (data) => {
  return (Object.assign({}, data, {question: 0, stats: []}));
};

const startTimer = (data) => {
  const startTime = Date.now();

  const timer = {};

  if (data.timer) {
    clearInterval(data.timer.id);
  }

  const tick = () => {
    const msFromStart = Date.now() - startTime;
    const timeLeft = 30 - Math.floor(msFromStart / 1000);

    if (timeLeft <= 0) {
      clearInterval(timer.id);
      select(nextQuestion(answerWrong(data)));
    } else {
      renderTime(timeLeft);
    }
  };

  timer.id = setInterval(tick, 250);

  return Object.assign({}, data, {
    timer: {
      start: startTime,
      id: timer.id
    }
  });
};

export const nextQuestion = (data) => {
  const question = data.question;
  const lifes = data.lifes;

  if (lifes > 0 && question < 9) {
    return Object.assign({}, startTimer(data), {
      question: question + 1
    });
  } else {
    return nextScreen(data);
  }
};

const answer = (data, type) => {
  const stats = data.stats;

  if (data.timerId) {
    clearInterval(data.timerId);
  }

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

  select(startTimer(nextQuestion(data)));
};

const gameScreens = {
  [Question.ONE_IMAGE]: game2,
  [Question.TWO_IMAGES]: game1,
  [Question.THREE_IMAGES]: game3
};

const renderTime = (timeLeft) => {
  const element = document.querySelector('.game__timer');
  if (element) {
    element.textContent = '' + timeLeft;
  }
};

export default (data) => {
  if (typeof (data.question) !== 'number') {
    data = startGame(startTimer(data));
  }

  const question = data.questions[data.question];
  const screen = gameScreens[question.type];

  return screen(data, question);
};
