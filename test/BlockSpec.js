'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Block from '../src';

describe('Block Spec: Basic', () => {
  it('should be defined', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    expect(block).to.exist;
  });

  it('should have empty content', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    let content = elem.getDOMNode().textContent;
    expect(content).to.eql('');
  });

  it('should have a paragraph', () => {
    let block = TestUtils.renderIntoDocument(
      <Block>
        <p>Paragraph here</p>
      </Block>
    );
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'p');
    let content = elem.getDOMNode().textContent;
    expect(content).to.eql('Paragraph here');
  });

  it('should be have default flex styles', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 1,
      flexBasis: 'auto',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });
});

describe('Block Spec: Flex Direction', () => {
  it('should have flexDirection row-reverse', () => {
    let block = TestUtils.renderIntoDocument(<Block reverse />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexDirection).to.eql('row-reverse');
  });

  it('should have flexDirection column', () => {
    let block = TestUtils.renderIntoDocument(<Block vertical />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexDirection).to.eql('column');
  });

  it('should have flexDirection column-reverse', () => {
    let block = TestUtils.renderIntoDocument(<Block vertical reverse/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexDirection).to.eql('column-reverse');
  });
});

describe('Block Spec: Flex Basis', () => {
  it('should have flexBasis auto and flexGrow 1', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexGrow).to.eql(1);
    expect(elem.props.style.flexBasis).to.eql('auto');
  });

  it('should have flexBasis 200px and flexGrow 0', () => {
    let block = TestUtils.renderIntoDocument(<Block flex="200px" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexGrow).to.eql(0);
    expect(elem.props.style.flexBasis).to.eql('200px');
  });
});

describe('Block Spec: Align Items', () => {
  it('should have alignItems to stretch by default', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('stretch');
  });

  it('should have alignItems to start', () => {
    let block = TestUtils.renderIntoDocument(<Block align="start" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('flex-start');
  });

  it('should have alignItems to center', () => {
    let block = TestUtils.renderIntoDocument(<Block align="center" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('center');
  });

  it('should have alignItems to flex-end', () => {
    let block = TestUtils.renderIntoDocument(<Block align="end" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('flex-end');
  });
});

describe('Block Spec: Justify Content', () => {
  it('should have justifyContent to flex-start by default', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('flex-start');
  });

  it('should have justifyContent to center', () => {
    let block = TestUtils.renderIntoDocument(<Block justify="center" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('center');
  });

  it('should have justifyContent to flex-end', () => {
    let block = TestUtils.renderIntoDocument(<Block justify="end" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('flex-end');
  });

  it('should have justifyContent to between', () => {
    let block = TestUtils.renderIntoDocument(<Block justify="between" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('space-between');
  });

  it('should have justifyContent to around', () => {
    let block = TestUtils.renderIntoDocument(<Block justify="around" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('space-around');
  });
});

describe('Block Spec: Block Element', () => {
  it('should be a block element', () => {
    let block = TestUtils.renderIntoDocument(<Block block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.position).to.eql('relative');
  });

  it('should be a block with overflow auto', () => {
    let block = TestUtils.renderIntoDocument(<Block block scroll />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.overflow).to.eql('auto');
  });

  it('should be an absolute block element', () => {
    let block = TestUtils.renderIntoDocument(<Block block position="absolute" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.position).to.eql('absolute');
  });

  it('should be an absolute block with overflow auto', () => {
    let block = TestUtils.renderIntoDocument(<Block block scroll position="absolute" />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.position).to.eql('absolute');
    expect(elem.props.style.overflow).to.eql('auto');
  });
});

describe('Block Spec: Layout Test', () => {
  let block;
  beforeEach(() => {
    block = TestUtils.renderIntoDocument(
      <Block className="app">
        <Block className="sidebar" flex="200px" />
        <Block className="main" vertical>
          <Block className="header" flex="40px" />
          <Block className="content" />
        </Block>
      </Block>
    );
  });

  it('should have an app block with default flex styles', () => {
    let appElem = TestUtils.findRenderedDOMComponentWithClass(block, 'app');
    expect(appElem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 1,
      flexBasis: 'auto',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });

  it('should have a sidebar block with flexBasis 200px', () => {
    let sidebarElem = TestUtils.findRenderedDOMComponentWithClass(block, 'sidebar');
    expect(sidebarElem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 0,
      flexBasis: '200px',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });

  it('should have a main block with flexBasis auto', () => {
    let mainElem = TestUtils.findRenderedDOMComponentWithClass(block, 'main');
    expect(mainElem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 1,
      flexBasis: 'auto',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });

  it('should have a header block with flexBasis 40px', () => {
    let mainElem = TestUtils.findRenderedDOMComponentWithClass(block, 'header');
    expect(mainElem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 0,
      flexBasis: '40px',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });

  it('should have a content block with flexBasis auto', () => {
    let mainElem = TestUtils.findRenderedDOMComponentWithClass(block, 'content');
    expect(mainElem.props.style).to.deep.eql({
      display: 'flex',
      position: 'relative',
      flexGrow: 1,
      flexBasis: 'auto',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    });
  });
});
