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

let flexRoot, flexFluid, flexFixed;
let flexStretch, flexFit;
let horizontal, horizontalReverse, vertical, verticalReverse;
let alignStart, alignCenter, alignEnd, alignStretch;
let justifyStart, justifyCenter, justifyEnd, justifyBetween, justifyAround;
let selfAlignStart, selfAlignCenter, selfAlignEnd, selfAlignStretch;
let block, hidden, invisible, scroll;
let relative, absolute;

flexRoot = {
  display: 'flex',
  boxSizing: 'border-box'
};

block = {
  display: 'block',
  boxSizing: 'border-box'
};

hidden = {
  display: 'none'
};

invisible = {
  visibility: 'hidden'
};

scroll = {
  overflow: 'auto'
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

flexFluid = {
  flexGrow: 1,
  flexBasis: 'auto'
};

flexFixed = {
  flexGrow: 0
}

horizontal = extend(flexRoot, {
  flexDirection: 'row'
});

horizontalReverse = extend(flexRoot, {
  flexDirection: 'row-reverse'
});

vertical = extend(flexRoot, {
  flexDirection: 'column'
});

verticalReverse = extend(flexRoot, {
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

export default {
  extend: extend,
  flexFluid: flexFluid,
  flexFixed: flexFixed,
  block: block,
  hidden: hidden,
  scroll: scroll,
  relative: relative,
  absolute: absolute,
  horizontal: horizontal,
  horizontalReverse: horizontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd
};
