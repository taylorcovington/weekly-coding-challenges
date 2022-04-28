// import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from ".";

describe('Challenge 4-28-22', () => {
  it('should render without crashing', () => {
    const { container } = render(<Rating />);
    expect(container).toBeInTheDocument();
  });
})
