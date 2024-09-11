import { render } from '@testing-library/react';
import { act } from 'react';  // New import
import App from './App';

test('renders component correctly', () => {
  act(() => {
    render(<App />);
  });
});
