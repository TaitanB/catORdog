import { Component } from 'react';
import { About } from './About.styled';

export class AboutUs extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount, додали слухача на віндовс');
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount, видалили слухача на віндовс');
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape' || event.target.className === 'Overlay') {
      //   console.log('При натисканні Escape закриваємо модалку');
      return this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClose}>
        <About>
          <h2>About Us</h2>
          <p>
            Our page combines a lot of knowledge about different animals.
            Fortunately, people who love pets have contributed their knowledge
            to the Internet and we are able to create this resource. We take all
            information from free sources and hope that it will be interesting
            and useful!
          </p>
        </About>
      </div>
    );
  }
}
