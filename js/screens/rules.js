import {getElementFromTemplate} from '../utils/get-element';
import {next} from './index';
import header from './partials/simple-header';
import {messages} from '../data';

const markup = `
  ${header()}
  <div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
`;

const element = getElementFromTemplate(markup);

const form = element.querySelector('.rules__form');
const nameInput = form.querySelector('.rules__input');
const submit = form.querySelector('.rules__button');

nameInput.required = true;

nameInput.addEventListener('input', () => {
  submit.disabled = !nameInput.validity.valid;
});

form.addEventListener('submit', (e) => next(e));

export default element;
