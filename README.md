# React Blocks [![NPM Package][npm_img]][npm_site] [![Travis Status][trav_img]][trav_site]

A higher-level react component to manage complex layouts using flexbox. Everything is just another block. Heavily inspired by [Polymer layout.html](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html), [LayoutJS](https://github.com/basarat/layoutjs) and the [CSSinJS](https://speakerdeck.com/vjeux/react-css-in-js) pattern.

> Just pure layout, No more, No less.

## About
React blocks uses a declarative approach to build complex layouts on top of [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes). Flexbox properties are exposed as attributes on a higher-level react component.

Please note, it does **NOT** handle mising browser features. Please use [Modernizr](http://modernizr.com/) with Polyfills to achieve that.

## Usage

### NPM and Webpack/Browserify
Install via `npm`. Use `--save` to include it in your *package.json*.

```bash
npm install react-blocks
```

Start by importing/requiring react-blocks within your react code.

```js
// using an ES6 transpiler
import Block from 'react-blocks';

// not using an ES6 transpiler
var Block = require('react-blocks');
```

There's also a umd version available at `lib/umd`. The component is available on `window.ReactBlocks`.

### Layout (Horizontal, Vertical, Reverse, Wrap)
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

The direction of a block layout can be reversed by adding a `reverse` attribute. Also to make a flex-item stretch its width use the `flex` attribute on a flex-item. The `wrap` attribute wraps all flex-items inside a flex-container.

```js
let AppReverse = React.createClass({
  render() {
    let styles = {
      block: {
        width: 200
      }
    };

    return (
      <Block layout vertical reverse wrap style={styles.block}>
        <div>Alpha</div>
        <div flex>Beta</div>
      </Block>
    );
  }
});
```

### Align, Self-Align & Justify

By default flex-items *stretch* to fit the cross-axis and are *start* justified. The `align` and `justify` attributes are used to align and justify flex-items. Please note *align* & *justify* attributes have to be declared on a parent block.

```js
let AppAligned = React.createClass({
  render() {
    let styles = {
      block: {
        height: 200
      }
    };

    return (
      <Block layout horizontal align="center" justify="end" style={styles.block}>
        <Block>Alpha</Block>
        <Block>Beta</Block>
      </Block>
    );
  }
});
```

Further flex-items can be self aligned across the cross-axis using the self attribute on the flex-item itself.

```js
let AppSelfAligned = React.createClass({
  render() {
    let styles = {
      block: {
        height: 200
      }
    };

    return (
      <Block layout horizontal align="center" justify="end" style={styles.block}>
        <Block self="start">Alpha</Block>
        <Block self="end">Beta</Block>
      </Block>
    );
  }
});
```

### Nested Blocks
Blocks can further be nested. A block could contain multiple blocks as well. Use the `layout` attribute on a flex item to make a it a flex-container. However its not necessary that all children inside a flex-container are wrapped inside a *Block*.

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
          <div>Delta</div>
          <a href="#">Theta</a>
        </Block>
      </Block>
    );
  }
});
```

### General purpose attributes
Blocks come with purpose attributes for basic positioning.

Attribute   |  Result
---------   |  ------
`block`     |  Assigns `display: block`
`hidden`    |  Assigns `display: none`
`invisible` |  Assigns `visibility: hidden`
`relative`  |  Assigns `position: relative`
`absolute`  |  Assigns `position: absolute` and sets `top:0;right:0;bottom:0;left:0`. *Note:* When using `absolute` attribute, there must be a container having `position: relative` layout.


## Developers

Clone the repository, install the dependencies & type `npm start` to start a local development server. Open `http://localhost:8080` to get started.

The repository comes with a set of tests, which serve also as examples. To run the tests, type `npm test` once you install the dependencies. All tests are written using mocha & chai.

## License
MIT &copy; 2015 [whoisandie](whiosandie)


[whoisandie]: http://whoisandie.com

[trav_img]: https://api.travis-ci.org/whoisandie/react-blocks.svg
[trav_site]: https://travis-ci.org/whoisandie/react-blocks
[npm_img]: https://img.shields.io/npm/v/react-blocks.svg
[npm_site]: https://www.npmjs.org/package/react-blocks
