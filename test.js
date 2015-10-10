import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import Tabs from './';

const items = [{
	content: 'Content 1',
	heading: 'Heading 1'
}, {
	content: 'Content 2',
	heading: 'Heading 2'
}, {
	content: 'Content 3',
	heading: 'Heading 3'
}];

test(t => {
	const mock = componentMock(Tabs);
	const el = mock.render({props: {
		class: 'CustomTabs',
		items
	}});

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Tabs');
	assertElement.hasClass(el, 'CustomTabs');

	assertElement.hasChild(el, 0, child => {
		assertElement.isNode(child, 'div');
		assertElement.hasClass(child, 'Tabs-headings');
		assertElement.hasChildren(el);
	});

	assertElement.hasChild(el, 1, child => {
		assertElement.isNode(child, 'div');
		assertElement.hasClass(child, 'Tabs-content');
		assertElement.hasChildren(el);
	});

	t.end();
});
