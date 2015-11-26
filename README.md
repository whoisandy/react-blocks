# React Blocks [![NPM Package][npm_img]][npm_site] [![Travis Status][trav_img]][trav_site]

A higher-level react component to manage complex layouts using flexbox. Everything is just another block. Heavily inspired by [Polymer layout.html][polymer], [LayoutJS][layoutjs] and the [CSSinJS][cssinjs] pattern.

> Just pure layout, No more, No less.

## About
React blocks uses a *declarative* approach to build complex layouts on top of [CSS Flexbox][flexbox]. Flexbox properties are exposed as attributes on a higher-level react component. Supports media-queries via predefined *mobile-first* queries. Further custom media queries can be specified in a styles object. Please refer the `styles.js` file inside `demo` directory.

Please note, it does **NOT** handle missing browser features. Please use [Modernizr][modernizr] with Polyfills to achieve that.

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
A block is just a block level div element by default. You can make it a flex container by adding a `layout` attribute. Further to specify a direction, add `horizontal` or `vertical` attributes for row or column respectively. However the default direction would be set to vertical if nothing is specified. The horizontal attribute is optional though, a block container has its flexDirection set to `horizontal` by default. The direction of a block layout can be reversed by adding a `reverse` attribute. Also to make a flex-item stretch its width use the `flex` attribute on a flex-item. Also all flex-items of a block container are wrapped by default.

```js
// Normal Flex layout
const App = () => {
  return (
    <Block layout>
      <div>Alpha</div>
      <div>Beta</div>
    </Block>
  );
};

// Reverse Flex layout
const Reverse = () => {
  let { reverse } = styles;
  return (
    <Block style={reverse.block} layout vertical reverse>
      <div>Alpha</div>
      <div flex>Beta</div>
    </Block>
  );
};
```

### Align, Self-Align & Justify

By default flex-items *stretch* to fit the cross-axis and are *start* justified. The `align` and `justify*` attributes are used to align and justify flex-items. Please note *align* & *justify* attributes have to be declared on a parent container and has to be a `Block` element.

```js
// Aligned and Justified  blocks
const AlignedJustified = () => {
  let { vertical } = styles;
  return (
    <Block style={vertical.block} layout center justifyEnd>
      <Block>Alpha</Block>
      <Block>Beta</Block>
    </Block>
  );
};
```

Further flex-items can be self aligned across the cross-axis using the self attribute on the flex-item itself.

```js
// Self aligned with Aligned and Justified blocks
const SelfAlignedJustified = () => {
  let { vertical } = styles;
  return (
    <Block style={vertical.block} layout center justifyEnd>
      <Block selfStart>Alpha</Block>
      <Block selfEnd>Beta</Block>
    </Block>
  );
};
```

To center align and center justify an item within a flex-container, use the `centered` attribute.

```js
const Centered = () => {
  let { centered } = styles;
  return (
    <Block style={centered.block} layout centered>
      <div>Centered</div>
    </Block>
  );
};
```

### Nested Blocks
Blocks can further be nested. A block could contain multiple blocks as well. Use the `layout` attribute on a flex item to make a it a flex-container. However its not necessary that all children inside a flex-container are wrapped inside a *Block*.

```js
const Nested = () => {
  return (
    <Block layout>
      <Block className="sidebar" layout vertical>
        <Block>Alpha</Block>
        <Block>Beta</Block>
      </Block>
      <Block className="content" layout reverse>
        <Block selfEnd>Gamma</Block>
        <div>Delta</div>
        <div>Theta</div>
      </Block>
    </Block>
  )
};
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

## Todo
- Add vendor prefixes
- Ability to define custom media-queries

## Issues
Feel free to contribute. Submit a Pull Request or open an issue for further discussion.

## License
MIT &copy; [whoisandie][whoisandie]

[polymer]: https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html
[layoutjs]: https://github.com/basarat/layoutjs
[cssinjs]: https://speakerdeck.com/vjeux/react-css-in-js
[flexbox]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes
[modernizr]: http://modernizr.com
[whoisandie]: http://whoisandie.com

[trav_img]: https://api.travis-ci.org/whoisandie/react-blocks.svg
[trav_site]: https://travis-ci.org/whoisandie/react-blocks
[npm_img]: https://img.shields.io/npm/v/react-blocks.svg
[npm_site]: https://www.npmjs.org/package/react-blocks
