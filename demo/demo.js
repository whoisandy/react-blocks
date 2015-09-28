import './github.less';
import './demo.less';

import React from 'react';
import Highlight from 'react-highlight';
import Block from 'react-blocks';

class AppHeader extends React.Component {
	render() {
		let styles = {
			header: {
				marginBottom: 40
			},
			h1: {
				fontSize: 32,
				textAlign: 'center'
			},
			small: {
				fontSize: 20,
				fontWeight: 200,
				md: {
					fontSize: 28
				},
				lg: {
					fontSize: 28
				}
			}
		};

		return (
			<Block el="header" style={styles.header}>
				<h1 style={styles.h1}>
					React Blocks<br/>
					<Block el="small" style={styles.small}>Just the layout, no more, no less.</Block>
				</h1>

				<section>
					<p>React blocks uses a <i>declarative approach</i> to build complex layouts on top of CSS Flexbox. Flexbox properties are exposed as attributes on a higher-level react component. Supports media-queries via predefined <i>mobile-first</i> queries. Further custom media queries can be specified in a styles object. </p>
					<p>Please note, it does <b>NOT</b> handle mising browser features. Please use <a href="http://modernizr.com/">Modernizr</a> with Polyfills to achieve that.</p>
				</section>
				<p><a href="https://github.com/whoisandie/react-blocks">View on Github</a></p>
			</Block>
		);
	}
};

class AppFooter extends React.Component {
  render() {
		let styles = {
			footer: {
				marginTop: 40,
				marginBottom: 40,
			},
			p: {
				margin: '0 auto',
				flexBasis: '100%',
				textAlign: 'center',
				fontSize: 12
			}
		};

    return (
			<Block el="footer" layout style={styles.footer}>
				<Block el="p" flex style={styles.p}>Github page built using React and Blocks :)</Block>
				<Block el="p" flex style={styles.p}>Built with &hearts; &#8226; MIT &copy; <a href="http://whoisandie.com">whoisandie</a></Block>
			</Block>
		);
  }
}

class AppLayoutHorizontal extends React.Component {
	code(type) {
		let result;
		switch(type) {
			case 'reverse':
				result = {
					__html: `<Block className="demo" layout horizontal>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n  <Block>Delta</Block>\n</Block>`
				};
				break;
			case 'wrap':
				result = {
					__html: `<Block className="demo" layout style={styles.wrap}>\n  <Block flex>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block flex>Gamma</Block>\n  <Block flex>Delta</Block>\n</Block>`
				};
				break;
			default:
				result = {
					__html: `<Block className="demo" layout horizontal reverse>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n  <Block>Delta</Block>\n</Block>`
				};
				break;
		}

		return result;
	}

	render() {
		let styles = {
			wrap: {
				width: 200,
				marginLeft: 'auto',
				marginRight: 'auto'
			}
		};

		return (
			<div className="horizontal-and-vertical-layout">
				<h4>Horizontal and Vertical Layout</h4>
				<p>When a block component includes the layout attribute, it can become a flex container. You can specify horizontal or vertical to change the orientation</p>

				<Highlight className="html">
					{this.code()}
				</Highlight>
				<Block className="demo" layout horizontal>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
					<Block>Delta</Block>
				</Block>


				<p>By default, every block container has flexWrap property set to wrap.</p>
				<Highlight className="html">
					{this.code('wrap')}
				</Highlight>
				<p>Further the styles object would look as shown below.</p>
				<Highlight className="js">
					{`let styles = {\n  wrap: {\n    width: 200,\n    marginLeft: 'auto',\n    marginRight: 'auto'\n  }\n}`}
				</Highlight>
				<Block className="demo" layout style={styles.wrap}>
					<Block flex>Alpha</Block>
					<Block flex>Beta</Block>
					<Block flex>Gamma</Block>
					<Block flex>Delta</Block>
				</Block>

				<Highlight className="html">
					{this.code('reverse')}
				</Highlight>
				<Block className="demo" layout horizontal reverse>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
					<Block>Delta</Block>
				</Block>
				<p>Layout direction can be mirrored with the reverse attribute.</p>
			</div>
		);
	}
}

