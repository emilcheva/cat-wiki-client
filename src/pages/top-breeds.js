import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import BreedDetail from "../components/breed-detail";

export const GET_TOP_BREEDS = gql`
  query getBreeds($limit: Int) {
    getBreeds (limit: $limit){
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

const TopBreeds = () => {
  const { loading, error, data } = useQuery(GET_TOP_BREEDS, {
    variables: { limit : 10 },
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.getBreeds?.map((breed) => (
            <BreedDetail key={breed.id} breed={breed} />
          ))}
      </QueryResult>
    </Layout>
  );
};

export default TopBreeds;
