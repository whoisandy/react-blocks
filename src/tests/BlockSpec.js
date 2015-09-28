import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Block from '../';

describe('Block Spec: Basic', () => {
  it('should be defined and be empty', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let content = React.findDOMNode(block).textContent;
    expect(block).to.exist;
    expect(content).to.eql('');
  });

  it('should have a paragraph within block', () => {
    let block = TestUtils.renderIntoDocument(
      <Block>
        <p>Paragraph here</p>
      </Block>
    );
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'p');
    let content = React.findDOMNode(elem).textContent;
    expect(content).to.eql('Paragraph here');
  });

  it('should have element tagName set to ul', () => {
    let block = TestUtils.renderIntoDocument(
      <Block el="ul" />
    );
    let type = React.findDOMNode(block).nodeName.toLowerCase();
    expect(type).to.eql('ul');
  });

  it('should have default layout and flex attrs', () => {
    let block = TestUtils.renderIntoDocument(<Block layout flex/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.flexGrow).to.eql(1);
    expect(elem.props.style.flexShrink).to.eql(1);
    expect(elem.props.style.flexBasis).to.eql('auto');
    expect(elem.props.style.flexWrap).to.eql('wrap');
  });

  it('should have flex none', () => {
    let block = TestUtils.renderIntoDocument(<Block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.flexGrow).to.eql(0);
    expect(elem.props.style.flexShrink).to.eql(0);
    expect(elem.props.style.flexBasis).to.eql('auto');
  });
});

describe('Block Spec: Direction', () => {
  it('should have display flex and flexDirection row', () => {
    let block = TestUtils.renderIntoDocument(<Block layout horizontal/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.flexDirection).to.eql('row');
  });

  it('should have display flex and flexDirection row-reverse', () => {
    let block = TestUtils.renderIntoDocument(<Block layout horizontal reverse/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.flexDirection).to.eql('row-reverse');
  });

  it('should have display flex and flexDirection column', () => {
    let block = TestUtils.renderIntoDocument(<Block layout vertical/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.flexDirection).to.eql('column');
  });

  it('should have display flex and flexDirection column-reverse', () => {
    let block = TestUtils.renderIntoDocument(<Block layout vertical reverse/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.flexDirection).to.eql('column-reverse');
  });
});

describe('Block Spec: Align Items', () => {
  it('should have alignItems to flex-start', () => {
    let block = TestUtils.renderIntoDocument(<Block start />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('flex-start');
  });

  it('should have alignItems to center', () => {
    let block = TestUtils.renderIntoDocument(<Block center />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('center');
  });

  it('should have alignItems to flex-end', () => {
    let block = TestUtils.renderIntoDocument(<Block end />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('flex-end');
  });

  it('should have alignItems to stretch', () => {
    let block = TestUtils.renderIntoDocument(<Block stretch />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignItems).to.eql('stretch');
  });
});

describe('Block Spec: Justify Content', () => {
  it('should have justifyContent to flex-start', () => {
    let block = TestUtils.renderIntoDocument(<Block justifyStart />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('flex-start');
  });

  it('should have justifyContent to center', () => {
    let block = TestUtils.renderIntoDocument(<Block justifyCenter />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('center');
  });

  it('should have justifyContent to flex-end', () => {
    let block = TestUtils.renderIntoDocument(<Block justifyEnd />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('flex-end');
  });

  it('should have justifyContent to between', () => {
    let block = TestUtils.renderIntoDocument(<Block justifyBetween />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('space-between');
  });

  it('should have justifyContent to around', () => {
    let block = TestUtils.renderIntoDocument(<Block justifyAround />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.justifyContent).to.eql('space-around');
  });
});

describe('Block Spec: Align Self', () => {
  it('should have alignSelf to flex-start', () => {
    let block = TestUtils.renderIntoDocument(<Block selfStart />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignSelf).to.eql('flex-start');
  });

  it('should have alignSelf to center', () => {
    let block = TestUtils.renderIntoDocument(<Block selfCenter />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignSelf).to.eql('center');
  });

  it('should have alignSelf to flex-end', () => {
    let block = TestUtils.renderIntoDocument(<Block selfEnd />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignSelf).to.eql('flex-end');
  });

  it('should have alignSelf to stretch', () => {
    let block = TestUtils.renderIntoDocument(<Block selfStretch />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.alignSelf).to.eql('stretch');
  });
});

// describe('Block Spec: Wrap', () => {
//   it('should have default flexWrap wrap', () => {
//     let block = TestUtils.renderIntoDocument(<Block layout/>);
//     let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
//     expect(elem.props.style.flexWrap).to.eql('wrap');
//   });
// });

describe('Block Spec: General', () => {
  it('should be centered along both axes', () => {
    let block = TestUtils.renderIntoDocument(<Block centered/>);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('flex');
    expect(elem.props.style.alignItems).to.eql('center');
    expect(elem.props.style.justifyContent).to.eql('center');
  });

  it('should be a block element', () => {
    let block = TestUtils.renderIntoDocument(<Block block />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
  });

  it('should be block element with relative position', () => {
    let block = TestUtils.renderIntoDocument(<Block block relative />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.position).to.eql('relative');
  });

  it('should be a block element with absolute position', () => {
    let block = TestUtils.renderIntoDocument(<Block block absolute />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('block');
    expect(elem.props.style.position).to.eql('absolute');
  });

  it('should be invisible', () => {
    let block = TestUtils.renderIntoDocument(<Block invisible />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.visibility).to.eql('hidden');
  });

  it('should be hidden', () => {
    let block = TestUtils.renderIntoDocument(<Block hidden />);
    let elem = TestUtils.findRenderedDOMComponentWithTag(block, 'div');
    expect(elem.props.style.display).to.eql('none');
  });
});
