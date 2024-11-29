import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
import React from 'react';

test('render hello world', () => {
  const app = render(<App />);
  const helloWorld = app.container.querySelector('.hello-world');

  expect(helloWorld).toHaveTextContent('Hello, World!');
});
