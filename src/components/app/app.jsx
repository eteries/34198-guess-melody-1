import React from 'react';
import PropTypes from 'prop-types';

import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export const App = (props) => {
  const {gameTime, errorNum} = props;

  return (
    <WelcomeScreen time={gameTime} errorNum={errorNum} />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorNum: PropTypes.number.isRequired
};
