import { Component } from 'react';
import { Buttons } from '../Buttons/Buttons';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import { HeaderContent } from './Header.styled';

export class Header extends Component {
  render() {
    return (
      <HeaderContent
      // style={{
      //   display: 'flex',
      //   width: '100%',
      //   flexDirection: 'row',
      //   gap: '50px',
      //   justifyContent: 'space-around',
      //   padding: '30px 0',
      //   alignItems: 'center',
      //   backgroundColor: 'rgba(217, 217, 217, 0.2)',
      // }}
      >
        <p>
          Favorites
          <FcLike />
          <FcLikePlaceholder />
        </p>
        <Buttons
          selectCat={() => this.props.selectCat}
          selectDog={() => this.props.selectDog}
        />
        <p>
          Viewed{' '}
          <IconContext.Provider value={{ color: 'green' }}>
            <FaCheck />
          </IconContext.Provider>
        </p>
      </HeaderContent>
    );
  }
}
