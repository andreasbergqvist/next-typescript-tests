import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('index page', () => {
  test('renders title correct', () => {
    const { getByText } = render(<Index />);
    getByText('Welcome');
  });
});
