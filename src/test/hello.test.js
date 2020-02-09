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