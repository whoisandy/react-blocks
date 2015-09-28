const _kind = /^\[object (.*)\]$/;
const _toString = Object.prototype.toString;

function _kindOf(val) {
  if (val === null) {
      return 'Null';
  } else if (val === undefined) {
      return 'Undefined';
  } else {
      return _kind.exec( _toString.call(val) )[1];
  }
}

function _isKind(val, kind) {
  return _kindOf(val) === kind;
}

function _isObject(val) {
    return _isKind(val, 'Object');
}

function _isArray(val) {
    return _isKind(val, 'Array');
}

function _fillin(...args) {
 let newObj = {};
 for(let i=0; i < args.length; i++) {
   let obj = args[i];
   for(let key in obj) {
     newObj[key] = obj[key];
   }
 }

 return newObj;
};

function _mixin(...args) {
  let newObj = {};
  args[0].forEach(arg => {
    if(!arg || !_isObject(arg) || _isArray(arg)){
      return;
    }
    for(let key in arg) {
      if(newObj[key] && _isObject(newObj[key])){
        newObj[key] = _mixin([newObj[key], arg[key]]);
      } else {
        newObj[key] = arg[key];
      }
    }
  });

  return newObj;
}

function _query(key) {
  return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
};

export default {
  fillin: _fillin,
  mixin: _mixin,
  query: _query
};
