import {getElementFromTemplate} from '../../utils/get-element';
import header from '../partials/game-header';
import gameStats from '../partials/game-stats';
import {image} from '../partials/utils';
import {displayNextQuestion} from '.';

const gameOption = (imageData) => {
  return (
    `<div class="game__option">
      ${image(imageData)}
    </div>`
  );
};

export default (data, question) => {
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
    elt.addEventListener('click', (e) => displayNextQuestion(data, e));
  });

  return element;
};
