/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	activeTab: {
		type: 'number'
	},
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
	if (typeof props.activeTab === 'number') {
		setState({activeTab: props.activeTab});
	}
}

function render({props, state}, setState) {
	const {items} = props;
	const {activeTab} = state;

	function getHeadings() {
		return items.map((el, i) => {
			return (
				<div class={['Tabs-heading', {'is-active': activeTab === i}]} onClick={() => setState({activeTab: i})}>
					{el.heading}
				</div>
			);
		});
	}

	return (
		<div class={['Tabs', props.class]}>
			<div class='Tabs-headings'>
				{getHeadings()}
			</div>
			<div class='Tabs-content'>
				{items[activeTab].content}
			</div>
		</div>
	);
}

export default {afterMount, initialState, propTypes, render};
