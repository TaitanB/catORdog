import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import useLocalStorage from '../../hooks/useLocalStorage';
import Pet from '../../components/Pet/Pet';

import { ViewedList, ViewedTitle, ViewedUp } from './Viewed.styled';

export default function Viewed() {
  const [viewed] = useLocalStorage('Viewed', []);
  const [viewedPets, setViewedPets] = useState([]);

  if (viewed.length === 0) {
    alert('Тут нічого немає :(');
  } else if (viewedPets.length === 0) {
    setViewedPets(viewed);
  }

  useEffect(() => {
    console.log('viewed useEffect');
    setViewedPets(prevPets => prevPets.filter(pet => viewed.includes(pet.id)));
  }, [viewed]);

  return (
    <>
      <ViewedTitle>Your viewed pets</ViewedTitle>
      <ViewedList>
        {viewedPets.map(pet => (
          <li key={pet.id}>
            <Pet pet={pet} />
          </li>
        ))}
      </ViewedList>
      {viewedPets.length > 1 && (
        <ViewedUp href="#Up">
          <FaArrowUp />
        </ViewedUp>
      )}
    </>
  );
}
