import { Container } from './Container.styled';
import { Component } from 'react';
import { onFetch } from '../../Servises/Api';

export class BgContainer extends Component {
  state = {
    random_image: null,
  };

  componentDidMount() {
    console.log('Container componentDidMount');

    onFetch()
      .then(hits => {
        // Генеруємо випадковий індекс для масиву
        const random_index = Math.floor(Math.random() * hits.length);
        console.log(random_index);
        // Отримуємо картинку, що відповідає випадковому індексу
        const random_image = hits[random_index];
        console.log(random_image);
        // Отримуємо URL картинки з об'єкту
        const random_image_url = random_image.largeImageURL;
        console.log(random_image_url);

        this.setState({ random_image: random_image_url });
      })
      .catch(() =>
        this.setState({
          error: 'Sorry, something went wrong...',
        })
      );

    console.log(this.state.random_image);
  }

  render() {
    return (
      <Container
        style={{
          backgroundImage: `url(${this.state.random_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></Container>
    );
  }
}
