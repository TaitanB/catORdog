import React, { Component } from 'react';

import { onFetchBgImg } from '../../Servises/Api';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { Container } from './Container.styled';

export class BgContainer extends Component {
  state = {
    randomBgImage: null,
  };

  componentDidMount() {
    console.log('BgContainer componentDidMount');

    onFetchBgImg()
      .then(hits => {
        const randomIndex = Math.floor(Math.random() * hits.length);
        console.log(`Генеруємо випадковий індекс для масиву => ${randomIndex}`);

        const randomImage = hits[randomIndex];
        console.log(
          `Отримуємо картинку, що відповідає випадковому індексу => ${randomImage}`
        );

        const randomImageUrl = randomImage.largeImageURL;
        console.log(`Отримуємо URL картинки з об'єкту => ${randomImageUrl}`);

        this.setState({ randomBgImage: randomImageUrl });
      })
      .catch(() =>
        this.setState({
          error: 'Sorry, something went wrong...',
        })
      );

    console.log(`randomBgImage => ${this.state.randomBgImage}`);
  }

  render() {
    return (
      <Container
        style={{
          backgroundImage: `url(${this.state.randomBgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        {this.props.children}
        <Footer />
      </Container>
    );
  }
}
