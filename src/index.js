'use strict';

import React from 'react';
import Layout from './layout';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.rules = props.style || {};
  }

  _buildGeneral() {
    if(this.props.block){
      this.rules = Layout.extend(this.rules, Layout.block);
    }
    if(this.props.hidden){
      this.rules = Layout.extend(this.rules, Layout.hidden);
    }
    if(this.props.invisible){
      this.rules = Layout.extend(this.rules, Layout.invisible);
    }
    return this;
  }

  _buildPosition() {
    if(this.props.relative){
      this.rules = Layout.extend(this.rules, Layout.relative);
    }
    if(this.props.absolute){
      this.rules = Layout.extend(this.rules, Layout.absolute);
    }
    return this;
  }

  _buildLayout() {
    if(this.props.layout){
      this.rules = Layout.extend(this.rules, Layout.layout, Layout.vertical);
    }
    if(this.props.inline){
      this.rules = Layout.extend(this.rules, Layout.inline, Layout.horizontal);
    }
    if(this.props.centered){
      this.rules = Layout.extend(this.rules, Layout.centered);
    }
    return this;
  }

  _buildFlex() {
    if(this.props.flex){
      this.rules = Layout.extend(this.rules, Layout.flexAuto);
    } else {
      this.rules = Layout.extend(this.rules, Layout.flexNone);
    }
    return this;
  }

  _buildDirection() {
    if(this.props.vertical){
      this.rules = Layout.extend(this.rules, Layout.vertical);
      if(this.props.reverse){
        this.rules = Layout.extend(this.rules, Layout.verticalReverse);
      }
    }
    if(this.props.horizontal) {
      this.rules = Layout.extend(this.rules, Layout.horizontal);
      if(this.props.reverse){
        this.rules = Layout.extend(this.rules, Layout.horizontalReverse);
      }
    }
    return this;
  }

  _buildWrap() {
    if(this.props.wrap){
      this.rules = Layout.extend(this.rules, Layout.wrap);
      if(this.props.reverse){
        this.rules = Layout.extend(this.rules, Layout.wrapReverse);
      }
    }
    return this;
  }

  _buildAlign() {
    switch(this.props.align){
      case 'start':
        this.rules = Layout.extend(this.rules, Layout.alignStart);
        break;
      case 'center':
        this.rules = Layout.extend(this.rules, Layout.alignCenter);
        break;
      case 'end':
        this.rules = Layout.extend(this.rules, Layout.alignEnd);
        break;
      case 'stretch':
        this.rules = Layout.extend(this.rules, Layout.alignStretch);
        break;
      default:
        break;
    }

    switch(this.props.self){
      case 'start':
        this.rules = Layout.extend(this.rules, Layout.selfAlignStart);
        break;
      case 'center':
        this.rules = Layout.extend(this.rules, Layout.selfAlignCenter);
        break;
      case 'end':
        this.rules = Layout.extend(this.rules, Layout.selfAlignEnd);
        break;
      case 'stretch':
        this.rules = Layout.extend(this.rules, Layout.selfAlignStretch);
        break;
      default:
        break;
    }

    return this;
  }

  _buildJustify() {
    switch(this.props.justify){
      case 'start':
        this.rules = Layout.extend(this.rules, Layout.justifyStart);
        break;
      case 'center':
        this.rules = Layout.extend(this.rules, Layout.justifyCenter);
        break;
      case 'end':
        this.rules = Layout.extend(this.rules, Layout.justifyEnd);
        break;
      case 'between':
        this.rules = Layout.extend(this.rules, Layout.justifyBetween);
        break;
      case 'around':
        this.rules = Layout.extend(this.rules, Layout.justifyAround);
        break;
      default:
        break;
    }
    return this;
  }

  _buildStyles() {
    let style = this._buildGeneral()
                  ._buildPosition()
                  ._buildLayout()
                  ._buildFlex()
                  ._buildWrap()
                  ._buildDirection()
                  ._buildAlign()
                  ._buildJustify();
    return style.rules;
  }

  render() {
    let props = this.props;
    let node = props.el || 'div';
    let rules = this._buildStyles();
    return React.createElement(node, Layout.extend(props, {style: rules}));
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
  align: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  self: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: React.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  centered: React.PropTypes.bool
};

export default Block;
