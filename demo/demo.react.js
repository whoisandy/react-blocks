'use strict';

import React from 'react';
import Block from 'react-blocks';
import Layout from 'react-blocks/lib/layout';
import './demo.css';

class App extends React.Component {
  render() {
    let styles = {
      app: {
        width: 300,
        height: 200,
        backgroundColor: 'papayawhip'
      },
      common: {
        width: 200
      }
    };

    return (
      <Block className="app" layout horizontal wrap align="center" justify="center" style={styles.app}>
        <Block self="start" style={styles.common}>Alpha</Block>
        <Block style={styles.common}>Beta</Block>
        <Block self="end" style={styles.common}>Gamma</Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
