import { Component } from 'react';
import { FaHome, FaRegEye, FaHeart } from 'react-icons/fa';
import { HeaderNav, HeaderNavLink } from './Header.styled';

export class Nav extends Component {
  render() {
    return (
      <HeaderNav>
        <li>
          <HeaderNavLink href="../../page/Home/Home.jsx">
            <FaHome />
            Home
          </HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink href="../../page/Favorites/Favorites.jsx">
            <FaHeart />
            Favorites
          </HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink href="../../page/Viewed/Viewed.jsx">
            <FaRegEye />
            Viewed
          </HeaderNavLink>
        </li>
      </HeaderNav>
    );
  }
}
