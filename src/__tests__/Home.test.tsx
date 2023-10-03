import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import About from '../app/about/page'

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<About />)
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      }).textContent,
    ).toBe('Hello World')
  })
})
