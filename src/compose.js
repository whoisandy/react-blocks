import React from 'react';
import assign from 'object-assign';
import layout from './layout';

const _mediaQueryListByQueryString = {};
const _predefinedMediaQueryString = {
  xs: 'screen and (min-width: 480px)',
  sm: 'screen and (min-width: 768px)',
  md: 'screen and (min-width: 992px)',
  lg: 'screen and (min-width: 1200px)'
};

function _query(key) {
  return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
};

function _onMediaQueryChange(component, query, mediaQueryList) {
  let media = {};
  media[query] = mediaQueryList.matches;
  _setStyleState(component, query, media);
}

function _setStyleState(component, key, newState) {
  let existing = component.state && component.state._media || {};
  let state = { _media: assign({}, existing) };
  state._media[key] = state._media[key] || {};
  assign(state._media[key], newState);
  component.setState({
    _media: state._media
  });
}

function _resolveLayoutGeneral(props, style) {
  let newStyle = {};
  if(props.block){
    newStyle = assign(newStyle, style, layout.block);
  }
  if(props.hidden){
    newStyle = assign(newStyle, style, layout.hidden);
  }
  if(props.invisible){
    newStyle = assign(newStyle, style, layout.invisible);
  }

  return newStyle;
}

function _resolveLayoutPosition(props, style) {
  let newStyle = {};
  if(props.relative){
    newStyle = assign(newStyle, style, layout.relative);
  }
  if(props.absolute){
    newStyle = assign(newStyle, style, layout.absolute);
  }

  return newStyle;
};

function _resolveLayoutFlex(props, style) {
  let newStyle = {};
  if(props.layout){
    newStyle = assign(newStyle, style, layout.layout, layout.vertical);
    if(props.vertical){
      props.reverse ?
      newStyle = assign(newStyle, style, layout.verticalReverse) :
      newStyle = assign(newStyle, style, layout.vertical);
    } else {
      props.reverse ?
      newStyle = assign(newStyle, style, layout.horizontalReverse) :
      newStyle = assign(newStyle, style, layout.horizontal);
    }
  }
  if(props.inline){
    newStyle = assign(newStyle, style, layout.inline, layout.horizontal);
  }

  props.flex ?
  newStyle = assign(newStyle, layout.flexAuto, style) :
  newStyle = assign(newStyle, layout.flexNone, style);

  return newStyle;
};

function _resolveLayoutAlign(props, style) {
  let newStyle = {};
  newStyle = assign(newStyle, style, layout.alignStretch);
  if(props.start) {
    newStyle = assign(newStyle, style, layout.alignStart);
  }
  if(props.center) {
    newStyle = assign(newStyle, style, layout.alignCenter);
  }
  if(props.end) {
    newStyle = assign(newStyle, style, layout.alignEnd);
  }
  if(props.centered){
    newStyle = assign(newStyle, style, layout.centered);
  }

  return newStyle;
};

function _resolveLayoutSelf(props, style) {
  let newStyle = {};
  if(props.selfStart) {
    newStyle = assign(newStyle, style, layout.selfAlignStart);
  }
  if(props.selfCenter) {
    newStyle = assign(newStyle, style, layout.selfAlignCenter);
  }
  if(props.selfEnd) {
    newStyle = assign(newStyle, style, layout.selfAlignEnd);
  }
  if(props.selfStretch){
    newStyle = assign(newStyle, style, layout.selfAlignStretch);
  }

  return newStyle;
};

function _resolveLayoutJustify(props, style) {
  let newStyle = {};
  if(props.justifyStart) {
    newStyle = assign(newStyle, style, layout.justifyStart);
  }
  if(props.justifyCenter) {
    newStyle = assign(newStyle, style, layout.justifyCenter);
  }
  if(props.justifyEnd) {
    newStyle = assign(newStyle, style, layout.justifyEnd);
  }
  if(props.justifyStretch) {
    newStyle = assign(newStyle, style, layout.justifyStretch);
  }
  if(props.justifyBetween) {
    newStyle = assign(newStyle, style, layout.justifyBetween);
  }
  if(props.justifyAround) {
    newStyle = assign(newStyle, style, layout.justifyAround);
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

function _resolveMediaQueries(component, style) {
  let newStyle = {};
  if (style) {
    Object.keys(style)
      .filter(name => _query(name))
      .map(query => {
        let mql;
        let mediaQueryStyles;

        mediaQueryStyles = style[query];
        query = query[0] === '@' ? query.replace('@media ', '') : _predefinedMediaQueryString[query];
        mql = _mediaQueryListByQueryString[query];
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
          newStyle = assign({}, style[query], mediaQueryStyles);
        }
      });
  }

  return newStyle;
};

export default function Compose(component, rendered){
  let props = rendered.props;
  let style = props.style;

  let newProps = {};
  let newStyle = {};

  if(Array.isArray(style)) {
    for(let i=0; i<style.length; i++) {
      if (!style[i] || typeof(style[i]) !== 'object' || Array.isArray(style[i])){
        console.warn('styles object should be an object');
      }
      newStyle = assign(newStyle, style[i]);
    }
  }

  newStyle = assign(newStyle, _resolveLayoutStyles(props, style));
  newStyle = assign(newStyle, _resolveMediaQueries(component, style));

  Object.keys(newStyle).forEach(key => {
    if (_query(key)) {
      delete newStyle[key];
    }
  });

  newProps = assign(newProps, {style: newStyle});
  return React.cloneElement(rendered, newProps);
}
