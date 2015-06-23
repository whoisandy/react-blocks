'use strict';

import React from 'react';
import Block from 'react-blocks';
import 'dev.css';

class App extends React.Component {
  render() {
    let styles = {
      app: {
        minWidth: 800
      },
      common: {
        width: 200
      }
    };

    return (
      <Block className="app" style={styles.app} layout horizontal>
        <Block style={styles.common}>Alpha</Block>
        <Block flex style={styles.common}>Beta</Block>
        <Block style={styles.common}>Gamma</Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
