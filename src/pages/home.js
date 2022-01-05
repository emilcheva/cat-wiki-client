import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { BreedDetail } from "../components";
import HeroBanner from "../components/hero-banner";

export const GET_BREEDS = gql`
  query getBreeds {
    getBreeds {
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

const Home = () => {
  const { loading, error, data } = useQuery(GET_BREEDS);
  return (
    <Layout>
      <HeroBanner />
        <QueryResult error={error} loading={loading} data={data}>
          {data?.getBreeds?.map((breed) => (
            <BreedDetail key={breed.id} breed={breed} />
          ))}
        </QueryResult>
        <p>Most Searched Breeds</p>
        <h2>66+ Breeds For You to Discover</h2>
        <a href="/top-breeds" >See More</a>
    </Layout>
  );
};

export default Home;
