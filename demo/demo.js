'use strict';

import React from 'react';
import Block from '../lib';
import './demo.css';

class AppHeader extends React.Component {
	render() {
		return (
			<Block className="header">
				<header>
					<h1>React Blocks<br/><small>Just the layout, no more, no less.</small></h1>
				</header>
				<section>
					<p>React blocks uses a declarative approach to build complex layouts on top of CSS Flexbox. Flexbox properties are exposed as attributes on a higher-level react component.</p>
				</section>
			</Block>
		);
	}
};

class AppFooter extends React.Component {
  render() {
    return (
			<Block className="footer">
				<footer>
					<p>Github page powered by React and Blocks :)</p>
					<p>Built with &hearts; &#8226; MIT &copy; <a href="http://whoisandie.com">whoisandie</a></p>
				</footer>
			</Block>
		);
  }
}


class AppLayoutHorizontal extends React.Component {
	render() {
		let code = "<Block layout horizontal>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>";
		let codeRev = "<Block layout horizontal reverse>\n  <Block>Alpha</Block>\n  <Block>Beta</Block>\n  <Block>Gamma</Block>\n</Block>";
		return (
			<div className="horizontal-and-vertical-layout">
				<h4>Horizontal and Vertical Layout</h4>
				<p>When a container includes the layout attribute, it can become a flex container. You can specify horizontal or vertical to change the orientation</p>
				<pre>
					<code>{code}</code>
				</pre>

				<Block className="demo" layout horizontal>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<p>Layout direction can be mirrored with the reverse attribute.</p>

				<pre>
					<code>{codeRev}</code>
				</pre>

				<Block className="demo" layout horizontal reverse>
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>
			</div>
		);
	}
}

class AppLayoutFlexible extends React.Component {
	render() {
		let codeHor = "<Block layout horizontal>\n  <Block>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block>Gamma</Block>\n</Block>";
		let codeVer = "<Block layout horizontal style='height:250px'>\n  <Block>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block>Gamma</Block>\n</Block>";
		let styles = {
			vertical: {
				height: 250
			}
		};
		return (
			<div className="flexible-children">
				<h4>Flexible children</h4>
				<p>Children of an element using the layout styles can use flex style to control their own sizing. For example.</p>
				<pre>
					<code>{codeHor}</code>
				</pre>

				<Block className="demo" layout horizontal>
					<Block>Alpha</Block>
					<Block flex>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<p>The same is true for children of vertical elements.</p>
				<p><b>Note: </b>For vertical layouts, the container needs to have a height for the children to flex correctly.</p>

				<pre>
					<code>{codeVer}</code>
				</pre>
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
	render() {
		let codeStart = "<Block layout horizontal align=\"start\">\n  <Block>Start</Block>\n</Block>";
		let codeCenter = "<Block layout horizontal align=\"center\">\n  <Block>Centered</Block>\n</Block>";
		let codeEnd = "<Block layout horizontal align=\"end\">\n  <Block>End</Block>\n</Block>";
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

				<pre>
					<code>{codeStart}</code>
				</pre>
				<Block className="demo" layout horizontal align="start" style={styles.vertical}>
					<Block>Start</Block>
				</Block>


				<pre>
					<code>{codeCenter}</code>
				</pre>
				<Block className="demo" layout horizontal align="center" style={styles.vertical}>
					<Block>Centered</Block>
				</Block>

				<pre>
					<code>{codeEnd}</code>
				</pre>
				<Block className="demo" layout horizontal align="end" style={styles.vertical}>
					<Block>End</Block>
				</Block>
			</div>
		);
	}
}

class AppJustified extends React.Component {
	render() {
		let codeStart = "<Block layout horizontal justify=\"start\">\n  <Block>Start</Block>\n</Block>";
		let codeCenter = "<Block layout horizontal justify=\"center\">\n  <Block>Centered</Block>\n</Block>";
		let codeEnd = "<Block layout horizontal justify=\"end\">\n  <Block>End</Block>\n</Block>";
		let codeAround = "<Block layout horizontal justify=\"around\">\n  <Block>End</Block>\n</Block>";
		let codeBetween = "<Block layout horizontal justify=\"between\">\n  <Block>End</Block>\n</Block>";
		return (
			<div className="justification">
				<h4>Justification: Main-axis</h4>
				<p>Justification controls the content position in the main axis. Use the justify attribute and set it to start, center, end, between or around. By default justify is set to start.</p>

				<pre>
					<code>{codeStart}</code>
				</pre>
				<Block className="demo" layout horizontal justify="start">
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<pre>
					<code>{codeCenter}</code>
				</pre>
				<Block className="demo" layout horizontal justify="center">
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<pre>
					<code>{codeEnd}</code>
				</pre>
				<Block className="demo" layout horizontal justify="end">
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<pre>
					<code>{codeAround}</code>
				</pre>
				<Block className="demo" layout horizontal justify="around">
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>

				<pre>
					<code>{codeBetween}</code>
				</pre>
				<Block className="demo" layout horizontal justify="between">
					<Block>Alpha</Block>
					<Block>Beta</Block>
					<Block>Gamma</Block>
				</Block>
			</div>
		);
	}
}

class AppSelfAligned extends React.Component {
  render() {
		let code = "<Block layout horizontal>\n  <Block flex self=\"start\">Alpha</Block>\n  <Block flex self=\"center\">Beta</Block>\n  <Block flex self=\"end\">Gamma</Block>\n  <Block flex>Delta</Block>\n</Block>";
		let styles = {
			vertical: {
				height: 120
			}
		};
    return (
			<div className="self-alignment">
				<h4>Self Alignment</h4>
				<p>Alignment can also be set per-child (instead of using the layout containers rules). By default, self alignment is set to stretch.</p>

				<pre>
					<code>{code}</code>
				</pre>
				<Block className="demo" layout horizontal style={styles.vertical}>
					<Block flex self="start">Alpha</Block>
					<Block flex self="center">Beta</Block>
					<Block flex self="end">Gamma</Block>
					<Block flex>Delta</Block>
				</Block>

			</div>
		);
  }
}

class AppWrapped extends React.Component {
  render() {
		let code = "<Block layout horizontal wrap>\n  <Block flex>Alpha</Block>\n  <Block flex>Beta</Block>\n  <Block flex>Gamma</Block>\n  <Block flex>Delta</Block>\n</Block>";
		let styles = {
			wrapped: {
				width: 200,
				marginLeft: 'auto',
				marginRight: 'auto'
			}
		};
    return (
			<div className="wrapped">
				<h4>Wrapping</h4>
				<p>Wrapped layouts can be enabled with the wrap style.</p>


				<pre>
					<code>{code}</code>
				</pre>
				<Block className="demo" layout horizontal wrap style={styles.wrapped}>
					<Block flex>Alpha</Block>
					<Block flex>Beta</Block>
					<Block flex>Gamma</Block>
					<Block flex>Delta</Block>
				</Block>
			</div>
		);
  }
}

class App extends React.Component {
  render() {
    let styles = {
      app: {
        maxWidth: 600,
        margin: '0 auto'
      }
    };

    return (
      <Block className="app" style={styles.app}>
				<AppHeader />
				<AppLayoutHorizontal />
				<AppLayoutFlexible />
				<AppAligned />
				<AppJustified />
				<AppSelfAligned />
				<AppWrapped />
				<AppFooter />
      </Block>
    );
  }
};

const mount = document.getElementById('container');
React.render(<App />, mount);
