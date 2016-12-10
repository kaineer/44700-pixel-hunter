import {getElementFromTemplate} from '../utils/get-element';
import header from './partials/simple-header';
import {data, Results} from '../data';
import gameStats from './partials/game-stats';

const winnerRow = (resultRow, index) => {
  return `
    <tr>
      <td class="result__number">${index + 1}.</td>
      <td colspan="2">
        ${gameStats(resultRow)}
      </td>
      <td>&times;&nbsp;100</td>
      <td class="result__total">${Results.countCorrect(resultRow) * 100}</td>
    </tr>
  `;
};

const looserRow = (resultRow, index) => {
  return `
    <tr>
      <td class="result__number">${index + 1}.</td>
      <td colspan="2">
        ${gameStats(resultRow)}
      </td>
      <td></td>
      <td class="result__total">FAIL</td>
    </tr>
  `;
};

const row = (resultRow, index) => {
  if (Results.isWinner(resultRow)) {
    return winnerRow(resultRow, index);
  } else {
    return looserRow(resultRow, index);
  }
};

const bonusFast = (resultRow) => {
  if (Results.isWinner(resultRow) && Results.hasFast(resultRow)) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${Results.countFast(resultRow)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${Results.countFast(resultRow) * 50}</td>
      </tr>
    `;
  } else {
    return '';
  }
};

const bonusLifes = (result) => {
  if (result.lifes > 0) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${result.lifes}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${result.lifes * 50}</td>
      </tr>
    `;
  } else {
    return '';
  }
};

const penaltySlow = (resultRow) => {
  if (Results.isWinner(resultRow) && Results.hasSlow(resultRow)) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${Results.countSlow(resultRow)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${-Results.countSlow(resultRow) * 50}</td>
      </tr>
    `;
  } else {
    return '';
  }
};

const total = (result) => {
  if (Results.isWinner(result.stats)) {
    return `
      <tr>
        <td colspan="5" class="result__total  result__total--final">${Results.calculateTotal(result)}</td>
      </tr>
    `;
  } else {
    return '';
  }
};

const getRow = (result, index) => {
  return (
    row(result.stats, index) +
    bonusFast(result.stats) +
    bonusLifes(result) +
    penaltySlow(result.stats) +
    total(result)
  );
};


const markup = `
  ${header()}
  <div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      ${data.results.map((result, index) => getRow(result, index)).join('')}
    </table>
  </div>
`;

export default getElementFromTemplate(markup);
