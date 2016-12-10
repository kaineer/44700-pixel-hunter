import {Results, Question, Image} from './types';

export const data = {
  lifes: 3,

  questions: [
    {
      type: Question.TWO_IMAGES,
      images: [
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.ONE_IMAGE,
      images: [
        {
          url: 'http://placehold.it/705x455',
          width: 705,
          height: 455,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.THREE_IMAGES,
      images: [
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PAINT
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        }
      ]
    },

    {
      type: Question.TWO_IMAGES,
      images: [
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.ONE_IMAGE,
      images: [
        {
          url: 'http://placehold.it/705x455',
          width: 705,
          height: 455,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.THREE_IMAGES,
      images: [
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PAINT
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        }
      ]
    },

    {
      type: Question.TWO_IMAGES,
      images: [
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/468x458',
          width: 468,
          height: 458,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.ONE_IMAGE,
      images: [
        {
          url: 'http://placehold.it/705x455',
          width: 705,
          height: 455,
          type: Image.PAINT
        }
      ]
    },
    {
      type: Question.THREE_IMAGES,
      images: [
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PAINT
        },
        {
          url: 'http://placehold.it/304x455',
          width: 304,
          height: 455,
          type: Image.PHOTO
        }
      ]
    },

    {
      type: Question.ONE_IMAGE,
      images: [
        {
          url: 'http://placehold.it/705x455',
          width: 705,
          height: 455,
          type: Image.PAINT
        }
      ]
    }
  ],
  stats: [
    Results.CORRECT, Results.FAST, Results.SLOW
  ],

  results: [
    {
      lifes: 3,
      stats: [Results.CORRECT, Results.FAST, Results.SLOW]
    },
    {
      lifes: 0,
      stats: [Results.CORRECT, Results.FAST, Results.SLOW, Results.WRONG, Results.WRONG, Results.WRONG]
    },
    {
      lifes: 1,
      stats: [Results.CORRECT, Results.FAST, Results.SLOW]
    }
  ]
};
