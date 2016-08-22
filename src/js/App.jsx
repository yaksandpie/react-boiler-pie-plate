import React from 'react';
import Styles from '../css/main';

const createBallsByString = strArg => {
  let allTheBalls = [];

  for(let letter of strArg) {
    const index = strArg.split('').indexOf(letter);

    allTheBalls.push(
      <div className="ball" key={index + letter}>
        <span className="ball-letter">{letter}</span>
      </div>
    );
  }

  return allTheBalls;
}

const MainPage = () => (
  <div className="balls">
    {createBallsByString('yaks&pie')}
  </div>
);

export default MainPage;
