import {getElementFromTemplate} from '../utils/get-element';
import {next} from '.';
import {data} from '../data';
import header from './partials/game-header';
import gameStats from './partials/game-stats';
import {gameOption} from './partials/utils';

const question = data.questions[0];

const markup = `
  ${header(data.lifes)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${question.images.map((image) => gameOption(image)).join('')}
    </form>
    ${gameStats(data.stats)}
  </div>
`;

const element = getElementFromTemplate(markup);

Array.from(element.querySelectorAll('.game__answer')).forEach((elt) => {
  elt.addEventListener('click', (e) => next(e));
});

export default element;
