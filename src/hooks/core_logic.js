import React from 'react';
import {getScore} from '../utils/score_calculator';
import {appConstant} from '../repo/data';

///Handles all business logic
export const playCricket = (playersArray) => {
  ///initiate variables
  const [isWin, SetWin] = React.useState(false);
  const [isLoose, setLoose] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [runs, setRun] = React.useState(0);
  const [ball, setBalls] = React.useState(0); // balls
  const [over, setOver] = React.useState(0); // Over

  ///batsman
  const [wicket, setWicket] = React.useState(2);
  const [batsman, setBatsman] = React.useState(playersArray[0]);
  const [runner, setRunner] = React.useState(playersArray[1]);

  ///Swap Batsman
  const swapBatsman = () => {
    let temp = runner;
    setRunner(batsman);
    setBatsman(temp);
  };
  ///Reset all value
  const reset = () => {
    SetWin(false);
    setLoose(false);
    setScore(0);
    setRun(0);
    setBalls(0);
    setOver(0);
    setWicket(2);
    setBatsman(playersArray[0]);
    setRunner(playersArray[1]);
  };
  const bowl = () => {
    ///handle Over.Balls
    if (ball < 5) setBalls(ball + 1);
    ///reset ball ->0 && Increase Over
    else {
      setBalls(0);
      setOver(over + 1);
    }

    const tmpRun = getScore(playersArray[0].probability);

    ///Set Run
    setRun(tmpRun);

    ///if -ve Run -> batsman is out
    if (tmpRun === -1 && wicket < playersArray.length) {
      setWicket(wicket + 1);
      setBatsman(playersArray[wicket]);
      return;
    }

    ///if +Ve Run then increase score
    if (tmpRun > 0) {
      batsman.score = batsman.score + tmpRun;
      setBatsman(batsman);
      setScore(score + tmpRun);
    }

    ///check Odd Run -> Swap Batsman
    if (tmpRun !== -1 && tmpRun % 2 !== 0) {
      swapBatsman();
    }

    ///check Over finish -> Swap Batsman
    ///ignore 1st ball
    if (ball !== 0 && ball % 6 === 0) {
      swapBatsman();
    }

    ///check if Win Or Loose Match
    ///Over Finish
    if (over > appConstant.totalOverRemain) {
      ///Loose
      setLoose(true);
    }
    ///Wicket
    if (wicket > playersArray.length - 1) {
      ///Loose
      setLoose(true);
    }
    ///Score Check
    if (score > appConstant.totalScoreRemain) {
      /// Win
      SetWin(true);
    }
  };
  return [
    isWin,
    isLoose,
    wicket,
    score,
    ball,
    over,
    runs,
    batsman,
    runner,
    bowl,
    reset,
  ];
};
