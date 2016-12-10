import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import stats from './stats';

let mainElement = document.getElementById('main');

let slides = [
  intro,
  greeting,
  rules,
  game1,
  game2,
  game3,
  stats
];

let current = -1;

export const select = (index) => {
  current = index;
  mainElement.innerHTML = '';
  mainElement.appendChild(slides[index]);
};

export const next = (evt) => {
  if (evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  return (current < slides.length - 1) ? select(current + 1) : null;
};