class AppLayoutFlexible extends React.Component {
	code(type) {
		let result;
		switch(type) {
			case 'horizontal':
				result = {
					__html: `<Block className="demo" layout horizontal>\n  <Block>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
			case 'vertical':
				result = {
					__html: `<Block className="demo" layout vertical>\n  <Block>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
		}

		return result;
	}

	render() {
		let styles = {
			vertical: {
				height: 250
			}
		};
		return (
			<div className="flexible-children">
				<h4>Flexible children</h4>
				<p>Children of an element using the layout styles can use flex style to control their own sizing. For example.</p>

				<Highlight className="html">
					{this.code('horizontal')}
				</Highlight>
				<Block className="demo" layout horizontal>
					<Block>Alpha</Block>
					<Block flex>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<p>The same is true for children of vertical elements.</p>
				<p><b>Note: </b>For vertical layouts, the container needs to have a height for the children to flex correctly.</p>

				<Highlight className="html">
					{this.code('vertical')}
				</Highlight>
				<Block className="demo" layout vertical style={styles.vertical}>
					<Block>Alpha</Block>
					<Block flex>Beta</Block>
					<Block>Gamma</Block>
				</Block>
			</div>
		);
	}
}

class AppAligned extends React.Component {
	code(type) {
		let result;
		switch(type) {
			case 'start':
				result = {
					__html: `<Block className="demo" layout horizontal start>\n  <Block>Start</Block>\n</Block>`
				};
				break;
			case 'center':
				result = {
					__html: `<Block className="demo" layout horizontal center>\n  <Block>Start</Block>\n</Block>`
				};
				break;
			case 'end':
				result = {
					__html: `<Block className="demo" layout horizontal end>\n  <Block>Start</Block>\n</Block>`
				};
				break;
		}

		return result;
	}

