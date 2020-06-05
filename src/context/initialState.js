import { v1 as uuid } from 'uuid';

/**
 * Initial state which contains the dummy data and initial filters.
 */
export const initialState = {
  rooms: [],
  filters: {
    search: null,
    floorIds: [],
    buildingIds: [],
  },
  buildings: [
    {
      id: uuid(),
      name: 'Building A',
      floors: [
        {
          id: uuid(),
          name: 'Floor 1',
          rooms: [
            {
              id: uuid(),
              number: 23,
              text: 'Text output 11',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A23',
            },
            {
              id: uuid(),
              number: 12,
              text: 'Text output 12',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A12',
            },
            {
              id: uuid(),
              number: 13,
              text: 'Text output 13',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A13',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 2',
          rooms: [
            {
              id: uuid(),
              number: 21,
              text: 'Text output 21',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A21',
            },
            {
              id: uuid(),
              number: 22,
              text: 'Text output 22',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A22',
            },
            {
              id: uuid(),
              number: 23,
              text: 'Text output 23',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A23',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 3',
          rooms: [
            {
              id: uuid(),
              number: 31,
              text: 'Text output 31',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A31',
            },
            {
              id: uuid(),
              number: 32,
              text: 'Text output 32',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A32',
            },
            {
              id: uuid(),
              number: 33,
              text: 'Text output 33',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A33',
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: 'Building B',
      floors: [
        {
          id: uuid(),
          name: 'Floor 1',
          rooms: [
            {
              id: uuid(),
              number: 110,
              text: 'B Text output 11',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A110',
            },
            {
              id: uuid(),
              number: 120,
              text: 'B Text output 12',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A120',
            },
            {
              id: uuid(),
              number: 130,
              text: 'B Text output 13',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A130',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 2',
          rooms: [
            {
              id: uuid(),
              number: 210,
              text: 'B Text output 21',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A210',
            },
            {
              id: uuid(),
              number: 220,
              text: 'B Text output 22',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A220',
            },
            {
              id: uuid(),
              number: 230,
              text: 'B Text output 23',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A230',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 3',
          rooms: [
            {
              id: uuid(),
              number: 310,
              text: 'B Text output 31',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A310',
            },
            {
              id: uuid(),
              number: 320,
              text: 'B Text output 32',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A320',
            },
            {
              id: uuid(),
              number: 330,
              text: 'B Text output 33',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'A330',
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: 'Building C',
      floors: [
        {
          id: uuid(),
          name: 'Floor 1',
          rooms: [
            {
              id: uuid(),
              number: 23,
              text: 'Text output 11',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C23',
            },
            {
              id: uuid(),
              number: 12,
              text: 'Text output 12',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C12',
            },
            {
              id: uuid(),
              number: 13,
              text: 'Text output 13',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C13',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 2',
          rooms: [
            {
              id: uuid(),
              number: 21,
              text: 'Text output 21',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C21',
            },
            {
              id: uuid(),
              number: 22,
              text: 'Text output 22',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C22',
            },
            {
              id: uuid(),
              number: 23,
              text: 'Text output 23',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C23',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 3',
          rooms: [
            {
              id: uuid(),
              number: 31,
              text: 'Text output 31',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C31',
            },
            {
              id: uuid(),
              number: 32,
              text: 'Text output 32',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C32',
            },
            {
              id: uuid(),
              number: 33,
              text: 'Text output 33',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
              filterText: 'C33',
            },
          ],
        },
      ],
    },
  ],
};
