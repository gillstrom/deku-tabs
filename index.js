/** @jsx dom */
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

const afterMount = ({props}, el, setState) => {
	const {items} = props;

	items.forEach((el, i) => {
		if (el.active === true) {
			setState({activeTab: i});
		}
	});
};

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

export default {afterMount, initialState, propTypes, render};