	render() {
		let styles = {
			vertical: {
				height: 120
			}
		};
		return (
			<div className="alignment">
				<h4>Alignment: Cross-axis</h4>
				<p>By default, children stretch to fit the cross-axis (e.g. vertical stretching in a horizontal layout).</p>
				<p>Children can be aligned across the cross-axis by adding align attribute and setting it to start, center or end.</p>

				<Highlight className="html">
					{this.code('start')}
				</Highlight>
				<Block className="demo" layout horizontal start style={styles.vertical}>
					<Block>Start</Block>
				</Block>


				<Highlight className="html">
					{this.code('center')}
				</Highlight>
				<Block className="demo" layout horizontal center style={styles.vertical}>
					<Block>Centered</Block>
				</Block>

				<Highlight className="html">
					{this.code('end')}
				</Highlight>
				<Block className="demo" layout horizontal end style={styles.vertical}>
					<Block>End</Block>
				</Block>
			</div>
		);
	}
}

class AppJustified extends React.Component {
	code(type) {
		let result
		switch(type) {
			case 'start':
				result = {
					__html: `<Block className="demo" layout horizontal justifyStart>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
			case 'center':
				result = {
					__html: `<Block className="demo" layout horizontal justifyCenter>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
			case 'end':
				result = {
					__html: `<Block className="demo" layout horizontal justifyEnd>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
			case 'around':
				result = {
					__html: `<Block className="demo" layout horizontal justifyAround>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
			case 'between':
				result = {
					__html: `<Block className="demo" layout horizontal justifyBetween>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>`
				};
				break;
		}

		return result;
	}

	render() {
		return (
			<div className="justification">
				<h4>Justification: Main-axis</h4>
				<p>Justification controls the content position in the main axis. Use the justify attribute and set it to start, center, end, between or around. By default justify is set to start.</p>

				<Highlight className="html">
					{this.code('start')}
				</Highlight>
				<Block className="demo" layout horizontal justifyStart>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<Highlight className="html">
					{this.code('center')}
				</Highlight>
				<Block className="demo" layout horizontal justifyCenter>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<Highlight className="html">
					{this.code('end')}
				</Highlight>
				<Block className="demo" layout horizontal justifyEnd>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<Highlight className="html">
					{this.code('around')}
				</Highlight>
				<Block className="demo" layout horizontal justifyAround>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<Highlight className="html">
					{this.code('between')}
				</Highlight>
				<Block className="demo" layout horizontal justifyBetween>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>
			</div>
		);
	}
}

class AppCentered extends React.Component {
	code() {
		return {
			__html: `<Block className="demo" layout horizontal centered>\n  <Block>Centered</Block>\n</Block>`
		}
	}

  render() {
		let styles = {
			vertical: {
				height: 200
			}
		};
    return (
			<div className="centered">
				<h4>Centered (Cross-axis & Main-axis)</h4>
				<p>Further more, an item in a flex-container can be aligned and justified using the centered attribute.</p>

				<Highlight className="html">
					{this.code()}
				</Highlight>
				<Block className="demo" layout horizontal centered style={styles.vertical}>
					<Block>Centered</Block>
				</Block>
			</div>
		);
  }
}

class AppSelfAligned extends React.Component {
	code() {
		return {
			__html: `<Block className="demo" layout horizontal>\n  <Block flex selfStart>Alpha</Block>\n  <Block flex selfCenter>Beta</Block>\n  <Block flex selfEnd>Gamma</Block>\n  <Block flex>Delta</Block>\n</Block>`
		}
	}

  render() {
		let styles = {
			vertical: {
				height: 120
			}
		};
    return (
			<div className="self-alignment">
				<h4>Self Alignment</h4>
				<p>Alignment can also be set per-child (instead of using the layout containers rules). By default, self alignment is set to stretch.</p>

				<Highlight className="html">
					{this.code()}
				</Highlight>
				<Block className="demo" layout horizontal style={styles.vertical}>
					<Block flex selfStart>Alpha</Block>
					<Block flex selfCenter>Beta</Block>
					<Block flex selfEnd>Gamma</Block>
					<Block flex>Delta</Block>
				</Block>
			</div>
		);
  }
}

class AppNested extends React.Component {
	code() {
		return {
			__html: ``
		}
	}

  render() {
		let styles = {
			transparent: {
				margin: 0,
				padding: 0,
				background: 'transparent'
			},

			common: {
				margin: 4,
				padding: 12,
				background: 'firebrick',
				color: 'white',

				md: {
					background: 'tomato',
					color: 'white'
				},

				lg: {
					background: 'white',
					color: 'black'
				}
			},

			search: {
				width: 200,
				display: 'none',
				md: {
					display: 'block'
				},
				lg: {
					display: 'block'
				}
			},

			sidebar: {
				md: {
					maxWidth: '50%',
					flexBasis: '50%'
				},
				lg: {
					maxWidth: 200,
					flexBasis: 200
				}
			},

			widget: {
				height: 100,
				md: {
					height: 'auto'
				}
			},

			footer: {
				md: {
					display: 'none'
				}
			}
		};

		return (
			<div className="nested">
				<h4>Nested Blocks (example of a complex layout)</h4>
				<p>
					Blocks can further be nested. Below shown is an example of a complex layout built using blocks. Check out the source code <a target="_blank" href="https://github.com/whoisandie/react-blocks/blob/master/demo/demo.js">here</a>.
				</p>
				<Block className="demo" layout vertical wrap>
					<Block layout wrap style={styles.transparent}>
						<Block style={styles.common}>Brand</Block>
						<Block style={[styles.common, styles.search]}>Searchbar</Block>
						<Block el="nav" layout flex justifyEnd style={styles.transparent}>
							<Block layout style={styles.common}>
								Navigation
							</Block>
						</Block>
					</Block>
					<Block layout wrap flex style={styles.transparent}>
						<Block layout vertical wrap style={styles.sidebar}>
							<Block flex style={styles.common}>Categories</Block>
							<Block style={styles.common}>Settings</Block>
						</Block>
						<Block layout vertical flex style={styles.transparent}>
							<Block style={styles.common}>Dashboard Graph</Block>
							<Block layout wrap style={[styles.transparent, styles.widget]}>
								<Block flex style={styles.common}>Widget</Block>
								<Block flex style={styles.common}>Widget</Block>
								<Block flex style={styles.common}>Widget</Block>
							</Block>
							<Block flex style={[styles.common, styles.content]}>Dashboard Content</Block>
						</Block>
					</Block>
					<Block style={[styles.common, styles.footer]}>Footer</Block>
				</Block>
			</div>
		);
  }
}

class App extends React.Component {
  render() {
    let styles = {
      app: {
        margin: '0 auto',
				padding: 20,
				md: {
					width: 600
				},
				lg: {
					width: 800
				}
      }
    };

    return (
      <Block style={styles.app}>
				<AppHeader />
				<AppLayoutHorizontal />
				<AppLayoutFlexible />
				<AppAligned />
				<AppJustified />
				<AppCentered />
				<AppSelfAligned />
				<AppNested />
				<AppFooter />
      </Block>
    );
  }
};

export default App;
