import { IconContext } from 'react-icons';
import { FaRegEye } from 'react-icons/fa';

import {
  PetContainer,
  PetImg,
  CatInfoList,
  PetInfo,
  PetLink,
  PetName,
  IconLike,
  IconViewed,
  PetImgContainer,
  IconHeart,
} from './Pet.styled';

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

  console.log(`Фото dog => ${url}, масив характеристик => ${breeds[0]}`);

  return (
    <PetContainer>
      <PetImgContainer>
        <IconViewed>
          <IconContext.Provider value={{ color: 'rgb(15 57 112)' }}>
            <FaRegEye />
          </IconContext.Provider>
        </IconViewed>
        <IconLike>
          <IconHeart />
        </IconLike>
        <PetImg src={url} width="480" alt="dog" />
      </PetImgContainer>
      <div>
        <PetName>Breed: {name}</PetName>
        {bred_for && (
          <PetInfo>
            <b>Breed for:</b> {bred_for}
          </PetInfo>
        )}
        {breed_group && (
          <PetInfo>
            <b>Breed group:</b> {breed_group}
          </PetInfo>
        )}
        {life_span && (
          <PetInfo>
            <b>Life span: </b> {life_span}
          </PetInfo>
        )}
        {temperament && (
          <PetInfo>
            <b>Temperament:</b> {temperament}
          </PetInfo>
        )}
        {origin && (
          <PetInfo>
            <b>Origin:</b> {origin}
          </PetInfo>
        )}
        {height.imperial && height.metric && (
          <PetInfo>
            <b>Height:</b> {height.imperial} in., {height.metric} сm.
          </PetInfo>
        )}
        {weight.imperial && weight.metric && (
          <PetInfo>
            <b>Weight:</b> {weight.imperial} pound, {weight.metric} kg.
          </PetInfo>
        )}
        <PetLink
          href={`https://en.wikipedia.org/wiki/${name.replace(
            /\(([^)]+)\)/,
            ''
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </PetLink>
      </div>
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

  console.log(`Фото cat => ${url}, масив характеристик => ${breeds[0]}`);

  return (
    <PetContainer>
      <PetImgContainer>
        <IconViewed>
          <IconContext.Provider value={{ color: 'green' }}>
            <FaRegEye />
          </IconContext.Provider>
        </IconViewed>
        <IconLike>
          <IconHeart />
        </IconLike>
        <PetImg src={url} width="480" alt="cat" />
      </PetImgContainer>
      <div>
        <PetName>Breed: {name}</PetName>
        {life_span && (
          <PetInfo>
            <b>Life span: </b> {life_span}
          </PetInfo>
        )}
        {temperament && (
          <PetInfo>
            <b>Temperament:</b> {temperament}
          </PetInfo>
        )}
        {weight.imperial && weight.metric && (
          <PetInfo>
            <b>Weight:</b> {weight.imperial} pound, {weight.metric} kg.
          </PetInfo>
        )}
        {origin && (
          <PetInfo>
            <b>Origin:</b> {origin}
          </PetInfo>
        )}
        {description && (
          <PetInfo>
            <b>Description:</b> {description}
          </PetInfo>
        )}
        <CatInfoList>
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
            Vocalisation: <b>{vocalisation}</b>
          </li>
        </CatInfoList>
        <PetLink
          href={wikipedia_url ? wikipedia_url : cfa_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </PetLink>
      </div>
    </PetContainer>
  );
};
