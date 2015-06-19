'use strict';

import React from 'react';
import Layout from './layout';

class Block extends React.Component {
  render() {
    let props = this.props, styles = {};

    if(props.layout){
      styles = Layout.extend(styles, Layout.layout, Layout.vertical);
    }

    if(props.vertical){
      styles = Layout.extend(styles, Layout.vertical);
      if(props.reverse){
        styles = Layout.extend(styles, Layout.verticalReverse);
      }
    }
    if(props.horizontal) {
      styles = Layout.extend(styles, Layout.horizontal);
      if(props.reverse){
        styles = Layout.extend(styles, Layout.horizontalReverse);
      }
    }

    if(props.flex){
      styles = Layout.extend(styles, Layout.flex);
    }

    switch(props.align){
      case 'start':
        styles = Layout.extend(styles, Layout.alignStart);
        break;
      case 'center':
        styles = Layout.extend(styles, Layout.alignCenter);
        break;
      case 'end':
        styles = Layout.extend(styles, Layout.alignEnd);
        break;
      default:
        break;
    }

    switch(props.self){
      case 'start':
        styles = Layout.extend(styles, Layout.selfAlignStart);
        break;
      case 'center':
        styles = Layout.extend(styles, Layout.selfAlignCenter);
        break;
      case 'end':
        styles = Layout.extend(styles, Layout.selfAlignEnd);
        break;
      default:
        break;
    }

    switch(props.justify){
      case 'center':
        styles = Layout.extend(styles, Layout.justifyCenter);
        break;
      case 'end':
        styles = Layout.extend(styles, Layout.justifyEnd);
        break;
      case 'between':
        styles = Layout.extend(styles, Layout.justifyBetween);
        break;
      case 'around':
        styles = Layout.extend(styles, Layout.justifyAround);
        break;
      default:
        break;
    }

    if(props.wrap){
      styles = Layout.extend(styles, Layout.wrap);
      if(props.reverse){
        styles = Layout.extend(styles, Layout.wrapReverse);
      }
    }

    if(props.relative){
      styles = Layout.extend(styles, Layout.relative);
    }
    if(props.absolute){
      styles = Layout.extend(styles, Layout.absolute);
    }

    if(props.block){
      styles = Layout.extend(styles, Layout.block);
    }
    if(props.hidden){
      styles = Layout.extend(styles, Layout.hidden);
    }
    if(props.invisible){
      styles = Layout.extend(styles, Layout.invisible);
    }

    return (
      <div style={styles} {...props}>
        {props.children}
      </div>
    );
  }
};

Block.PropTypes = {
  layout: React.PropTypes.bool,
  flex: React.PropTypes.bool,
  vertical: React.PropTypes.bool,
  horizontal: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
  align: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  self: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: React.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  relative: React.PropTypes.bool,
  absolute: React.PropTypes.bool,
  block: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  invisible: React.PropTypes.bool
};

export default Block;
