import { render } from '@testing-library/react';

import QeetrixIconsReact from './icons-react';

describe('QeetrixIconsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QeetrixIconsReact />);
    expect(baseElement).toBeTruthy();
  });
});
