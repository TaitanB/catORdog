import { Component } from 'react';
import { BgContainer } from './Container/Container';
import { Home } from '../page/Home/Home';
// import { Viewed } from '../page/Viewed/Viewed';
// import { Favorites } from '../page/Favorites/Favorites';

export class App extends Component {
  render() {
    return (
      <BgContainer>
        <Home />
        {/* <Favorites />
        <Viewed /> */}
      </BgContainer>
    );
  }
}
