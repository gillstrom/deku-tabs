/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Tabs from '../';

const items = [{
	content: <div>Content 1</div>,
	heading: 'Heading 1'
}, {
	content: <div>Content 2</div>,
	heading: 'Heading 2'
}, {
	content: <div>Content 3</div>,
	heading: 'Heading 3',
	active: true
}];

const app = tree(
	<Tabs class='TestClass' items={items}/>
);

render(app, document.body);
