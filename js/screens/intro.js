import {getElementFromTemplate} from '../utils/get-element';
import {next} from '.';
import {messages} from '../data';

const markup = `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> ${messages.intro}</p>
  </div>
`;

const element = getElementFromTemplate(markup);

const asterisk = element.querySelector('.intro__asterisk');

asterisk.addEventListener('click', (e) => next(e));

export default element;
