'use strict';

import React from 'react';
import Block from 'react-blocks';
import 'dev.css';

class App extends React.Component {
  render() {
    return (
      <Block className="app" layout horizontal>
        <Block>One</Block>
        <Block>Two</Block>
        <Block>Three</Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
