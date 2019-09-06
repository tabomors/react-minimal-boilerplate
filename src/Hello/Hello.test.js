import React from 'react';
import { render } from '@testing-library/react';
import Hello from './Hello';
import { FetchMock } from '@react-mock/fetch';

describe('Hello', () => {
  it('Renders without error', () => {
    render(
      <FetchMock matcher="/hello" response={{ message: 'Node' }}>
        <Hello />
      </FetchMock>
    );
  });
});
