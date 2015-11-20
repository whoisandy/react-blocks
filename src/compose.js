import React from 'react';
import assign from 'object-assign';
import Layout from './layout';

// const _mediaQueryListByQueryString = {};
// const _predefinedMediaQueryString = {
//   xs: 'screen and (min-width: 375px)',
//   md: 'screen and (min-width: 768px)',
//   lg: 'screen and (min-width: 1024px)'
// };
//
// function _query(key) {
//   return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
// };
//
// function _onMediaQueryChange(component, query, mediaQueryList) {
//   let media = {};
//   media[query] = mediaQueryList.matches;
//   _setStyleState(component, query, media);
// }
//
// function _setStyleState(component, key, newState) {
//   let existing = component.state && component.state._media || {};
//   let state = { _media: assign({}, existing) };
//   state._media[key] = state._media[key] || {};
//   assign(state._media[key], newState);
//   component.setState({
//     _media: state._media
//   });
// }

function _resolveLayoutGeneral(props, style) {
  let newStyle = {};
  if(props.block){
    newStyle = assign(newStyle, style, Layout.block);
  }
  if(props.hidden){
    newStyle = assign(newStyle, style, Layout.hidden);
  }
  if(props.invisible){
    newStyle = assign(newStyle, style, Layout.invisible);
  }

  return newStyle;
}

function _resolveLayoutPosition(props, style) {
  let newStyle = {};
  if(props.relative){
    newStyle = assign(newStyle, style, Layout.relative);
  }
  if(props.absolute){
    newStyle = assign(newStyle, style, Layout.absolute);
  }

  return newStyle;
};

function _resolveLayoutFlex(props, style) {
  let newStyle = {};
  if(props.layout){
    newStyle = assign(newStyle, style, Layout.layout, Layout.vertical);
    if(props.vertical){
      props.reverse ?
      newStyle = assign(newStyle, style, Layout.verticalReverse) :
      newStyle = assign(newStyle, style, Layout.vertical);
    } else {
      props.reverse ?
      newStyle = assign(newStyle, style, Layout.horizontalReverse) :
      newStyle = assign(newStyle, style, Layout.horizontal);
    }
  }
  if(props.inline){
    newStyle = assign(newStyle, style, Layout.inline, Layout.horizontal);
  }

  props.flex ?
  newStyle = assign(newStyle, Layout.flexAuto, style) :
  newStyle = assign(newStyle, Layout.flexNone, style);

  return newStyle;
};

function _resolveLayoutAlign(props, style) {
  let newStyle = {};
  newStyle = assign(newStyle, style, Layout.alignStretch);
  if(props.start) {
    newStyle = assign(newStyle, style, Layout.alignStart);
  }
  if(props.center) {
    newStyle = assign(newStyle, style, Layout.alignCenter);
  }
  if(props.end) {
    newStyle = assign(newStyle, style, Layout.alignEnd);
  }
  if(props.centered){
    newStyle = assign(newStyle, style, Layout.centered);
  }

  return newStyle;
};

function _resolveLayoutSelf(props, style) {
  let newStyle = {};
  if(props.selfStart) {
    newStyle = assign(newStyle, style, Layout.selfAlignStart);
  }
  if(props.selfCenter) {
    newStyle = assign(newStyle, style, Layout.selfAlignCenter);
  }
  if(props.selfEnd) {
    newStyle = assign(newStyle, style, Layout.selfAlignEnd);
  }
  if(props.selfStretch){
    newStyle = assign(newStyle, style, Layout.selfAlignStretch);
  }

  return newStyle;
};

function _resolveLayoutJustify(props, style) {
  let newStyle = {};
  if(props.justifyStart) {
    newStyle = assign(newStyle, style, Layout.justifyStart);
  }
  if(props.justifyCenter) {
    newStyle = assign(newStyle, style, Layout.justifyCenter);
  }
  if(props.justifyEnd) {
    newStyle = assign(newStyle, style, Layout.justifyEnd);
  }
  if(props.justifyStretch) {
    newStyle = assign(newStyle, style, Layout.justifyStretch);
  }
  if(props.justifyBetween) {
    newStyle = assign(newStyle, style, Layout.justifyBetween);
  }
  if(props.justifyAround) {
    newStyle = assign(newStyle, style, Layout.justifyAround);
  }

  return newStyle;
};

function _resolveLayoutStyles(props, style) {
  return assign(
    {},
    _resolveLayoutGeneral(props, style),
    _resolveLayoutPosition(props, style),
    _resolveLayoutFlex(props, style),
    _resolveLayoutAlign(props, style),
    _resolveLayoutSelf(props, style),
    _resolveLayoutJustify(props, style)
  );
};

// function _resolveMediaQueries(component, style) {
//   let newStyle = {};
//   Object.keys(style)
//   .filter(name => {
//     return _query(name);
//   })
//   .map(query => {
//     debugger;
//     let mediaQueryStyles = style[query];
//     query = query[0] === '@' ? query.replace('@media ', '') : _predefinedMediaQueryString[query];
//     let mql = _mediaQueryListByQueryString[query];
//     if (!mql) {
//       _mediaQueryListByQueryString[query] = mql = window.matchMedia(query);
//     }
//
//     if (!component._mediaQueryListenersByQuery) {
//       component._mediaQueryListenersByQuery = {};
//     }
//
//     if (!component._mediaQueryListenersByQuery[query]) {
//       let listener = _onMediaQueryChange.bind(null, component, query);
//       mql.addListener(listener);
//       component._mediaQueryListenersByQuery[query] = {
//         remove() { mql.removeListener(listener) }
//       };
//     }
//
//     if (mql.matches) {
//       newStyle = assign({}, style, mediaQueryStyles);
//     }
//   });
//
//   return newStyle;
// };

export default function Compose(component, rendered){
  let props = rendered.props;
  let style = props.style;

  let newProps = {};
  let newStyle = {};

  if(Array.isArray(style)) {
    style.forEach(s => {
      if (!s || typeof(s) !== 'object' || Array.isArray(s)){
        console.warn('styles object should be an object');
      }
      assign(newStyle, style);
    });
  }

  newStyle = assign(newStyle, _resolveLayoutStyles(props, style));
  // newStyle = assign(newStyle, _resolveMediaQueries(component, style));
  //
  // Object.keys(style).forEach(key => {
  //   if (!_query(key)) {
  //     newStyle[key] = style[key];
  //   }
  // });

  newProps = assign(newProps, props, {style: newStyle});
  return React.cloneElement(rendered, newProps);
}
