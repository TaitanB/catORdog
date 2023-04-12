import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

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

export default function Pet({ petType, pet: { url, breeds } }) {
  const {
    bred_for,
    breed_group,
    height,
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
    id,
  } = breeds[0];

  // стиль для іконки, коли тварина знаходиться у списку улюблених
  const heartStyleFilled = {
    fill: 'red',
  };

  // стиль для іконки, коли тварина не знаходиться у списку улюблених
  const heartStyleEmpty = {
    // fill: 'rgb(15 57 112)',
    fill: 'rgb(255, 215, 0)',
  };

  // console.log(`Фото pet => ${url}, масив характеристик => ${breeds[0]}`);
  const [Viewed, setViewed] = useLocalStorage('Viewed', []);
  const [Favorites, setFavorites] = useLocalStorage('Favorites', []);

  const isFavorite = Favorites.find(favorite => favorite.id === id);
  const isViewed = Viewed.find(viewe => viewe.id === id);

  const toggleFavorite = () => {
    // перевірка, чи обрана тварина вже є в списку обраних
    const favoriteIndex = Favorites.findIndex(favorite => favorite.id === id);
    console.log(favoriteIndex);

    if (favoriteIndex === -1) {
      // якщо тварина ще не обрана, то додаємо її до списку
      const newFavorite = { id, url, breeds };
      setFavorites(prevFavorites => {
        console.log(`setFavorites`);
        console.log(prevFavorites);
        return [newFavorite, ...prevFavorites];
      });
      alert('Added to Favorites!');
    } else {
      // якщо тварина вже обрана, то видаляємо її зі списку
      setFavorites(prevFavorites =>
        prevFavorites.filter(favorite => favorite.id !== id)
      );
      alert('Removed from Favorites!');
    }
  };

  const onViewed = () => {
    // перевірка, чи обрана тварина вже є в списку
    const ViewedIndex = Viewed.findIndex(viewe => viewe.id === id);
    console.log(ViewedIndex);

    if (ViewedIndex === -1) {
      // якщо тварина ще не обрана, то додаємо її до списку
      const newViewed = { id, url, breeds };
      setViewed(prevViewed => {
        console.log(`setViewed`);
        console.log(prevViewed);
        return [newViewed, ...prevViewed];
      });
      alert('Added to Viewed!');
    }
  };

  const offViewed = () => {
    setViewed(prevViewed => prevViewed.filter(viewe => viewe.id !== id));
    alert('Removed from Favorites!');
  };

  return (
    <PetContainer>
      <PetImgContainer>
        {isViewed && (
          <IconViewed onClick={offViewed}>
            <IconContext.Provider value={{ color: 'rgb(255 215 0)' }}>
              <FaRegEye />
            </IconContext.Provider>
          </IconViewed>
        )}

        <IconLike onClick={toggleFavorite}>
          <IconHeart style={isFavorite ? heartStyleFilled : heartStyleEmpty} />
        </IconLike>
        <PetImg src={url} sizes="320px" alt="pet" />
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
        {height?.imperial && height?.metric && (
          <PetInfo>
            <b>Height:</b> {height.imperial} in., {height.metric} сm.
          </PetInfo>
        )}
        {weight?.imperial && weight?.metric && (
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
          {child_friendly && (
            <li>
              Child friendly: <b>{child_friendly}</b>
            </li>
          )}
          {dog_friendly && (
            <li>
              Dog friendly: <b>{dog_friendly}</b>
            </li>
          )}
          {stranger_friendly && (
            <li>
              Stranger friendly: <b>{stranger_friendly}</b>
            </li>
          )}
          {social_needs && (
            <li>
              Social needs: <b>{social_needs}</b>
            </li>
          )}
          {intelligence && (
            <li>
              Intelligence: <b>{intelligence}</b>
            </li>
          )}
          {energy_level && (
            <li>
              Energy level: <b>{energy_level}</b>
            </li>
          )}
          {grooming && (
            <li>
              Grooming: <b>{grooming}</b>
            </li>
          )}
          {health_issues && (
            <li>
              Health issues: <b>{health_issues}</b>
            </li>
          )}
          {vocalisation && (
            <li>
              Vocalisation: <b>{vocalisation}</b>
            </li>
          )}
        </CatInfoList>
        <PetLink
          href={
            petType === 'cat'
              ? wikipedia_url
                ? wikipedia_url
                : cfa_url
              : `https://en.wikipedia.org/wiki/${name.replace(
                  /\(([^)]+)\)/,
                  ''
                )}`
          }
          target="_blank"
          rel="noopener noreferrer"
          onClick={onViewed}
        >
          Read more...
        </PetLink>
      </div>
    </PetContainer>
  );
}
