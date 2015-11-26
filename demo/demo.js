import './demo.less';

import React from 'react';
import Block from 'react-blocks';
import styles from './styles';

const AppHeader = () => {
	let { header } = styles;
	return (
		<Block style={header.block} el="header">
			<h1 style={header.h1}>
				React Blocks<br/>
				<Block style={header.small} el="small">
					Just the layout, no more, no less.
				</Block>
			</h1>

			<section>
				<p>React blocks uses a <i>declarative approach</i> to build complex layouts on top of CSS Flexbox. Flexbox properties are exposed as attributes on a higher-level react component. Supports media-queries via predefined <i>mobile-first</i> queries. Further custom media queries can be specified in a styles object. </p>
				<p>Please note, it does <b>NOT</b> handle mising browser features. Please use <a href="http://modernizr.com/">Modernizr</a> with Polyfills to achieve that.</p>
			</section>
			<p><a href="https://github.com/whoisandie/react-blocks">View on Github</a></p>
		</Block>
	);
};

const AppFooter = () => {
	let { footer } = styles;
  return (
		<Block style={footer.block} el="footer" layout>
			<Block style={footer.p} el="p" flex>
				Github page built using React and Blocks :)
			</Block>
			<Block style={footer.p} el="p" flex>
				MIT &copy; <a href="http://whoisandie.com">whoisandie</a>
			</Block>
		</Block>
	);
}

const AppLayout = () => {
	let { wrap } = styles;
	return (
		<div className="horizontal-and-vertical-layout">
			<h4>Horizontal and Vertical Layout</h4>
			<p>When a block component includes the layout attribute, it can become a flex container. You can specify horizontal or vertical to change the orientation</p>
			<Block className="demo" layout horizontal>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
				<Block>Delta</Block>
			</Block>

			<p>Layout direction can be mirrored with the reverse attribute.</p>
			<Block className="demo" layout horizontal reverse>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
				<Block>Delta</Block>
			</Block>

			<p>By default, every block container has flexWrap property set to wrap.</p>
			<p>Further the styles object would look as shown below.</p>
			<Block className="demo" style={wrap.block} layout>
				<Block flex>Alpha</Block>
				<Block flex>Beta</Block>
				<Block flex>Gamma</Block>
				<Block flex>Delta</Block>
			</Block>
		</div>
	);
}

const AppFlexible = () => {
	let { flexible } = styles;
	return (
		<div className="flexible-children">
			<h4>Flexible children</h4>
			<p>Children of an element using the layout styles can use flex style to control their own sizing. For example.</p>
			<Block className="demo" layout horizontal>
				<Block>Alpha</Block>
				<Block flex>Beta</Block>
				<Block>Gamma</Block>
			</Block>

			<p>The same is true for children of vertical elements.</p>
			<p><b>Note: </b>For vertical layouts, the container needs to have a height for the children to flex correctly.</p>
			<Block className="demo" style={flexible.block} layout vertical>
				<Block>Alpha</Block>
				<Block flex>Beta</Block>
				<Block>Gamma</Block>
			</Block>
		</div>
	);
};

const AppAligned = () => {
	let { aligned } = styles;
	return (
		<div className="alignment">
			<h4>Alignment: Cross-axis</h4>
			<p>By default, children stretch to fit the cross-axis (e.g. vertical stretching in a horizontal layout).</p>
			<p>Children can be aligned across the cross-axis by adding align attribute and setting it to start, center or end.</p>
			<Block className="demo" layout horizontal start style={aligned.block}>
				<Block>Start</Block>
			</Block>

			<Block className="demo" layout horizontal center style={aligned.block}>
				<Block>Centered</Block>
			</Block>

			<Block className="demo" layout horizontal end style={aligned.block}>
				<Block>End</Block>
			</Block>
		</div>
	);
};

const AppJustified = () => {
	return (
		<div className="justification">
			<h4>Justification: Main-axis</h4>
			<p>Justification controls the content position in the main axis. Use the justify attribute and set it to start, center, end, between or around. By default justify is set to start.</p>
			<Block className="demo" layout horizontal justifyStart>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
			</Block>

			<Block className="demo" layout horizontal justifyCenter>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
			</Block>

			<Block className="demo" layout horizontal justifyEnd>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
			</Block>

			<Block className="demo" layout horizontal justifyAround>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
			</Block>

			<Block className="demo" layout horizontal justifyBetween>
				<Block>Alpha</Block>
				<Block>Beta</Block>
				<Block>Gamma</Block>
			</Block>
		</div>
	);
};

const AppCentered = () => {
	let { centered } = styles;
  return (
		<div className="centered">
			<h4>Centered (Cross-axis & Main-axis)</h4>
			<p>Further more, an item in a flex-container can be aligned and justified using the centered attribute.</p>

			<Block className="demo" style={centered.block} layout horizontal centered>
				<Block>Centered</Block>
			</Block>
		</div>
	);
};

const AppSelfAligned = () => {
	let { aligned } = styles;
  return (
		<div className="self-alignment">
			<h4>Self Alignment</h4>
			<p>Alignment can also be set per-child (instead of using the layout containers rules). By default, self alignment is set to stretch.</p>

			<Block className="demo" style={aligned.block} layout horizontal>
				<Block flex selfStart>Alpha</Block>
				<Block flex selfCenter>Beta</Block>
				<Block flex selfEnd>Gamma</Block>
				<Block flex>Delta</Block>
			</Block>
		</div>
	);
};

const AppNested = () => {
	let { nested } = styles;
	return (
		<div className="nested">
			<h4>Nested Blocks (example of a complex layout)</h4>
			<p>
				Blocks can further be nested. Below shown is an example of a complex layout built using blocks. Check out the source code <a target="_blank" href="https://github.com/whoisandie/react-blocks/blob/master/demo/demo.js">here</a>.
			</p>
			<Block className="demo" layout vertical wrap>
				<Block style={nested.transparent} layout>
					<Block style={nested.common}>Brand</Block>
					<Block style={[nested.common, nested.search]}>Searchbar</Block>
					<Block style={nested.transparent} el="nav" layout flex justifyEnd>
						<Block style={nested.common} layout>Navigation</Block>
					</Block>
				</Block>
				<Block style={nested.transparent} layout flex>
					<Block style={nested.sidebar} layout vertical>
						<Block style={nested.common} flex>Categories</Block>
						<Block style={nested.common}>Settings</Block>
					</Block>
					<Block style={nested.transparent} layout vertical flex>
						<Block style={nested.common}>Dashboard Graph</Block>
						<Block style={[nested.transparent, nested.widget]} layout>
							<Block style={nested.common} flex>Widget</Block>
							<Block style={nested.common} flex>Widget</Block>
							<Block style={nested.common} flex>Widget</Block>
						</Block>
						<Block style={nested.common} flex>Dashboard Content</Block>
					</Block>
				</Block>
				<Block style={nested.common}>Footer</Block>
			</Block>
		</div>
	);
};

const App = () => {
  let { app } = styles;
  return (
    <Block style={app.block}>
			<AppHeader />
			<AppLayout />
			<AppFlexible />
			<AppAligned />
			<AppJustified />
			<AppCentered />
			<AppSelfAligned />
			<AppNested />
			<AppFooter />
    </Block>
  );
};

export default App;
