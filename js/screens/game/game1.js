import {getElementFromTemplate} from '../../utils/get-element';
import header from '../partials/game-header';
import gameStats from '../partials/game-stats';
import {gameOption} from '../partials/utils';
import {displayNextQuestion} from '.';

import {answerWrong, answerCorrect} from '.';

export default (data, question) => {
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
    elt.addEventListener('click', (e) => displayNextQuestion(answerWrong(data), e));
  });

  return element;
};
