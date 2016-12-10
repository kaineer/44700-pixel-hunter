import {expect} from 'chai';
import {Results} from './types';

describe('Results', () => {
  const correctRow = [
    Results.CORRECT, Results.CORRECT, Results.CORRECT, Results.CORRECT, Results.CORRECT,
    Results.CORRECT, Results.CORRECT, Results.CORRECT, Results.CORRECT, Results.CORRECT
  ];

  const looserRow = [
    Results.WRONG, Results.WRONG, Results.WRONG
  ];

  const varietyRow = [
    Results.WRONG, Results.SLOW, Results.FAST, Results.CORRECT
  ];

  const slowLooserRow = [
    Results.SLOW, Results.WRONG, Results.WRONG, Results.WRONG
  ];

  context('.isWinner', () => {
    it('should return false for looser row', () => {
      expect(Results.isWinner(looserRow)).to.eq(false);
    });

    it('should return true for winner row', () => {
      expect(Results.isWinner(correctRow)).to.eq(true);
    });
  });

  context('.hasFast', () => {
    it('should return true for variety row', () => {
      expect(Results.hasFast(varietyRow)).to.eq(true);
    });

    it('should return false for correct row', () => {
      expect(Results.hasFast(correctRow)).to.eq(false);
    });

    it('should return false for looser row', () => {
      expect(Results.hasFast(looserRow)).to.eq(false);
    });
  });

  context('.hasSlow', () => {
    it('should return true for variety row', () => {
      expect(Results.hasSlow(varietyRow)).to.eq(true);
    });

    it('should return false for correct row', () => {
      expect(Results.hasSlow(correctRow)).to.eq(false);
    });

    it('should return false for looser row', () => {
      expect(Results.hasSlow(looserRow)).to.eq(false);
    });

    it('should return false for slow looser row', () => {
      expect(Results.hasSlow(slowLooserRow)).to.eq(false);
    });
  });

  context('.calculateTotal', () => {
    it('should equal 1150 for correct row', () => {
      expect(Results.calculateTotal({
        lifes: 3,
        stats: correctRow
      })).to.eq(1150);
    });

    it('should equal 400 for variety row', () => {
      expect(Results.calculateTotal({
        lifes: 2,
        stats: varietyRow
      })).to.eq(400);
    });

    it('should equal 0 for looser row', () => {
      expect(Results.calculateTotal({
        lifes: 0,
        stats: looserRow
      })).to.eq(0);
    });
  });
});
