import React, { Component } from 'react';

import { fetchBreeds, fetchPetByBreed } from '../../Servises/Api';

import { Buttons } from '../../components/Buttons/Buttons';
import { BreedSelect } from '../../components/BreedSelect/BreedSelect';
import Pet from '../../components/Pet/Pet';
import { Loader } from '../../components/Loader';

import { Title } from './Home.styled';
import { LoaderContainer, ErrorMessage } from '../../components/App.styled';

const CatBaseURL = 'https://api.thecatapi.com/v1';
const DogBaseURL = 'https://api.thedogapi.com/v1';
const CAT_API_KEY =
  'live_cj3Q4r1ebHoU5vIIOpyqdBAsHtM0N7j0agcbkZD4ImH4pmj6mUApCGVeamjUBCCX';
const DOG_API_KEY =
  'live_QsgJd4PwVkVpjnxs42bHwp3GehROpIRziWAVdO05QFFw4fZo6qX32x2r83jSUdrU';

export default class Home extends Component {
  state = {
    breeds: [],
    pet: null,
    error: null,
    petType: '',
    isLoading: false,
  };

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
      // console.log('selectDog');

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
    // console.log(`Вибрали породу: ${breedId}`);

    try {
      if (this.state.petType === 'dog') {
        // console.log(`fetchPetByBreed => DOG - ${this.state.petType}`);

        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(DogBaseURL, DOG_API_KEY, breedId);
        // console.log(`Отримали dog вибраної породи => ${pet}`);
        pet && this.setState({ pet, isLoading: false });
      }

      if (this.state.petType === 'cat') {
        // console.log(`fetchPetByBreed => CAT - ${this.state.petType}`);

        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(CatBaseURL, CAT_API_KEY, breedId);
        // console.log(`Отримали cat вибраної породи => ${pet}`);

        pet && this.setState({ pet, isLoading: false });
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
    const { breeds, pet, error, petType } = this.state;

    return (
      <>
        <Buttons
          selectCat={() => this.selectCat}
          selectDog={() => this.selectDog}
        />
        <Title>Choose yor pet!</Title>
        {this.state.petType !== '' && (
          <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {pet && <Pet pet={pet} petType={petType} />}
        <LoaderContainer>
          {this.state.isLoading === true && <Loader />}
        </LoaderContainer>
      </>
    );
  }
}
