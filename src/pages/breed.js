import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import BreedDetail from "../components/breed-detail";

export const GET_BREED = gql`
  query getBreed($breedName: String!) {
    getBreedsByName (breedName: $breedName){
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
        <BreedDetail breed={data?.breed} />
      </QueryResult>
    </Layout>
  );
};

export default Breed;
