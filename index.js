/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	items: {
		type: 'array'
	}
};

function initialState() {
	return {
		activeTab: 0
	};
}

function afterMount({props}, el, setState) {
	const {items} = props;

	items.forEach((el, i) => {
		if (el.active === true) {
			setState({activeTab: i});
		}
	});
}

function render({props, state}, setState) {
	const {items} = props;
	const {activeTab} = state;

	function getHeadings() {
		return items.map(({heading}, i) => (
			<div class={['Tabs-heading', {'Tabs-heading--active': activeTab === i}]} onClick={() => setState({activeTab: i})}>
				{heading}
			</div>
		));
	}

	function getTabs() {
		return items.map(({content}, i) => (
			<div class={['Tab', {'Tab--active': activeTab === i}]}>
				{content}
			</div>
		));
	}

	return (
		<div class={['Tabs', props.class]}>
			<div class='Tabs-headings'>
				{getHeadings()}
			</div>
			<div class='Tabs-content'>
				{getTabs()}
			</div>
		</div>
	);
}

export default {afterMount, initialState, propTypes, render};
