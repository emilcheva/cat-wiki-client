import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import QueryResult from '../query-result';
import { ApolloError } from '@apollo/client';

describe('Query Result', () => {
  afterEach(cleanup);

  it('renders loading state', () => {
    render(<QueryResult loading={true} />);
    expect(screen.getByTestId(/spinner/i)).toBeInTheDocument();
  });

  it('renders No Data message', () => {
    render(<QueryResult loading={false} />);
    expect(screen.getByText(/no data to show/i)).toBeInTheDocument();
  });

  it('renders Error', () => {
    render(<QueryResult error={new ApolloError('something erroneous happened')} />);
    expect(screen.getByText((content) => content.startsWith('ERROR'))).toBeInTheDocument();
  });
});
