import { graphql } from 'msw';

export const handlers = [
  graphql.query('getBreeds', (req, res, ctx) => {
    return res(
      ctx.data({
        getBreeds: [
          {
            adaptability: 5,
            affectionLevel: 4,
            breedImage: [
              {
                url: 'https://cdn2.thecatapi.com/images/qXypILClv.jpg',
                id: 'qXypILClv',
                __typename: 'BreedImage'
              }
            ],
            childFriendly: 4,
            description:
              "The British Shorthair is a very pleasant cat to have as a companion, ans is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members. While loving to play, she doesn't need hourly attention. If she is in the mood to play, she will find someone and bring a toy to that person. The British also plays well by herself, and thus is a good companion for single people.",
            grooming: 2,
            healthIssues: 2,
            id: 'bsho',
            intelligence: 3,
            lifeSpan: '12 - 17',
            name: 'British Shorthair',
            origin: 'United Kingdom',
            socialNeeds: 3,
            strangerFriendly: 2,
            temperament: 'Affectionate, Easy Going, Gentle, Loyal, Patient, calm',
            __typename: 'Breed'
          }
        ]
      })
    );
  }),

  graphql.query('getBreedsByName', (req, res, ctx) => {
    return res(
      ctx.data({
        getBreedsByName: [
          {
            adaptability: 5,
            affectionLevel: 5,
            breedImage: [
              {
                url: 'https://cdn2.thecatapi.com/images/mZZzMlywy.jpg',
                id: 'mZZzMlywy',
                __typename: 'BreedImage'
              }
            ],
            childFriendly: 4,
            description:
              'The Munchkin is an outgoing cat who enjoys being handled. She has lots of energy and is faster and more agile than she looks. The shortness of their legs does not seem to interfere with their running and leaping abilities.',
            grooming: 2,
            healthIssues: 3,
            id: 'munc',
            intelligence: 5,
            lifeSpan: '10 - 15',
            name: 'Munchkin',
            origin: 'United States',
            socialNeeds: 5,
            strangerFriendly: 5,
            temperament: 'Agile, Easy Going, Intelligent, Playful',
            __typename: 'Breed'
          }
        ]
      })
    );
  }),

  graphql.query('getAutoCompleteBreed', (req, res, ctx) => {
    const { breedName } = req.variables;
    if (breedName === 'po') {
      return res(
        ctx.data({
          getBreedsByName: [
            {
              id: 'poly',
              name: 'Polydactyl',
              __typename: 'Breed'
            },
            { id: 'csho', name: 'Colorpoint Shorthair', __typename: 'Breed' }
          ]
        })
      );
    } else if (breedName === 'sphynx') {
      return res(
        ctx.data({
          getBreedsByName: [
            {
              id: 'sphynx',
              name: 'Sphynx',
              __typename: 'Breed'
            }
          ]
        })
      );
    } else if (breedName === 'pers') {
      return res(
        ctx.data({
          getBreedsByName: [
            {
              id: 'pers',
              name: 'Persian',
              __typename: 'Breed'
            }
          ]
        })
      );
    } else {
      return res(
        ctx.data({
          getBreedsByName: []
        })
      );
    }
  })
];
