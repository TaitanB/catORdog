import { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaCat, FaDog } from 'react-icons/fa';

import { AboutUs } from '../About/About';
import { ContactForm } from '../Form/Form';

import {
  FooterSection,
  FooterContent,
  FooterBtn,
  FooterLink,
  FooterLogo,
  FooterIcon,
} from './Footer.styled';

export class Footer extends Component {
  state = {
    onModal: false,
    onForm: false,
  };

  openModal = () => {
    console.log('onModal');
    this.setState({ onModal: true });
  };

  closeModal = () => {
    console.log('offModal');
    this.setState({ onModal: false });
  };

  openForm = () => {
    console.log('openForm');
    this.setState({ onForm: true });
  };

  closeForm = () => {
    console.log('closeForm');
    this.setState({ onForm: false });
  };

  render() {
    return (
      <FooterSection>
        <FooterContent>
          <FooterLink
            href="https://cfa.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterIcon>
              <FaCat style={{ width: '24', height: '24' }} />
            </FooterIcon>
            The CFA
          </FooterLink>
          <FooterBtn type="button" onClick={this.openForm}>
            Give feedback
          </FooterBtn>
          {this.state.onForm && <ContactForm onCloseForm={this.closeForm} />}
          <Link to="/">
            <FooterLogo>catORdog</FooterLogo>
          </Link>
          <FooterBtn type="button" onClick={this.openModal}>
            About Us
          </FooterBtn>
          {this.state.onModal && <AboutUs onCloseModal={this.closeModal} />}
          <FooterLink
            href="https://dogtime.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The dogtime
            <FooterIcon>
              <FaDog
                style={{
                  width: '24',
                  height: '24',
                  transform: 'scale(-1, 1)',
                }}
              />
            </FooterIcon>
          </FooterLink>
        </FooterContent>
      </FooterSection>
    );
  }
}
