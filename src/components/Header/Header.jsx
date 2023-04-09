import { Component } from 'react';
import { Nav } from '../Header/Nav';
import { HeaderSection, HeaderContent } from './Header.styled';

export class Header extends Component {
  render() {
    return (
      <HeaderSection>
        <HeaderContent>
          <Nav />
        </HeaderContent>
      </HeaderSection>
    );
  }
}
