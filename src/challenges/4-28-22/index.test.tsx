// import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Rating from "./RatingCard";

describe('Rating Card', () => {
  it('should render without crashing', () => {
    const { container } = render(<Rating />);
    expect(container).toBeInTheDocument();
  });

  it('should render the correct text', () => {
    render(<Rating />);
    expect(screen.getByText('How did we do?')).toBeInTheDocument();
  })
  
  it('should allow user to click a rating and submit', () => {
    render(<Rating />);
    const ratingBtn = screen.getByTestId('rating-btn-1');
    const submitBtn = screen.getByTestId('submit-btn');
    userEvent.click(ratingBtn);
    userEvent.click(submitBtn);
    expect(screen.getByText('Thank you')).toBeInTheDocument();
    expect(screen.queryByTestId('rating-btn-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('submit-btn')).not.toBeInTheDocument();
  })
})
