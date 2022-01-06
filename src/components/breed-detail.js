import React from "react";
import FlexContainer from "../containers/flex";
import Score from "./score";
import ImageWrapper from "./image-wrapper";

/**
 * Breed Detail component renders the main content of a given breed and an image
 */

const BreedDetail = ({ breed }) => {
  const {
    description,
    name,
    temperament,
    stranger_friendly,
    social_needs,
    health_issues,
    intelligence,
    grooming,
    child_friendly,
    affection_level,
    adaptability,
    life_span,
    origin,
    breedImage,
  } = breed;

  return (
      <>
      <section className="">
        <div className="">
          <ImageWrapper width="370" height="370"
            src={breedImage[0].url}
            alt={name}
          />
        </div>
        <div className="">
          <h2>{name}</h2>
          <p>{description}</p>
          <FlexContainer>
            <span className="font-bold">Temperament : </span>
            <span>{temperament}</span>
          </FlexContainer>
          <FlexContainer>
            <span className="font-bold">Origin : </span>
            <span>{origin}</span>
          </FlexContainer>
          <FlexContainer>
            <span className="font-bold">Life Span : </span>
            <span>{life_span} years</span>
          </FlexContainer>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Adaptability : </span>
            <Score count={adaptability} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Affection Level : </span>
            <Score count={affection_level} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Child Friendly : </span>
            <Score count={child_friendly} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Grooming : </span>
            <Score count={grooming} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Intelligence : </span>
            <Score count={intelligence} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Health issues : </span>
            <Score count={health_issues} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Social Needs : </span>
            <Score count={social_needs} />
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-bold w-52">Stranger friendly : </span>
            <Score count={stranger_friendly} />
          </div>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-4xl font-semibold mb-8">Other photos</h2>
        <FlexContainer>
          {breedImage.map((image) => (
              <ImageWrapper
                width='275'
                height='275'
                src={image.url}
                alt={name}
              />
          ))}
        </FlexContainer>
      </section>
      </>
  );
};

export default BreedDetail;
