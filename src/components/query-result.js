import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';
import PropTypes from 'prop-types';
import { ApolloError } from '@apollo/client';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>No data to show...</p>;
  }
  if (data) {
    return children;
  }
};

QueryResult.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.instanceOf(ApolloError),
  data: PropTypes.any,
  children: PropTypes.any
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh'
});
