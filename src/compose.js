'use strict';

import React from 'react';
import Layout from './layout';
import Utils from './utils';

const _mediaQueryListByQueryString = {};
const _predefinedMediaQueryString = {
  xs: 'screen and (min-width: 375px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 1024px)'
};

function _onMediaQueryChange(component, query, mediaQueryList) {
  let media = {};
  media[query] = mediaQueryList.matches;
  _setStyleState(component, query, media);
}

function _setStyleState(component, key, newState) {
  let existing = component.state && component.state._media || {};
  let state = { _media: Utils.fillin({}, existing) };
  state._media[key] = state._media[key] || {};
  Utils.fillin(state._media[key], newState);
  component.setState({
    _media: state._media
  });
}

const _resolveLayoutGeneral = (props, style) => {
  if(props.block){
    style = Utils.fillin(style, Layout.block);
  }
  if(props.hidden){
    style = Utils.fillin(style, Layout.hidden);
  }
  if(props.invisible){
    style = Utils.fillin(style, Layout.invisible);
  }

  return style;
}

const _resolveLayoutPosition = (props, style) => {
  if(props.relative){
    style = Utils.fillin(style, Layout.relative);
  }
  if(props.absolute){
    style = Utils.fillin(style, Layout.absolute);
  }

  return style;
};

const _resolveLayoutFlex = (props, style) => {
  if(props.layout){
    style = Utils.fillin(style, Layout.layout, Layout.vertical);
    if(props.vertical){
      props.reverse ?
      style = Utils.fillin(style, Layout.verticalReverse) :
      style = Utils.fillin(style, Layout.vertical);
    } else {
      props.reverse ?
      style = Utils.fillin(style, Layout.horizontalReverse) :
      style = Utils.fillin(style, Layout.horizontal);
    }
  }
  if(props.inline){
    style = Utils.fillin(style, Layout.inline, Layout.horizontal);
  }

  props.flex ?
  style = Utils.fillin({}, Layout.flexAuto, style) :
  style = Utils.fillin({}, Layout.flexNone, style);

  return style;
};

const _resolveLayoutAlign = (props, style) => {
  style = Utils.fillin(style, Layout.alignStretch);
  if(props.start) {
    style = Utils.fillin(style, Layout.alignStart);
  }
  if(props.center) {
    style = Utils.fillin(style, Layout.alignCenter);
  }
  if(props.end) {
    style = Utils.fillin(style, Layout.alignEnd);
  }
  if(props.centered){
    style = Utils.fillin(style, Layout.centered);
  }

  return style;
};

const _resolveLayoutSelf = (props, style) => {
  if(props.selfStart) {
    style = Utils.fillin(style, Layout.selfAlignStart);
  }
  if(props.selfCenter) {
    style = Utils.fillin(style, Layout.selfAlignCenter);
  }
  if(props.selfEnd) {
    style = Utils.fillin(style, Layout.selfAlignEnd);
  }
  if(props.selfStretch){
    style = Utils.fillin(style, Layout.selfAlignStretch);
  }

  return style;
};

const _resolveLayoutJustify = (props, style) => {
  if(props.justifyStart) {
    style = Utils.fillin(style, Layout.justifyStart);
  }
  if(props.justifyCenter) {
    style = Utils.fillin(style, Layout.justifyCenter);
  }
  if(props.justifyEnd) {
    style = Utils.fillin(style, Layout.justifyEnd);
  }
  if(props.justifyStretch) {
    style = Utils.fillin(style, Layout.justifyStretch);
  }
  if(props.justifyBetween) {
    style = Utils.fillin(style, Layout.justifyBetween);
  }
  if(props.justifyAround) {
    style = Utils.fillin(style, Layout.justifyAround);
  }

  return style;
};

const _resolveLayoutStyles = (props, style) => {
  style = _resolveLayoutGeneral(props, style);
  style = _resolveLayoutPosition(props, style);
  style = _resolveLayoutFlex(props, style);
  style = _resolveLayoutAlign(props, style);
  style = _resolveLayoutSelf(props, style);
  style = _resolveLayoutJustify(props, style);

  return style;
};

const _resolveMediaQueries = (component, style) => {
  let styles = style;
  Object.keys(styles)
  .filter(name => {
    return Utils.query(name);
  })
  .map(query => {
    let mediaQueryStyles = styles[query];
    query = query[0] === '@' ? query.replace('@media ', '') : _predefinedMediaQueryString[query];
    let mql = _mediaQueryListByQueryString[query];
    if (!mql) {
      _mediaQueryListByQueryString[query] = mql = window.matchMedia(query);
    }

    if (!component._mediaQueryListenersByQuery) {
      component._mediaQueryListenersByQuery = {};
    }

    if (!component._mediaQueryListenersByQuery[query]) {
      let listener = _onMediaQueryChange.bind(null, component, query);
      mql.addListener(listener);
      component._mediaQueryListenersByQuery[query] = {
        remove() { mql.removeListener(listener) }
      };
    }

    if (mql.matches) {
      styles = Utils.fillin(styles, mediaQueryStyles);
    }
  });

  return styles;
};

export default function Compose(component, rendered){
  let props = rendered.props;
  let style = props.style;
  let children = props.children;

  let newStyle = {}, newProps = {};

  if(Array.isArray(style)) {
    style = Utils.mixin(style);
  }

  style = _resolveLayoutStyles(props, style);
  style = _resolveMediaQueries(component, style);

  Object.keys(style).forEach(key => {
    if (!Utils.query(key)) {
      newStyle[key] = style[key];
    }
  });

  // Prefix vendors here
  newProps = Utils.fillin(newProps, {style: newStyle});
  return React.cloneElement(rendered, newProps, children);
}
