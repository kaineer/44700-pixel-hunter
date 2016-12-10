import {expect} from 'chai';

import {Screen, Results} from '../../data';
import {nextQuestion, answerCorrect, answerWrong} from '.';
import {answerFast, answerSlow} from '.';

import deepFreeze from 'deep-freeze';

let dataBefore;
let dataAfter;

describe('nextQuestion()', () => {
  context('index 1 to 2', () => {
    beforeEach(() => {
      dataBefore = {
        lifes: 3,
        screen: Screen.GAME,
        question: 1
      };

      dataAfter = {
        lifes: 3,
        screen: Screen.GAME,
        question: 2
      };

      deepFreeze(dataBefore);
    });

    it('should transform dataBefore into dataAfter', () => {
      expect(nextQuestion(dataBefore)).to.deep.eq(dataAfter);
    });
  });

  context('index 9 to stats', () => {
    beforeEach(() => {
      dataBefore = {
        lifes: 3,
        screen: Screen.GAME,
        question: 9
      };

      deepFreeze(dataBefore);
    });

    it('should switch to stats screen', () => {
      expect(nextQuestion(dataBefore)).to.have.property('screen', Screen.STATS);
    });
  });

  context('no lifes left', () => {
    beforeEach(function () {
      dataBefore = {
        lifes: 0,
        screen: Screen.GAME,
        question: 3
      };

      deepFreeze(dataBefore);
    });

    it('should switch to stats screen', () => {
      expect(nextQuestion(dataBefore)).to.have.property('screen', Screen.STATS);
    });
  });

});

describe('answerCorrect()', () => {
  beforeEach(function () {
    dataBefore = {
      stats: []
    };

    dataAfter = {
      stats: [Results.CORRECT]
    };

    deepFreeze(dataBefore);
  });

  it('should transform dataBefore into dataAfter', () => {
    expect(answerCorrect(dataBefore)).to.deep.eq(dataAfter);
  });
});

describe('answerFast()', () => {
  beforeEach(function () {
    dataBefore = {
      stats: []
    };

    dataAfter = {
      stats: [Results.FAST]
    };

    deepFreeze(dataBefore);
  });

  it('should transform dataBefore into dataAfter', () => {
    expect(answerFast(dataBefore)).to.deep.eq(dataAfter);
  });
});

describe('answerSlow()', () => {
  beforeEach(function () {
    dataBefore = {
      stats: []
    };

    dataAfter = {
      stats: [Results.SLOW]
    };

    deepFreeze(dataBefore);
  });

  it('should transform dataBefore into dataAfter', () => {
    expect(answerSlow(dataBefore)).to.deep.eq(dataAfter);
  });
});


describe('answerWrong()', () => {
  beforeEach(function () {
    dataBefore = {
      lifes: 3,
      stats: []
    };

    dataAfter = {
      lifes: 2,
      stats: [Results.WRONG]
    };

    deepFreeze(dataBefore);
  });

  it('should transform dataBefore into dataAfter', () => {
    expect(answerWrong(dataBefore)).to.deep.eq(dataAfter);
  });
});
