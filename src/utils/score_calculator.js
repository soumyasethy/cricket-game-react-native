const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getScore = (probability) => {
  let randomScore = getRandomArbitrary(0, 100);
  let range = 0;
  let index = 0;
  for (let key in probability) {
    if (range === 0) range = probability[key];
    else range = range + probability[key];

    if (randomScore < range) {
      //Actual Score
      return index;
    }
    index += 1;
  }
  //Out
  return -1;
};
