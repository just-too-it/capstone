import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Sanity check', () => {
  render(<MemoryRouter><div>Test</div></MemoryRouter>);
  expect(true).toBeTruthy();
});