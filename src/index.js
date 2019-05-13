import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    errorNum: 3,
  };

  ReactDOM.render(
      <App gameTime={settings.gameTime} errorNum={settings.errorNum} />,
      document.querySelector(`.main`)
  );
};

init();
