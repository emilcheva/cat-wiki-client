import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import HeroBanner from "../components/hero-banner";
import { colors } from "../styles";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

export const GET_BREEDS = gql`
  query getBreeds {
    getBreeds(limit: 4) {
      name
      id
      breedImage {
        url
      }
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
          <div key={breed.id}>
            <img src={breed.breedImage[0].url} width="200" height="200" />
            <StyledLink to={`/breed/${breed.name}`}>{breed.name}</StyledLink>
          </div>
        ))}
      </QueryResult>
      <p>Most Searched Breeds</p>
      <h2>66+ Breeds For You to Discover</h2>
      <a href="/top-breeds">See More</a>
    </Layout>
  );
};

export default Home;

const StyledLink = styled(Link)({
  color: colors.accent,
  cursor: "pointer",
});
