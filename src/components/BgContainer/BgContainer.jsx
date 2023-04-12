import React, { Component } from 'react';

import { onFetchBgImg } from '../../Servises/Api';

import { BgContainerStyled } from './BgContainerStyled.styled';

export default class BgContainer extends Component {
  state = {
    randomBgImage: null,
  };

  componentDidMount() {
    // console.log('BgContainer componentDidMount');

    onFetchBgImg()
      .then(hits => {
        const randomIndex = Math.floor(Math.random() * hits.length);
        // console.log(`Генеруємо випадковий індекс для масиву => ${randomIndex}`);

        const randomImage = hits[randomIndex];
        // console.log(
        //   `Отримуємо картинку, що відповідає випадковому індексу => ${randomImage}`
        // );

        const randomImageUrl = randomImage.largeImageURL;
        // console.log(`Отримуємо URL картинки з об'єкту => ${randomImageUrl}`);

        this.setState({ randomBgImage: randomImageUrl });
      })
      .catch(() =>
        this.setState({
          error: 'Sorry, something went wrong...',
        })
      );

    // console.log(`randomBgImage => ${this.state.randomBgImage}`);
  }

  render() {
    return (
      <BgContainerStyled
        style={{
          backgroundImage: `url(${this.state.randomBgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {this.props.children}
      </BgContainerStyled>
    );
  }
}
