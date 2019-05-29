import React from 'react';
import { render } from 'react-testing-library';
import Hello from './Hello';
import { FetchMock } from '@react-mock/fetch';

describe('Hello', () => {
  it('Renders without error', () => {
    render(
      <FetchMock matcher="/api/hello" response={{ message: 'Node' }}>
        <Hello />
      </FetchMock>
    );
  });
});
