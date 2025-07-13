import { render } from '@testing-library/react';

import QeetrixComponentsReact from './components-react';

describe('QeetrixComponentsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QeetrixComponentsReact />);
    expect(baseElement).toBeTruthy();
  });
});
