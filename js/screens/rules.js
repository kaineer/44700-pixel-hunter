import {getElementFromTemplate} from '../utils/get-element';
import {next} from './index';
import header from './partials/simple-header';
import {messages} from '../data';

const markup = `
  ${header()}
  <div class="rules  central--none">
    <h1 class="rules__title">${messages.rules.title}</h1>
    <p class="rules__description">${messages.rules.description}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
`;

export default (data) => {
  const element = getElementFromTemplate(markup);

  const form = element.querySelector('.rules__form');
  const nameInput = form.querySelector('.rules__input');
  const submit = form.querySelector('.rules__button');

  nameInput.required = true;

  nameInput.addEventListener('input', () => {
    submit.disabled = !nameInput.validity.valid;
  });

  form.addEventListener('submit', (e) => next(data, e));

  return element;
};
