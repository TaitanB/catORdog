import React, { Component } from 'react';
import { Formik } from 'formik';

import { FaCat, FaDog } from 'react-icons/fa';

// import { Overlay } from '../App.styled';
import {
  FormStyled,
  FieldStyled,
  ErrorMessageStyled,
  CheckboxStyled,
  FormBtn,
  FormTitle,
  LabelStyled,
} from './Form.styled';

export class ContactForm extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount, додали слухача на віндовс');

    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount, видалили слухача на віндовс');

    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    // console.log(`event => ${event}`);

    if (event.code === 'Escape' || event.target.className === 'Overlay') {
      // console.log(
      //   'При натисканні Escape чи кліку по Overlay закриваємо модалку'
      // );

      return this.props.onCloseForm();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClose}>
        <Formik
          initialValues={{ name: '', contact: '', text: '', subscribe: true }}
          validate={values => {
            console.log('Formik validate');

            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.contact) {
              errors.contact = 'Required';
            }
            if (!values.checkbox) {
              errors.checkbox = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('Formik onSubmit');

              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <FormStyled>
              <FormTitle>
                <FaCat style={{ width: '24', height: '24' }} /> Write a letter{' '}
                <FaDog
                  style={{
                    width: '24',
                    height: '24',
                    transform: 'scale(-1, 1)',
                  }}
                />
              </FormTitle>
              <LabelStyled>
                Yor name
                <FieldStyled type="text" name="name" />
                <ErrorMessageStyled name="name" component="div" />
              </LabelStyled>

              <LabelStyled>
                How we can contact with you?
                <FieldStyled type="text" name="contact" />
                <ErrorMessageStyled name="contact" component="div" />
              </LabelStyled>

              <LabelStyled>
                What you wont to ask or propose?
                <FieldStyled as="textarea" name="text" />
              </LabelStyled>

              <LabelStyled>
                <CheckboxStyled type="checkbox" name="subscribe" />I agree to
                the privacy policy.
                <ErrorMessageStyled name="subscribe" component="div" />
              </LabelStyled>

              <FormBtn type="submit" disabled={isSubmitting}>
                Send a letter
              </FormBtn>
            </FormStyled>
          )}
        </Formik>
      </div>
    );
  }
}
