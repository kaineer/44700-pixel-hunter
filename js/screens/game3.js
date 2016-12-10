import {getElementFromTemplate} from '../utils/get-element';
import {next} from '.';
import header from './partials/game-header';
import gameStats from './partials/game-stats';
import {data} from '../data';
import {image} from './partials/utils';

const gameOption = (imageData) => {
  return (
    `<div class="game__option">
      ${image(imageData)}
    </div>`
  );
};

const question = data.questions[2];

const markup = `
  ${header(data.lifes)}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      ${question.images.map((imageData) => gameOption(imageData)).join('')}
    </form>
    ${gameStats(data.stats)}
  </div>
`;

const element = getElementFromTemplate(markup);

Array.from(element.querySelectorAll('.game__option')).forEach((elt) => {
  elt.addEventListener('click', (e) => next(e));
});

export default element;
