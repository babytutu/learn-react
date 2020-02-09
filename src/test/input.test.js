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
