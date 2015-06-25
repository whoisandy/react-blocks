'use strict';

import React from 'react';
import Block from 'react-blocks';
import Layout from 'react-blocks/lib/layout';
import './example.css';

class App extends React.Component {
  render() {
    let styles = {
      app: {
        height: 200,
        backgroundColor: 'papayawhip'
      },
      common: {
        width: 200
      }
    };

    return (
      <Block className="app" layout horizontal align="center" justify="center" style={styles.app}>
        <Block self="start" style={styles.common}>Alpha</Block>
        <Block style={styles.common}>Beta</Block>
        <Block self="end" style={styles.common}>Gamma</Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
