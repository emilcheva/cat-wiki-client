import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../containers/layout';
import QueryResult from '../components/query-result';
import BreedDetail from '../components/breed-detail';
import PropTypes from 'prop-types';

export const GET_BREED = gql`
  query getBreedsByName($breedName: String!) {
    getBreedsByName(breedName: $breedName) {
      id
      description
      name
      temperament
      strangerFriendly
      socialNeeds
      healthIssues
      intelligence
      grooming
      childFriendly
      affectionLevel
      adaptability
      lifeSpan
      origin
      breedImage {
        url
        id
      }
    }
  }
`;

const Breed = ({ breedName }) => {
  const { loading, error, data } = useQuery(GET_BREED, {
    variables: { breedName }
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.getBreedsByName?.map((breed) => (
          <BreedDetail key={breed.id} breed={breed} breedImage={breed.breedImage} />
        ))}
      </QueryResult>
    </Layout>
  );
};

Breed.propTypes = {
  breedName: PropTypes.string
};

export default Breed;
