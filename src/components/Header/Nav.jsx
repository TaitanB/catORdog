import { FaHome, FaRegEye, FaHeart } from 'react-icons/fa';
import { HeaderNav, HeaderNavLink } from './Header.styled';

export default function Nav() {
  return (
    <HeaderNav>
      <HeaderNavLink to="/" end>
        <FaHome />
        Home
      </HeaderNavLink>
      <HeaderNavLink to="/favorites">
        <FaHeart />
        Favorites
      </HeaderNavLink>
      <HeaderNavLink to="/viewed">
        <FaRegEye />
        Viewed
      </HeaderNavLink>
    </HeaderNav>
  );
}
