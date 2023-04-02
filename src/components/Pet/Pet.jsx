import { PetContainer, PetImg, CatInfo, PetContent } from './Pet.styled';

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
    <PetContainer>
      <PetImg src={url} width="480" alt="dog" />
      <PetContent>
        <h2>Breed: {name}</h2>
        {bred_for && (
          <p>
            <b>Breed for:</b> {bred_for}
          </p>
        )}
        {breed_group && (
          <p>
            <b>Breed group:</b> {breed_group}
          </p>
        )}
        {life_span && (
          <p>
            <b>Life span: </b> {life_span}
          </p>
        )}
        {temperament && (
          <p>
            <b>Temperament:</b> {temperament}
          </p>
        )}
        {origin && (
          <p>
            <b>Origin:</b> {origin}
          </p>
        )}
        {height.imperial && height.metric && (
          <p>
            <b>Height:</b> {height.imperial} in., {height.metric} сm.
          </p>
        )}
        {weight.imperial && weight.metric && (
          <p>
            <b>Weight:</b> {weight.imperial} pound, {weight.metric} kg.
          </p>
        )}
        <a
          href={`https://en.wikipedia.org/wiki/${name.replace(
            /\(([^)]+)\)/,
            ''
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </PetContent>
    </PetContainer>
  );
};

export const Cat = ({ pet: { url, breeds } }) => {
  const {
    child_friendly,
    description,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    hypoallergenic,
    intelligence,
    life_span,
    name,
    origin,
    social_needs,
    stranger_friendly,
    vocalisation,
    temperament,
    weight,
    wikipedia_url,
    cfa_url,
  } = breeds[0];

  return (
    <PetContainer>
      <PetImg src={url} width="480" alt="cat" />
      <PetContent>
        <h2>Breed: {name}</h2>
        {life_span && (
          <p>
            <b>Life span: </b> {life_span}
          </p>
        )}
        {temperament && (
          <p>
            <b>Temperament:</b> {temperament}
          </p>
        )}
        {weight.imperial && weight.metric && (
          <p>
            <b>Weight:</b> {weight.imperial} pound, {weight.metric} kg.
          </p>
        )}
        {origin && (
          <p>
            <b>Origin:</b> {origin}
          </p>
        )}
        {description && (
          <p>
            <b>Description:</b> {description}
          </p>
        )}
        <CatInfo>
          <ul>
            <li>
              Child friendly: <b>{child_friendly}</b>
            </li>
            <li>
              Dog friendly: <b>{dog_friendly}</b>
            </li>
            <li>
              Stranger friendly: <b>{stranger_friendly}</b>
            </li>
            <li>
              Social needs: <b>{social_needs}</b>
            </li>
            <li>
              Intelligence: <b>{intelligence}</b>
            </li>
          </ul>
          <ul>
            <li>
              Energy level: <b>{energy_level}</b>
            </li>
            <li>
              Grooming: <b>{grooming}</b>
            </li>
            <li>
              Health issues: <b>{health_issues}</b>
            </li>
            <li>
              Hypoallergenic: <b>{hypoallergenic}</b>
            </li>
            <li>
              Vocalisation: <b>{vocalisation}</b>
            </li>
          </ul>
        </CatInfo>
        <a
          href={wikipedia_url ? wikipedia_url : cfa_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </PetContent>
    </PetContainer>
  );
};
