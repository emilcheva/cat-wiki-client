import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import HeroBanner from "../components/hero-banner";
import { colors } from "../styles";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import ImageWrapper from "../components/image-wrapper";
import FlexContainer from "../containers/flex";
import { Row, Container, Col } from "react-bootstrap";
import cat1 from "../assets/image 1.png";
import cat2 from "../assets/image 2.png";
import cat3 from "../assets/image 3.png";
import LinkArrow from "../components/link-arrow";

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
      <TopBreedsSection>
        <Container>
          <Row>
            <p>Most Searched Breeds</p>
            <FlexContainer justifyContent='space-between' alignItems='flex-end' className='my-4'>
              <h2>66+ Breeds For You to Discover</h2>
              <LinkArrow to="/top-breeds">See More</LinkArrow>
            </FlexContainer>
          </Row>
          <Row>
            <QueryResult error={error} loading={loading} data={data}>
              {data?.getBreeds?.map((breed) => (
                <Col key={breed.id}>
                  <ImageWrapper
                    src={breed.breedImage[0].url}
                    width="200"
                    height="200"
                    alt={breed.name}
                  />
                  <StyledLink to={`/breed/${breed.name}`}>
                    {breed.name}
                  </StyledLink>
                </Col>
              ))}
            </QueryResult>
          </Row>
        </Container>
      </TopBreedsSection>
      <WhyCatSection>
        <Container>
          <Row>
            <Col md="4">
              <h2>Why should you have a cat?</h2>
              <p>
                Having a cat around you can actually trigger the release of
                calming chemicals in your body which lower your stress and
                anxiety leves
              </p>
              <LinkArrow isInternalLink='false' to='https://animalkind.org/blog/top-5-reasons-cat/'>Read More</LinkArrow>
            </Col>
            <Col md="8">
              <Row xs="auto">
                <Col>
                  <FlexContainer direction="vertical" alignItems="flex-end">
                    <img src={cat2} width="270" alt="hugging cat"></img>
                    <img
                      className="mt-4"
                      src={cat1}
                      width="195"
                      alt="cat paw"
                    ></img>
                  </FlexContainer>
                </Col>
                <Col>
                  <img src={cat3} width="238" alt="cat in bag"></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </WhyCatSection>
    </Layout>
  );
};

export default Home;

const StyledLink = styled(Link)({
  display: "block",
  textAlign: "left",
  color: colors.accent,
  cursor: "pointer",
});

const TopBreedsSection = styled.section({
  backgroundColor: colors.grey,
  borderRadius: "0px 0px 50px 50px;",
  padding: "50px 100px 100px",
});

const WhyCatSection = styled.section({
  padding: "100px",
});
