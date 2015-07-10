'use strict';

import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let node = props.el || 'div';
    return React.createElement(node, props);
  }
};

Block.PropTypes = {
  el: React.PropTypes.string,
  block: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  invisible: React.PropTypes.bool,
  relative: React.PropTypes.bool,
  absolute: React.PropTypes.bool,
  layout: React.PropTypes.bool,
  inline: React.PropTypes.bool,
  flex: React.PropTypes.bool,
  vertical: React.PropTypes.bool,
  horizontal: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
  wrap: React.PropTypes.bool,
  wrapReverse: React.PropTypes.bool,
  start: React.PropTypes.bool,
  center: React.PropTypes.bool,
  end: React.PropTypes.bool,
  stretch: React.PropTypes.bool,
  centered: React.PropTypes.bool,
  selfStart: React.PropTypes.bool,
  selfCenter: React.PropTypes.bool,
  selfEnd: React.PropTypes.bool,
  selfStretch: React.PropTypes.bool,
  justifyStart: React.PropTypes.bool,
  justifyCenter: React.PropTypes.bool,
  justifyEnd: React.PropTypes.bool,
  justifyBetween: React.PropTypes.bool,
  justifyAround: React.PropTypes.bool
};

export default Block;
