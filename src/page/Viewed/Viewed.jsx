import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import useLocalStorage from '../../hooks/useLocalStorage';
import Pet from '../../components/Pet/Pet';

import { ViewedList, ViewedTitle, ViewedUp, NoViewed } from './Viewed.styled';

export default function Viewed() {
  const [viewed, setViewed] = useLocalStorage('Viewed', []);
  const [petsViewed, setPetsViewed] = useState([]);

  useEffect(() => {
    console.log('viewed useEffect');

    if (petsViewed) {
      setPetsViewed(prevPets =>
        prevPets.filter(pet => viewed.includes(pet.id))
      );
    }
    setPetsViewed(viewed);
  }, [petsViewed, viewed]);

  const removeViewed = useCallback(
    id => {
      console.log('removeViewed');

      // видаляємо картку тварини зі сторінки Viewed
      setPetsViewed(petsViewed.filter(pet => pet.id !== id));

      // видаляємо тварину з Viewed у LocalStorage
      setViewed(prevViewed => prevViewed.filter(viewe => viewe.id !== id));
      alert('Removed from Viewed!');
    },
    [petsViewed, setViewed]
  );

  return (
    <>
      <ViewedTitle>Your viewed pets</ViewedTitle>
      <ViewedList>
        {viewed.length === 0 ? (
          <NoViewed>
            You have not yet viewed information about any pets
          </NoViewed>
        ) : (
          petsViewed.map(pet => (
            <li key={pet.id}>
              <Pet pet={pet} onRemoveViewed={removeViewed} />
            </li>
          ))
        )}
      </ViewedList>
      {petsViewed.length > 1 && (
        <ViewedUp href="#Up">
          <FaArrowUp />
        </ViewedUp>
      )}
    </>
  );
}
