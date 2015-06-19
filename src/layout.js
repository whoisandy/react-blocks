'use strict';

const extend = (...args) => {
  let newObj = {};
  for(let i in args){
    let obj = args[i];
    for(let key in obj){
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let layout, flex;
let horizontal, horizontalReverse, vertical, verticalReverse;
let alignStart, alignCenter, alignEnd, alignStretch;
let selfAlignStart, selfAlignCenter, selfAlignEnd, selfAlignStretch;
let justifyStart, justifyCenter, justifyEnd, justifyBetween, justifyAround;
let block, hidden, invisible;
let relative, absolute;
let wrap, wrapReverse;

layout = {
  display: 'flex'
};

flex = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto'
};

block = {
  display: 'block'
};

hidden = {
  display: 'none'
};

invisible = {
  visibility: 'hidden'
};

relative = {
  position: 'relative'
};

absolute = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

horizontal = extend(layout, {
  flexDirection: 'row'
});

horizontalReverse = extend(layout, {
  flexDirection: 'row-reverse'
});

vertical = extend(layout, {
  flexDirection: 'column'
});

verticalReverse = extend(layout, {
  flexDirection: 'column-reverse'
});

alignStart = {
  alignItems: 'flex-start'
};

alignCenter = {
  alignItems: 'center'
};

alignEnd = {
  alignItems: 'flex-end'
};

alignStretch = {
  alignItems: 'stretch'
};

selfAlignStart = {
  alignSelf: 'flex-start'
};

selfAlignCenter = {
  alignSelf: 'center'
};

selfAlignEnd = {
  alignSelf: 'flex-end'
};

selfAlignStretch = {
  alignSelf: 'stretch'
};

justifyStart = {
  justifyContent: 'flex-start'
};

justifyCenter = {
  justifyContent: 'center'
};

justifyEnd = {
  justifyContent: 'flex-end'
};

justifyBetween = {
  justifyContent: 'space-between'
};

justifyAround = {
  justifyContent: 'space-around'
};

wrap = {
  flexWrap: 'wrap'
};

wrapReverse = {
  flexWrap: 'wrap-reverse'
};

export default {
  extend: extend,
  block: block,
  hidden: hidden,
  invisible: invisible,
  relative: relative,
  absolute: absolute,
  layout: layout,
  flex: flex,
  horizontal: horizontal,
  horizontalReverse: horizontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  selfAlignStart: selfAlignStart,
  selfAlignCenter: selfAlignCenter,
  selfAlignEnd: selfAlignEnd,
  selfAlignStretch: selfAlignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd,
  justifyBetween: justifyBetween,
  justifyAround: justifyAround,
  wrap: wrap,
  wrapReverse: wrapReverse
};
