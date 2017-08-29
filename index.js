/** @jsx dom */
import deepEqual from 'deep-equal';
import dom from 'magic-virtual-element';
import objectAssign from 'object-assign';

const propTypes = {
	class: {
		type: 'string'
	},
	items: {
		type: 'array'
	},
	onClick: {
		type: 'function'
	}
};

const defaultProps = {
	items: []
};

const initialState = () => ({
	activeTab: 0
});

const onHeadingClick = (x, activeTab, i, setState, onClick) => () => {
	if (activeTab === i) {
		return;
	}

	setState({activeTab: i});

	if (onClick) {
		onClick(objectAssign(x, {i}));
	}
};

const getHeadings = ({items, onClick}, {activeTab}, setState) => items.map((x, i) => (
	<div
		key={i} // eslint-disable-line react/no-array-index-key
		class={['Tabs-heading', {'Tabs-heading--active': activeTab === i}]}
		onClick={onHeadingClick(x, activeTab, i, setState, onClick)}
	>
		{x.heading}
	</div>
));

const getTabs = ({items}, {activeTab}) => items.map(({content}, i) => (
	<div
		key={i} // eslint-disable-line react/no-array-index-key
		class={['Tab', {'Tab--active': activeTab === i}]}
		style={{display: activeTab === i ? 'block' : 'none'}}
	>
		{content}
	</div>
));

const setActive = (items, setState) => {
	for (const [i, x] of items.entries()) {
		if (x.active) {
			setState({activeTab: i});
		}
	}
};

const afterMount = ({props}, el, setState) => {
	setActive(props.items, setState);
};

const shouldUpdate = ({props, state}, nextProps, {activeTab}) => !deepEqual(props, nextProps) || state.activeTab !== activeTab;

const afterUpdate = ({props}, prevProps, prevState, setState) => {
	if (!deepEqual(props, prevProps)) {
		setActive(props.items, setState);
	}
};

const render = ({props, state}, setState) => (
	<div class={['Tabs', props.class]}>
		<div class='Tabs-headings'>
			{getHeadings(props, state, setState)}
		</div>
		<div class='Tabs-content'>
			{getTabs(props, state)}
		</div>
	</div>
);

export default {afterMount, afterUpdate, defaultProps, initialState, propTypes, render, shouldUpdate};
