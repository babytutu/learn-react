# Create React App

[Get Started](https://create-react-app.dev/)

## Getting Started

### Getting Started

#### Quick Start

```bash
npx create-react-app my-app
cd my-app
npm start
```

#### Scripts

- npm start
- npm test
- npm run build

### Folder Structure

For the project to build, these files must exist with exact filenames:

- public/index.html is the page template;
- src/index.js is the JavaScript entry point.

You may create subdirectories inside src

### Supported Browsers and Features

#### Supported Browsers
By default, the generated project supports all modern browsers. Support for Internet Explorer 9, 10, and 11 requires polyfills. For a set of polyfills to support older browsers, use [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

react-app-polyfill

```bash
npm install react-app-polyfill
```

- Supporting Internet Explorer

Internet Explorer 9

```js
// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

// ...
```

- Polyfilling other language features

For IE9:

```js
// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// ...
```

## Development

### Using HTTPS in Development

```bash
HTTPS=true npm start
```


## Styles and Assets

### Adding a CSS Modules Stylesheet

> CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.
> CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash].

Button.module.css

```css
.error {
  background-color: red;
}
```

another-stylesheet.css

```css
.error {
  color: red;
}
```

Button.js

```js
import React from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

Result

```html
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz">Error Button</button>
```

### Using the Public Folder

Adding Assets Outside of the Module System

Inside index.html
```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

In JavaScript code, you can use process.env.PUBLIC_URL for similar purposes:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

## Building your App

### Installing a Dependency

React Router

```bash
npm install react-router-dom
```

### Importing a Component

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use export default Button and import Button from './Button'.

#### Absolute Imports

This can be done by configuring a jsconfig.json or tsconfig.json file in the root of your project

jsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

Now that you've configured your project to support absolute imports, if you want to import a module located at src/components/Button.js, you can import the module like so:

```js
import Button from 'components/Button';
```

[jsconfig.json reference](https://code.visualstudio.com/docs/languages/jsconfig)

### Using Global Variables

you can force the linter to ignore any line by adding // eslint-disable-line after it.

```js
const $ = window.$;
```
