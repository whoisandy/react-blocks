'use strict';

import React from 'react';
import Block from 'react-blocks';
import 'dev.css';

class App extends React.Component {
  render() {
    return (
      <Block className="app" vertical>
        <Block className="navigation" align="center" flex="40px">
          <Block className="logo" flex="200px">Brand</Block>
          <Block className="links" selfAlign="end">
            Navigation
          </Block>
        </Block>
        <Block className="content">
          <Block className="sidebar" vertical flex="200px">
            <Block className="categories">
              Categories
            </Block>
            <Block className="preferences" flex="40px" align="end">
              Preferences
            </Block>
          </Block>
          <Block className="main" vertical>
            <Block flex="40px">First block</Block>
            <Block flex="60px">Second block</Block>
            <Block className="main-content">
              <Block>Fluid one</Block>
              <Block> Fluid two</Block>
              <Block flex="500px">Fixed three</Block>
            </Block>
          </Block>
        </Block>
        <Block className="footer" flex="40px" align="center" justify="center">
          Footer
        </Block>
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);