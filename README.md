[![Travis Status][trav_img]][trav_site]
[![Dependency Status][david_img]][david_site]

# React Blocks

```bash
npm install react-blocks
```

A higher-level react component to manage complex layouts using flexbox. Everything is just another block :)

Heavily inspired by [Polymer layout.html](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html), [LayoutJS](https://github.com/basarat/layoutjs) and the [CSSinJS](https://speakerdeck.com/vjeux/react-css-in-js) pattern.

> Just pure layout, No more, No less.

## About
React blocks uses a declarative approach to build complex layouts on top of [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes). Flexbox properties are exposed as attributes on a higher-level react component.

Please note, it does **NOT** handle mising browser features. Please use [Modernizr](http://modernizr.com/) with Polyfills to achieve that.

## Usage

Start by importing/requiring react-blocks.

```js
// using an ES6 transpiler
import Block from 'react-blocks';

// not using an ES6 transpiler
var Block = require('react-blocks');
```

There's also a umd version available. The component is available on `window.ReactBlocks`.

A block is just a block level div element by default. You can make it a flex container by adding a `layout` attribute. Further to specify a direction, add `horizontal` or `vertical` attributes for row or column respectively. However the default direction would be set to vertical if nothing is specified.

```js
let App = React.createClass({
  render() {
    return (
      <Block layout horizontal>
        <div>Alpha</div>
        <div>Beta</div>
      </Block>
    );
  }
});
```

The direction of a block layout can be reversed by adding a `reverse` attribute.

```js
let AppReverse = React.createClass({
  render() {
    return (
      <Block layout vertical reverse>
        <div>Alpha</div>
        <div>Beta</div>
      </Block>
    );
  }
});
```

Blocks can further be nested. A block could contain multiple blocks as well.

```js
let AppNested = React.createClass({
  render() {
    return(
      <Block layout horizontal>
        <Block className="sidebar" layout vertical>
          <Block>Alpha</Block>
          <Block>Beta</Block>
        </Block>
        <Block className="content" layout horizontal reverse>
          <Block>Gamma</Block>
          <Block>Delta</Block>
        </Block>
      </Block>
    );
  }
});
```

## Developers

Clone the repo using `git clone https://github.com/whoisandie/react-blocks.git`, cd into the directory install dependencies. Type `npm start` to start a local dev server on port 8080.

```bash
cd react-blocks && npm install
npm start
```

The repository comes with a set of tests, which serve also as examples. To run the tests, type `npm test` once you install the dependencies.

```bash
cd react-blocks && npm install
npm test
```

## License
MIT &copy; 2015 [whoisandie][whiosandie]

[trav_img]: https://api.travis-ci.org/whoisandie/react-blocks.svg
[trav_site]: https://travis-ci.org/whoisandie/react-blocks
[david_img]: https://img.shields.io/david/whoisandie/react-blocks.svg
[david_site]: https://david-dm.org/whoisandie/react-blocks
[whoisandie]: http://whoisandie.com
