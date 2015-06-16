'use strict';

import React from 'react';
import Layout from './layout';

class Block extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let styles = Layout.flexRoot;

    if (typeof(props.flex) === 'string') {
      styles = Layout.extend(styles, Layout.flexFixed, { flexBasis: props.flex });
    } else {
      styles = Layout.extend(styles, Layout.flexFluid);
    }

    if(props.vertical){
      if(props.reverse){
        styles = Layout.extend(styles, Layout.verticalReverse);
      } else {
        styles = Layout.extend(styles, Layout.vertical);
      }
    } else {
      if(props.reverse){
        styles = Layout.extend(styles, Layout.horizontalReverse);
      } else {
        styles = Layout.extend(styles, Layout.horizontal);
      }
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
        styles = Layout.extend(styles, Layout.alignStretch);
        break;
    }

    switch(props.selfAlign){
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
        styles = Layout.extend(styles, Layout.selfAlignStretch);
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
        styles = Layout.extend(styles, Layout.justifyStart);
        break;
    }

    switch(props.position){
      case 'absolute':
        styles = Layout.extend(styles, Layout.absoute);
        break;
      default:
        styles = Layout.extend(styles, Layout.relative);
        break;
    }

    if(props.block){
      styles = Layout.extend(Layout.block);
    }
    if(props.scroll){
      styles = Layout.extend(styles, Layout.scroll);
    }

    return (
      <div {...props} style={styles}>
        {props.children}
      </div>
    );
  }
};

Block.PropTypes = {
  flex: React.PropTypes.string,
  vertical: React.PropTypes.bool,
  horizontal: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
  align: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  selfAlign: React.PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: React.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  position: React.PropTypes.oneOf(['absolute', 'relative']),
  block: React.PropTypes.bool,
  scroll: React.PropTypes.bool
};

export default Block;