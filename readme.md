# deku-tabs [![Build Status](https://travis-ci.org/gillstrom/deku-tabs.svg?branch=master)](https://travis-ci.org/gillstrom/deku-tabs)

> Simple tab component for [deku](https://github.com/dekujs/deku)


## Install

```
$ npm install deku-tabs
```


## Usage

```js
import Tabs from 'deku-tabs';

const items = [{
	content: <div>Content 1</div>,
	heading: 'Heading 1'
}, {
	active: true,
	content: <div>Content 2</div>,
	heading: 'Heading 2'
}, {
	content: <div>Content 3</div>,
	heading: 'Heading 3'
}];

const render = () => (
	<Tabs items={items}/>
);

export default {render};
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
