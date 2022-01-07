import React from "react";
import ImageWrapper from "./image-wrapper";

/**
 * Breed Short Detail component renders the name and an image of a given breed 
 */

const BreedShortDetail = ({ breed }) => {
  return (
    <ul>
      <li>
        <ImageWrapper width="170" height="170" src={breed?.breedImage[0]?.url} />
        <h4>{breed?.name}</h4>
        <p>{breed?.description}</p>
      </li>
    </ul>
  );
};

export default BreedShortDetail;
