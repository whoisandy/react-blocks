'use strict';

import React from 'react';
import Block from 'react-blocks';
import 'dev.css';

class App extends React.Component {
  render() {
    let styles = {
      common: {
        minWidth: 200
      },
      papaya: {
        backgroundColor: 'papayawhip'
      }
    };
    return (
      <Block className="app" layout horizontal>
        <Block style={styles.common}>One</Block>
        <Block flex style={styles.papaya}>Two</Block>
        <Block style={styles.common}>Three</Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
