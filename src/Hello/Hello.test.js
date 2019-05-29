import React from 'react';
import { render } from 'react-testing-library';
import Hello from './Hello';

describe('Hello', () => {
  it('Renders without error', () => {
    render(<Hello />);
  });
});
