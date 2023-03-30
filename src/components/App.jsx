import { Component } from 'react';
import { fetchBreeds, fetchPetByBreed, onFetch } from './api';
import { Dog, Cat } from './Pet';
import { BreedSelect } from './BreedSelect';
import { Loader } from './Loader';
// import { Buttons } from './Buttons';

const CatBaseURL = 'https://api.thecatapi.com/v1';
const DogBaseURL = 'https://api.thedogapi.com/v1';
const REACT_APP_CAT_API_KEY =
  'live_cj3Q4r1ebHoU5vIIOpyqdBAsHtM0N7j0agcbkZD4ImH4pmj6mUApCGVeamjUBCCX';
const REACT_APP_DOG_API_KEY =
  'live_QsgJd4PwVkVpjnxs42bHwp3GehROpIRziWAVdO05QFFw4fZo6qX32x2r83jSUdrU';

export class App extends Component {
  state = {
    breeds: [],
    pet: null,
    error: null,
    petType: '',
    isLoading: false,
    random_image: null,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    onFetch()
      .then(hits => {
        // Генеруємо випадковий індекс для масиву
        const random_index = Math.floor(Math.random() * hits.length);
        console.log(random_index);
        // Отримуємо картинку з об'єкту, що відповідає випадковому індексу
        const random_image = hits[random_index];
        console.log(random_image);
        // Отримуємо айді картинки з об'єкту
        const random_id = random_image.id;
        console.log(random_id);
        // Отримуємо URL картинки з об'єкту
        const random_image_url = random_image.largeImageURL;
        console.log(random_image_url);

        this.setState({ random_image: random_image_url });
      })
      .catch(error =>
        this.setState({
          error: 'Sorry, something went wrong...',
        })
      );

    console.log(this.state.random_image);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    console.log(`prevState: ${prevState}`);
    console.log(`this.state: ${this.state}`);
  }

  selectCat = async () => {
    try {
      console.log('selectCat');
      if (null !== this.state.pet) {
        this.setState({ pet: null });
      }

      if (this.state.petType !== 'cat') {
        this.setState({ petType: 'cat', isLoading: true });
        const breeds = await fetchBreeds(CatBaseURL, REACT_APP_CAT_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы питомцев, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  };

  selectDog = async () => {
    try {
      console.log('selectDog');

      if (null !== this.state.pet) {
        this.setState({ pet: null });
      }

      if (this.state.petType !== 'dog') {
        this.setState({ petType: 'dog', isLoading: true });
        const breeds = await fetchBreeds(DogBaseURL, REACT_APP_DOG_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы питомцев, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  };

  selectBreed = async breedId => {
    console.log(`Вибрали породу: ${breedId}`);
    try {
      if (this.state.petType === 'dog') {
        console.log(`fetchPetByBreed => DOG - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(
          DogBaseURL,
          REACT_APP_DOG_API_KEY,
          breedId
        );
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }

      if (this.state.petType === 'cat') {
        console.log(`fetchPetByBreed => CAT - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(
          CatBaseURL,
          REACT_APP_CAT_API_KEY,
          breedId
        );
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          'Упс, мы не смогли загрузить питомца 😭. Попробуйте еще раз или перезагрузите страницу 😇',
      });
    }
  };

  render() {
    const { breeds, pet, error } = this.state;

    return (
      <div
        style={{
          backgroundImage: `url(${this.state.random_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(150, 220, 215, 0.5)',
          // opacity: '0.6',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
            justifyContent: 'center',
            padding: '30px',
            marginBottom: '50px',
            // width: '480px',
          }}
        >
          <button
            style={{
              color: '#e0eee3',
              backgroundColor: '#05300d',
              padding: '30px 50px',
            }}
            onClick={this.selectCat}
          >
            Cat
          </button>
          <button
            style={{
              color: '#e0eee3',
              backgroundColor: '#05300d',
              padding: '30px 50px',
            }}
            onClick={this.selectDog}
          >
            Dog
          </button>
        </div>
        <div
          style={{
            backgroundColor: 'rgb(206, 238, 233)',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            justifyContent: 'center',
            // width: '480px',
          }}
        >
          {/* <Buttons onClick={(this.selectCat, this.selectDog)} /> */}
          {this.state.petType !== '' && (
            <BreedSelect
              style={{ width: '480px', marginBottom: '50px' }}
              breeds={breeds}
              onSelect={this.selectBreed}
            />
          )}
          {error && <div>{error}</div>}
          {pet && this.state.petType === 'dog' && <Dog pet={pet} />}
          {pet && this.state.petType === 'cat' && <Cat pet={pet} />}
          {this.state.isLoading === true && <Loader />}
        </div>
      </div>
    );
  }
}
