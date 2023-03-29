import { Component } from 'react';
import { fetchBreeds, fetchPetByBreed } from './api';
import { Pet } from './Pet';
import { GlobalStyle } from './GlobalStyle';
import { BreedSelect } from './BreedSelect';

export class App extends Component {
  state = {
    breeds: [],
    pet: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы собачек, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  }

  selectBreed = async breedId => {
    try {
      const pet = await fetchPetByBreed(breedId);
      this.setState({ pet });
    } catch (e) {
      this.setState({
        error:
          'Упс, мы не смогли загрузить собачку 😭. Попробуйте еще раз или перезагрузите страницу 😇',
      });
    }
  };

  render() {
    const { breeds, pet, error } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {pet && <Pet pet={pet} />}
        <GlobalStyle />
      </>
    );
  }
}
