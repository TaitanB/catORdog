import { Component } from 'react';
import { fetchBreeds, fetchPetByBreed } from './api';
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
  };

  componentDidMount() {
    console.log('App componentDidMount');
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
      <>
        <div>
          <button onClick={this.selectCat}>Cat</button>
          <button onClick={this.selectDog}>Dog</button>
        </div>
        {/* <Buttons onClick={(this.selectCat, this.selectDog)} /> */}
        {this.state.petType !== null && (
          <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        )}
        {error && <div>{error}</div>}
        {pet && this.state.petType === 'dog' && <Dog pet={pet} />}
        {pet && this.state.petType === 'cat' && <Cat pet={pet} />}
        {this.state.isLoading === true && <Loader />}
      </>
    );
  }
}
