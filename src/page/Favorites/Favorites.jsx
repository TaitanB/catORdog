import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import useLocalStorage from '../../hooks/useLocalStorage';
import Pet from '../../components/Pet/Pet';

import {
  FavoritesList,
  FavoritesTitle,
  FavoritesUp,
  NoFavorites,
} from './Favorites.styled';

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [petsFavorites, setPetsFavorites] = useState([]);

  useEffect(() => {
    console.log('favorites useEffect');

    if (petsFavorites) {
      setPetsFavorites(prevPets =>
        prevPets.filter(pet => favorites.includes(pet.id))
      );
    }
    setPetsFavorites(favorites);
  }, [favorites, petsFavorites]);

  const removeFavorites = useCallback(
    id => {
      // console.log(id);
      console.log('removeFavorites');

      // видаляємо картку тварини зі сторінки Favorites
      setPetsFavorites(petsFavorites.filter(pet => pet.id !== id));

      // видаляємо тварину з Favorites у LocalStorage
      setFavorites(prevFavorites =>
        prevFavorites.filter(favorite => favorite.id !== id)
      );
    },
    [petsFavorites, setFavorites]
  );

  return (
    <>
      <FavoritesTitle>Your favorite pets</FavoritesTitle>
      <FavoritesList>
        {favorites.length === 0 ? (
          <NoFavorites>You haven't added any favorite pets yet</NoFavorites>
        ) : (
          petsFavorites.map(pet => (
            <li key={pet.id}>
              <Pet pet={pet} onRemoveFavorites={removeFavorites} />
            </li>
          ))
        )}
      </FavoritesList>
      {petsFavorites.length > 1 && (
        <FavoritesUp href="#Up">
          <FaArrowUp />
        </FavoritesUp>
      )}
    </>
  );
}
