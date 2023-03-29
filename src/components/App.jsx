import { Component } from 'react';
import { fetchBreeds, fetchCatByBreed } from './api';
import { Cat } from './cat';
import { GlobalStyle } from './GlobalStyle';
import { BreedSelect } from './BreedSelect';

export class App extends Component {
  state = {
    breeds: [],
    cat: null,
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
      const cat = await fetchCatByBreed(breedId);
      this.setState({ cat });
    } catch (e) {
      this.setState({
        error:
          'Упс, мы не смогли загрузить собачку 😭. Попробуйте еще раз или перезагрузите страницу 😇',
      });
    }
  };

  render() {
    const { breeds, cat, error } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {cat && <Cat cat={cat} />}
        <GlobalStyle />
      </>
    );
  }
}
