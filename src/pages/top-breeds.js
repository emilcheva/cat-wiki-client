import React from 'react';
import { gql, useQuery } from '@apollo/client';
import BreedShortDetail from '../components/breed-short-detail';
import styled from '@emotion/styled';
import Layout from '../containers/layout';
import QueryResult from '../components/query-result';

export const GET_TOP_BREEDS = gql`
  query getBreeds($limit: Int) {
    getBreeds(limit: $limit) {
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
      id
      breedImage {
        url
      }
    }
  }
`;

const TopBreeds = () => {
  const { loading, error, data } = useQuery(GET_TOP_BREEDS, {
    variables: { limit: 10 }
  });
  return (
    <Layout>
      <TopBreedsContainer>
        <h2>Top 10 most searched breeds</h2>
        <QueryResult error={error} loading={loading} data={data}>
          <ul className="mt-5">
            {data?.getBreeds?.map((breed) => (
              <li key={breed.id}>
                <BreedShortDetail
                  name={breed.name}
                  description={breed.description}
                  breedImage={breed.breedImage[0]}
                />
              </li>
            ))}
          </ul>
        </QueryResult>
      </TopBreedsContainer>
    </Layout>
  );
};

export default TopBreeds;

const TopBreedsContainer = styled.div({
  counterReset: 'my-counter'
});
