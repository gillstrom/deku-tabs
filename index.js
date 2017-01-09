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

const initialState = () => {
	return {
		activeTab: 0
	};
};

const onHeadingClick = (x, activeTab, i, setState, onClick) => () => {
	if (activeTab === i) {
		return;
	}

	setState({activeTab: i});

	if (onClick) {
		onClick(objectAssign(x, {i}));
	}
};

const getHeadings = ({items, onClick}, {activeTab}, setState) => {
	return items.map((x, i) => (
		<div class={['Tabs-heading', {'Tabs-heading--active': activeTab === i}]} onClick={onHeadingClick(x, activeTab, i, setState, onClick)}>
			{x.heading}
		</div>
	));
};

const getTabs = ({items}, {activeTab}) => {
	return items.map(({content}, i) => (
		<div class={['Tab', {'Tab--active': activeTab === i}]} style={{display: activeTab === i ? 'block' : 'none'}}>
			{content}
		</div>
	));
};

const setActive = (items, setState) => items.forEach((el, i) => el.active === true && setState({activeTab: i}));

const afterMount = ({props}, el, setState) => setActive(props.items, setState);
const shouldUpdate = ({props, state}, nextProps, {activeTab}) => !deepEqual(props, nextProps) || state.activeTab !== activeTab;
const afterUpdate = ({props}, prevProps, prevState, setState) => !deepEqual(props, prevProps) && setActive(props.items, setState);

const render = ({props, state}, setState) => {
	return (
		<div class={['Tabs', props.class]}>
			<div class='Tabs-headings'>
				{getHeadings(props, state, setState)}
			</div>
			<div class='Tabs-content'>
				{getTabs(props, state)}
			</div>
		</div>
	);
};

export default {afterMount, afterUpdate, initialState, propTypes, render, shouldUpdate};
