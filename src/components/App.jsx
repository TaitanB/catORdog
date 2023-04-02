import { Component } from 'react';
import { fetchBreeds, fetchPetByBreed, onFetch } from '../Servises/Api';
import { Dog, Cat } from './Pet/Pet';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { Loader } from './Loader';
import { Buttons } from './Buttons/Buttons';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import { SelectContainer } from './BreedSelect/BreedSelect.styled';
import { Container } from './Container/Container.styled';

const CatBaseURL = 'https://api.thecatapi.com/v1';
const DogBaseURL = 'https://api.thedogapi.com/v1';
const CAT_API_KEY =
  'live_cj3Q4r1ebHoU5vIIOpyqdBAsHtM0N7j0agcbkZD4ImH4pmj6mUApCGVeamjUBCCX';
const DOG_API_KEY =
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
        // console.log(random_index);
        // Отримуємо картинку, що відповідає випадковому індексу
        const random_image = hits[random_index];
        // console.log(random_image);
        // Отримуємо URL картинки з об'єкту
        const random_image_url = random_image.largeImageURL;
        // console.log(random_image_url);

        this.setState({ random_image: random_image_url });
      })
      .catch(() =>
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
        const breeds = await fetchBreeds(CatBaseURL, CAT_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Could not load animal breeds, please reload the page and try again.',
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
        const breeds = await fetchBreeds(DogBaseURL, DOG_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Could not load animal breeds, please reload the page and try again.',
      });
    }
  };

  selectBreed = async breedId => {
    console.log(`Вибрали породу: ${breedId}`);
    try {
      if (this.state.petType === 'dog') {
        console.log(`fetchPetByBreed => DOG - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(DogBaseURL, DOG_API_KEY, breedId);
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }

      if (this.state.petType === 'cat') {
        console.log(`fetchPetByBreed => CAT - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(CatBaseURL, CAT_API_KEY, breedId);
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          "Oops, we couldn't load the pet 😭. Please try again or reload the page 😇.",
      });
    }
  };

  render() {
    const { breeds, pet, error } = this.state;

    return (
      <Container
        style={{
          backgroundImage: `url(${this.state.random_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          // backgroundColor: 'rgba(150, 220, 215, 0.5)',
          // width: '100%',
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // gap: '30px',
          // alignItems: 'center',
        }}
      >
        <header
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            gap: '50px',
            justifyContent: 'space-around',
            padding: '30px 0',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <p>
            Favorites
            <FcLike />
            <FcLikePlaceholder />
          </p>
          <Buttons selectCat={this.selectCat} selectDog={this.selectDog} />
          <p>
            Viewed{' '}
            <IconContext.Provider value={{ color: 'green' }}>
              <FaCheck />
            </IconContext.Provider>
          </p>
        </header>
        <h1>Choose yor pet</h1>
        <SelectContainer>
          {this.state.petType !== '' && (
            <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
          )}
          {error && <div>{error}</div>}
          {pet && this.state.petType === 'dog' && <Dog pet={pet} />}
          {pet && this.state.petType === 'cat' && <Cat pet={pet} />}
          {this.state.isLoading === true && <Loader />}
        </SelectContainer>

        <footer
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            position: 'fixed',
            bottom: '0',
            padding: '30px 0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <a href="https://cfa.org/" target="_blank" rel="noopener noreferrer">
            The Cat Fanciers' Association
          </a>
          <a
            href="https://dogtime.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The dogtime
          </a>
        </footer>
      </Container>
    );
  }
}
