// import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import BgContainer from '../BgContainer/BgContainer';

import { Container } from '../SharedLayout/SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <BgContainer />
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
