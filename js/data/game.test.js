import {expect} from 'chai';
import {data} from './game';

describe('Game data', () => {
  it('should have 10 questions', () => {
    expect(data.questions.length).to.eq(10);
  });
});
