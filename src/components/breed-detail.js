import React from 'react';

/**
 * Breed Detail component renders the main content of a given breed
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
    id
  } = breed;

  return (
    <ul>
      <li>
       <p>{description ? description : 'sorry'}</p>
      </li>
    </ul>
  );
};

export default BreedDetail;
