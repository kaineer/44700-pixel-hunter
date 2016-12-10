import {getElementFromTemplate} from '../../utils/get-element';
import header from '../partials/game-header';
import gameStats from '../partials/game-stats';
import {gameOption} from '../partials/utils';
import {displayNextQuestion} from '.';

export default (data, question) => {
  const markup = `
    ${header(data.lifes)}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        ${gameOption(question.images[0])}
      </form>
      ${gameStats(data.stats)}
    </div>
  `;

  const element = getElementFromTemplate(markup);

  Array.from(element.querySelectorAll('.game__answer')).forEach((elt) => {
    elt.addEventListener('click', (e) => displayNextQuestion(data, e));
  });

  return element;
};
