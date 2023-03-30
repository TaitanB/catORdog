export const Dog = ({ pet: { url, breeds } }) => {
  const {
    bred_for,
    breed_group,
    height,
    life_span,
    origin,
    name,
    temperament,
    weight,
  } = breeds[0];

  console.log(breeds[0].height);

  return (
    <div>
      <img src={url} width="480" alt="dog" />
      <div>
        <b>Breed: {name}</b>
        <p>Breed for: {bred_for}</p>
        <p>Breed group: {breed_group}</p>
        <p>Life span: {life_span}</p>
        <p>Temperament: {temperament}</p>
        <p>Origin: {origin}</p>
        <p>
          Height: {height.imperial} in., {height.metric} m.
        </p>
        <p>
          Weight: {weight.imperial} pound, {weight.metric} kg.
        </p>
      </div>
    </div>
  );
};

export const Cat = ({ pet: { url, breeds } }) => {
  const {
    cfa_url,
    child_friendly,
    description,
    dog_friendly,
    energy_level,
    grooming,
    hairless,
    health_issues,
    hypoallergenic,
    indoor,
    intelligence,
    life_span,
    name,
    natural,
    origin,
    rare,
    rex,
    short_legs,
    social_needs,
    stranger_friendly,
    vcahospitals_url,
    vetstreet_url,
    vocalisation,
    temperament,
    weight,
    wikipedia_url,
  } = breeds[0];

  return (
    <div>
      <img src={url} width="480" alt="cat" />
      <div>
        <b>Breed: {name}</b>
        <p>Life span: {life_span}</p>
        <p>Temperament: {temperament}</p>
        <p>
          Weight: {weight.imperial} pound, {weight.metric} kg.
        </p>
        <p>{cfa_url}</p>
        <p>{child_friendly}</p>
        <p>{description}</p>
        <p>{dog_friendly}</p>
        <p>{energy_level}</p>
        <p>{grooming}</p>
        <p>{hairless}</p>
        <p>{health_issues}</p>
        <p>{hypoallergenic}</p>
        <p>{indoor}</p>
        <p>{intelligence}</p>
        <p>{natural}</p>
        <p>{origin}</p>
        <p>{rare}</p>
        <p>{rex}</p>
        <p>{short_legs}</p>
        <p>{social_needs}</p>
        <p>{stranger_friendly}</p>
        <p>{vcahospitals_url}</p>
        <p>{vetstreet_url}</p>
        <p>{vocalisation}</p>
        <p>{wikipedia_url}</p>
      </div>
    </div>
  );
};
