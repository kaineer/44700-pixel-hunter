import {getElementFromTemplate} from '../utils/get-element';
import {next} from './index';
import {messages} from '../data';

const markup = `
  <div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${messages.greeting.title}</h3>
      <p>${messages.greeting.rules}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
`;

const element = getElementFromTemplate(markup);

const greetingNext = element.querySelector('.greeting__continue');

greetingNext.addEventListener('click', (e) => next(e));

export default element;
