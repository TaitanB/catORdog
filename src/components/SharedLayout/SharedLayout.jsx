// import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Container } from '../SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
