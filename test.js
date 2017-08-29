import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import Tabs from '.';

const mock = componentMock(Tabs);

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

test('has Tabs class', () => {
	const m = mock.render();
	assertElement.hasClass(m, 'Tabs');
});

test('has class prop', () => {
	const m = mock.render({props: {class: 'Foo'}});
	assertElement.hasClass(m, 'Foo');
});

test('does not render any tabs or headings when items is empty', () => {
	const m = mock.render();

	assertElement.hasChildren(m, x => {
		assertElement.notHasChildren(x);
	});
});

test('render headings', () => {
	const m = mock.render({props: items});

	assertElement.hasChild(m, 0, x => {
		assertElement.hasChildren(x, y => {
			assertElement.hasClass(y, 'Tabs-heading');
			assertElement.hasChildren(y);
		});
	});
});

test('render tabs', () => {
	const m = mock.render({props: items});

	assertElement.hasChild(m, 1, x => {
		assertElement.hasChildren(x, y => {
			assertElement.hasClass(y, 'Tab');
			assertElement.hasChildren(y);
		});
	});
});
