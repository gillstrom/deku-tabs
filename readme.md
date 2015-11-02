# deku-tabs [![Build Status](https://travis-ci.org/gillstrom/deku-tabs.svg?branch=master)](https://travis-ci.org/gillstrom/deku-tabs)

> Simple tab component for deku


## Install

```
$ npm install --save deku-tabs
```


## Usage

```js
import Tabs from 'deku-tabs';

export function render() {
	const items = [{
		content: <div>Content 1</div>,
		heading: 'Heading 1'
	}, {
		content: <div>Content 2</div>,
		heading: 'Heading 2',
		active: true
	}, {
		content: <div>Content 3</div>,
		heading: 'Heading 3'
	}];

	return (
		<Tabs items={items}/>
	);
}
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
