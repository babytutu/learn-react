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
