import { Component } from 'react';
import { AboutUs } from '../About/About';
import { ContactForm } from '../Form/Form';
import cat from '../../image/svg/bxs-cat.svg';
import dog from '../../image/svg/bxs-dog.svg';
import {
  FooterSection,
  FooterContent,
  FooterBtn,
  ButtonText,
  FooterLink,
  FooterLogo,
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
            <img src={cat} alt="" />
            The Cat Fanciers' Association
          </FooterLink>
          <FooterBtn type="button" onClick={this.openForm}>
            <ButtonText>Give feedback</ButtonText>
          </FooterBtn>
          {this.state.onForm && <ContactForm onCloseForm={this.closeForm} />}
          <FooterLogo>catORdog</FooterLogo>
          <FooterBtn type="button" onClick={this.openModal}>
            <ButtonText>About Us</ButtonText>
          </FooterBtn>
          {this.state.onModal && <AboutUs onCloseModal={this.closeModal} />}
          <FooterLink
            href="https://dogtime.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dog} alt="" />
            The dogtime
          </FooterLink>
        </FooterContent>
      </FooterSection>
    );
  }
}
