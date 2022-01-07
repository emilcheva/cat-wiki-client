import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import BreedDetail from "../components/breed-detail";

export const GET_BREED = gql`
  query getBreed($breedName: String!) {
    getBreedsByName(breedName: $breedName) {
      id
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
      breedImage {
        url
        id
      }
    }
  }
`;

const Breed = ({ breedName }) => {
  const { loading, error, data } = useQuery(GET_BREED, {
    variables: { breedName },
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
      {data?.getBreedsByName?.map((breed) => (
           <BreedDetail key={breed.id} breed={breed} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Breed;
