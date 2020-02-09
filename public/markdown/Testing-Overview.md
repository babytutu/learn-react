# Testing Overview

## Recommended Tools

### Jest

- [Jest](https://jestjs.io/)
- [Expect](https://jestjs.io/docs/en/expect)
- [Testing React Apps](https://jestjs.io/docs/en/tutorial-react)

#### Example

```js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

function Hello(props) {
  if (props.name) {
    return <h1>Hello,{props.name}</h1>
  } else {
    return <h1>Hey,guest</h1>
  }
}

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it ('render with name or not', () => {
  act(() => {
    render(<Hello />, container)
  })
  expect(container.textContent).toBe('Hey,guest')

  act(() => {
    render(<Hello name="tutu" />, container)
  })
  expect(container.textContent).toBe('Hello,tutu')

  act(() => {
    render(<Hello name="et" />, container)
  })
  expect(container.textContent).toBe('Hello,et')
})
```

### React Testing Library

- [React Testing Library](https://testing-library.com/react)

#### API

- render
  render Result
  - ...queries [Queries](https://testing-library.com/docs/dom-testing-library/api-queries)
  - container
  - baseElement *default to document.body*
  - debug *shortcut for console.log*
  - rerender
  - unmount
  - asFragment *Returns a DocumentFragment of your rendered component*

- cleanup *done automatically*
- act [Test Utilities](https://reactjs.org/docs/test-utils.html#act)

Which query should I use?

- Queries Accessible to Everyone
  - getByLabelText *Only really good for form fields*
  - getByPlaceholderText
  - getByText *for non-form elements.*
  - getByDisplayValue *navigating a page with filled-in values*
- Semantic Queries
  - getByAltText *supports alt text*
  - getByTitle
  - getByRole
- Test IDs
  - getByTestId
- querySelector


#### Example

```js
import React from 'react'
import { render } from '@testing-library/react'

function Greeting () {
  return <h1 data-testid="title" data-id="title">Hello, World!</h1>
}

test('renders a message', () => {
  const { container, getByText, getByTestId } = render(<Greeting />)
  const title = container.querySelector('[data-id="title"]')
  expect(getByText('Hello, World!')).toBeInTheDocument()
  expect(getByTestId('title').innerHTML).toBe('Hello, World!')
  expect(title.innerHTML).toBe('Hello, World!')
})
```


```js
import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'

function CostInput() {
  const [state, setState] = useState('')

  const handleChange = ev => {
    ev.preventDefault()
    setState(ev.target.value)
  }

  return (
    <input
      value={state}
      aria-label="cost-input"
      onChange={handleChange}
    />
  )
}

test('the value is changed', () => {
  const { getByLabelText } = render(<CostInput />)
  const input = getByLabelText('cost-input')
  fireEvent.change(input, { target: { value: '123' } })
  expect(input.value).toBe('123')

  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('')
})
```
