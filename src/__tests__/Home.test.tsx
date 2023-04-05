import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from '../app/about/page';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<About />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
