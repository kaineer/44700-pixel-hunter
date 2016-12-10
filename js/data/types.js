export const Screen = {
  INTRO: 0,
  GREETING: 1,
  RULES: 2,
  GAME: 3,
  STATS: 4
};

const ImageNames = [
  'unknown',
  'photo',
  'paint'
];

export const Image = {
  PHOTO: 1,
  PAINT: 2,

  getName(code = 0) {
    return ImageNames[code];
  }
};

const ResultNames = [
  'unknown',
  'fast',
  'slow',
  'correct',
  'wrong'
];

export const Results = {
  FAST: 1,
  SLOW: 2,
  CORRECT: 3,
  WRONG: 4,

  getName(code) {
    if (!code) {
      code = 0;
    }

    return ResultNames[code];
  },

  countCorrect(data) {
    return data.filter((x) => x !== Results.WRONG).length;
  },

  countWrong(data) {
    return data.filter((x) => x === Results.WRONG).length;
  },

  isWinner(resultRow) {
    return this.countWrong(resultRow) < 3;
  },

  hasFast(resultRow) {
    return this.isWinner(resultRow) && this.countFast(resultRow) > 0;
  },

  countFast(data) {
    return data.filter((x) => x === Results.FAST).length;
  },

  hasSlow(resultRow) {
    return this.isWinner(resultRow) && this.countSlow(resultRow) > 0;
  },

  countSlow(data) {
    return data.filter((x) => x === Results.SLOW).length;
  },

  calculateTotal(data) {
    const row = data.stats;
    return (
      this.countCorrect(row) * 100 +
      this.countFast(row) * 50 -
      this.countSlow(row) * 50 +
      data.lifes * 50
    );
  }
};

export const Question = {
  ONE_IMAGE: 1,
  TWO_IMAGES: 2,
  THREE_IMAGES: 3
};
