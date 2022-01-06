import React from "react";

/**
 * Breed Detail component renders the main content of a given breed and an image
 */

const BreedShortDetail = ({ breed }) => {
  return (
    <ul>
      <li>
        <img width="170" height="170" src={breed?.breedImage[0]?.url} />
        <h4>{breed?.name}</h4>
        <p>{breed?.description}</p>
      </li>
    </ul>
  );
};

export default BreedShortDetail;
