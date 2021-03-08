import {playerModel} from '../models/players_model';

const playersArray = [
  {
    name: 'Kirat Boli',
    score: 0,
    probability: playerModel(5, 30, 25, 10, 15, 1, 9, 5),
  },
  {
    name: 'N.S Nodhi',
    score: 0,
    probability: playerModel(10, 40, 20, 5, 10, 1, 4, 10),
  },
  {
    name: 'R Rumrah',
    score: 0,
    probability: playerModel(20, 30, 15, 5, 5, 1, 4, 20),
  },
  {
    name: 'Shashi Henra',
    score: 0,
    probability: playerModel(30, 25, 5, 0, 5, 1, 4, 30),
  },
];

export const appConstant = {
  totalOverRemain: 4,
  totalScoreRemain: 40,
  team1: 'Bangalore',
  team2: 'Chennai',
  playersArray,
};
