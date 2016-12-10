import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game from './game';
import stats from './stats';

let mainElement = document.getElementById('main');

let slides = [
  intro,
  greeting,
  rules,
  game,
  stats
];

export const startApp = (data) => {
  return Object.assign({}, data, {screen: 0});
};

export const nextScreen = (data) => {
  return Object.assign({}, data, {
    screen: Math.min(data.screen + 1, slides.length - 1)
  });
};

export const start = (data) => {
  select(startApp(data));
};

export const select = (data) => {
  const index = data.screen;

  mainElement.innerHTML = '';
  mainElement.appendChild(slides[index](data));
};

export const next = (data, evt = null) => {
  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  select(nextScreen(data));
};
