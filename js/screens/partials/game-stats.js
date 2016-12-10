import {Results} from '../../data';

const statListItems = (stats) => {
  let result = [];

  for (let i = 0; i < 10; i++) {
    let value = stats[i];

    let name = Results.getName(value);

    result = [...result, `
      <li class="stats__result stats__result--${name}"></li>
    `];
  }

  return result.join('');
};

export default (stats) => {
  return (
    `<div class="stats">
      <ul class="stats">
        ${statListItems(stats)}
      </ul>
    </div>`
  );
};
