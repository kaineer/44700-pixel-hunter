import intro from './screens/intro';
import greeting from './screens/greeting';
import rules from './screens/rules';
import game1 from './screens/game1';
import game2 from './screens/game2';
import game3 from './screens/game3';
import stats from './screens/stats';

(function () {

  // Rules
  let rulesElement = rules;
  let rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = (evt) => {
    let $input = evt.target;
    if ($input.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    intro,
    greeting,
    rulesElement,
    game1,
    game2,
    game3,
    stats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    if (current < slides.length - 1) {
      select(current + 1);
    }
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    if (current > 0) {
      select(current - 1);
    }
  };

  select(0);
})();
