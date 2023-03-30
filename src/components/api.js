import axios from 'axios';

// const CatBaseURL = 'https://api.thecatapi.com/v1';
// const GogBaseURL = 'https://api.thedogapi.com/v1';
// const REACT_APP_CAT_API_KEY =
//   'live_cj3Q4r1ebHoU5vIIOpyqdBAsHtM0N7j0agcbkZD4ImH4pmj6mUApCGVeamjUBCCX';
// const REACT_APP_DOG_API_KEY =
//   'live_QsgJd4PwVkVpjnxs42bHwp3GehROpIRziWAVdO05QFFw4fZo6qX32x2r83jSUdrU';

export const fetchBreeds = async (baseUrl, apiKey) => {
  const response = await axios.get(`${baseUrl}/breeds?api_key=${apiKey}`);
  console.log(`Отримали список порід з ${baseUrl}`);
  return response.data;
};

export const fetchPetByBreed = async (baseUrl, apiKey, breedId) => {
  const response = await axios.get(
    `${baseUrl}/images/search?api_key=${apiKey}`,
    {
      params: { breed_ids: breedId },
    }
  );
  console.log(`${baseUrl}, ${apiKey}, ${breedId}`);
  console.log(`breedPet: ${breedId}`);
  return response.data[0];
};

// axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

// export const fetchBreeds = async () => {
//   const response = await axios.get('/breeds');
//   return response.data;
// };

// export const fetchPetByBreed = async breedId => {
//   const response = await axios.get('/images/search', {
//     params: { breed_id: breedId },
//   });
//   return response.data[0];
// };

export const onFetch = async () => {
  const API_KEY = '33528220-6f12bec756615243821cbd5de';

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=cat%20dog&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=200`
    );
    return response.data.hits;
  } catch (error) {
    console.log('Sorry, something went wrong...', error);
  }
};
