import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import BreedShortDetail from "../components/breed-short-detail";

export const GET_TOP_BREEDS = gql`
  query getBreeds($limit: Int) {
    getBreeds(limit: $limit) {
      description
      name
      temperament
      stranger_friendly
      social_needs
      health_issues
      intelligence
      grooming
      child_friendly
      affection_level
      adaptability
      life_span
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
    variables: { limit: 10 },
  });
  return (
    <Layout>
      <>
      <h2>Top 10 most searched breeds</h2>
      <QueryResult error={error} loading={loading} data={data}>
        <ol>
          {data?.getBreeds?.map((breed) => (
            <li key={breed.id}>
              <BreedShortDetail key={breed.id} breed={breed} />
            </li>
          ))}
        </ol>
      </QueryResult>
      </>
    </Layout>
  );
};

export default TopBreeds;
