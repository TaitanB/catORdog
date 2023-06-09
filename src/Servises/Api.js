import axios from 'axios';

export const onFetchBgImg = async () => {
  const API_KEY = '33528220-6f12bec756615243821cbd5de';

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=cat%20dog&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=200`
    );
    return response.data.hits;
  } catch (error) {
    console.error(`ERROR => ${error}`);

    alert('Sorry, we were not able to download the background image :(');
  }
};

export const fetchBreeds = async (baseUrl, apiKey) => {
  try {
    const response = await axios.get(`${baseUrl}/breeds?api_key=${apiKey}`);

    // console.log(`Отримали список порід з => ${baseUrl}`);

    return response.data;
  } catch (error) {
    console.error(`ERROR => ${error}`);

    alert(
      "We're sorry, we couldn't load the list of animal breeds. Please reload the page or try again later."
    );
  }
};

export const fetchPetByBreed = async (baseUrl, apiKey, breedId) => {
  try {
    const response = await axios.get(
      `${baseUrl}/images/search?api_key=${apiKey}`,
      {
        params: { breed_ids: breedId },
      }
    );

    // console.log(`breedPet => ${breedId}`);

    return response.data[0];
  } catch (error) {
    console.error(`ERROR => ${error}`);

    alert(
      "We're sorry, we couldn't upload the information about the pet of the selected breed. Please reload the page or try again later."
    );
  }
};
