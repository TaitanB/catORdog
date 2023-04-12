// import React, { useEffect } from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
// import Pet from '../../components/Pet/Pet';

// export default function Favorites() {
//   const [Favorites, setFavorites] = useLocalStorage('Favorites', []);
//   console.log(Favorites);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('Favorites')) || [];
//     setFavorites(storedFavorites);
//   }, [setFavorites]);

//   const handleDelete = id => {
//     const updatedFavorites = Favorites.filter(favorite => favorite.id !== id);
//     localStorage.setItem('Favorites', JSON.stringify(updatedFavorites));
//     setFavorites(updatedFavorites);
//   };

//   return (
//     <div>
//       <h1>Your favorite pets</h1>
//       {Favorites.map(favorite => (
//         <ul key={favorite.id}>
//           <li>
//             {<Pet pet={favorite} />}
//             <button onClick={() => handleDelete(favorite.id)}>Remove</button>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
// import Pet from '../../components/Pet/Pet';

// export default function Favorites() {
//   const [pets, setPets] = useState([]);
//   const [favorites, setFavorites] = useLocalStorage('Favorites', []);
//   console.log(favorites);

//   setPets(() => {
//     console.log('Записуємо петів, що є у favorites, в pets');
//   });

//   useEffect(() => {
//     console.log('Favorites useEffect');
//     console.log(
//       'Перебираємо pets і порівнюємо з favorites по id, повертаємо новий мвсив pets, лише з тими петами, які є у favorites'
//     );
//   }, []);

//   const removePet = () => {
//     console.log('removePet потрібна чи ні?');
//   };

//   return (
//     <div>
//       <h1>Your favorite pets</h1>
//       {pets.map(pet => (
//         <ul key={pet.id}>
//           <li>
//             <Pet pet={pet} onRemovePet={removePet} />
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Pet from '../../components/Pet/Pet';
import { FaArrowUp } from 'react-icons/fa';

import { FavoritesList, FavoritesTitle, FavoritesUp } from './Favorites.styled';

export default function Favorites() {
  const [favorites] = useLocalStorage('Favorites', []);
  const [allPets, setAllPets] = useState([]);
  // const [filteredPets, setFilteredPets] = useState([]);

  // const [id] = allPets.map(pet => pet.id);
  // console.log(id);
  // console.log(allPets);

  // useEffect(() => {
  //   console.log('Favorites useEffect 1');
  //   // перевіряємо, чи міститься pets у локальному сховищі
  //   // якщо так, то встановлюємо його як стан для allPets
  //   if (allPets.length === 0) {
  //     alert('Тут нічого немає :( allPets');
  //   }
  // }, [allPets.length]);

  if (favorites.length === 0) {
    alert('Тут нічого немає :(');
  } else if (allPets.length === 0) {
    setAllPets(favorites);
  }

  useEffect(() => {
    console.log('favorites useEffect');
    // Створюємо новий масив тварин, які містяться в favorites
    // const filteredPets = allPets.filter(pet => favorites.includes(pet.id));
    setAllPets(prevPets => prevPets.filter(pet => favorites.includes(pet.id)));
  }, [favorites]);

  // console.log(allPets);

  // const removePet = useCallback(() => {
  //   // console.log(id);
  //   // видаляємо тварину зі списку улюблених
  //   console.log('removePet');
  //   if (allPets.length !== 0) {
  //     const updatedFavorites = allPets.filter(pet => pet.id !== id);
  //     console.log(id);
  //     setAllPets(updatedFavorites);
  //     console.log(updatedFavorites);
  //   }
  // }, []);

  // removePet();

  // useEffect(() => {
  //   removePet();
  //   console.log();
  // }, [removePet]);

  return (
    <>
      <FavoritesTitle>Your favorite pets</FavoritesTitle>
      <FavoritesList>
        {allPets.map(pet => (
          <li key={pet.id}>
            <Pet
              pet={pet} // onRemovePet={removePet}
            />
          </li>
        ))}
      </FavoritesList>
      {allPets.length > 1 && (
        <FavoritesUp href="#Up">
          <FaArrowUp />
        </FavoritesUp>
      )}
    </>
  );
}
