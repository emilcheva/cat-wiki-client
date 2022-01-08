import React from "react";
import { gql, useQuery } from "@apollo/client";
import HeroBanner from "../components/hero-banner";
import Layout from '../containers/layout';
import QueryResult  from "../components/query-result";
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
            <FlexContainer justifyContent='space-between' alignItems='flex-end' >
              <h2 className='mb-3 mb-md-0'>66+ Breeds For You to Discover</h2>
              <LinkArrow to="/top-breeds">See More</LinkArrow>
            </FlexContainer>
          </Row>
          <Row>
            <QueryResult error={error} loading={loading} data={data}>
              {data?.getBreeds?.map((breed) => (
                <Col key={breed.id} sm='6' lg='3' className='mt-5'>
                  <ImageWrapper
                    src={breed.breedImage[0].url}
                    width="220"
                    height="220"
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
          <Row className='align-items-center'>
            <Col lg="6">
              <h2>Why should you have a cat?</h2>
              <p>
                Having a cat around you can actually trigger the release of
                calming chemicals in your body which lower your stress and
                anxiety leves
              </p>
              <LinkArrow isInternalLink='false' to='https://animalkind.org/blog/top-5-reasons-cat/'>Read More</LinkArrow>
            </Col>
            <Col lg="6" className='mt-5 mt-lg-0'>
              <Row>
                <Col xs='6'>
                  <FlexContainer direction="vertical" alignItems="flex-end">
                    <img src={cat2} alt="hugging cat"></img>
                    <img
                      className="mt-4 ps-4 ps-md-5"
                      src={cat1}
                      alt="cat paw"
                    ></img>
                  </FlexContainer>
                </Col>
                <Col xs='6'>
                  <img src={cat3} alt="cat in bag"></img>
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
  marginTop: '20px'
});

const TopBreedsSection = styled.section({
  backgroundColor: colors.grey,
  borderRadius: "0px 0px 50px 50px;",
  padding: "50px 100px 100px",
});

const WhyCatSection = styled.section({
  padding: "100px",
});
