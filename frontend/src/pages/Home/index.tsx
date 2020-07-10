import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, Main, Span } from './styles';

// import './styles.css';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Logo"/>
        </header>

        <Main>
          <h1>Seu marketplace de coleta de residuos</h1>
          <p>Ajudamos pessoas a encontrar pontos de coleta de forma eficiente</p>
        
          <Link to="create-point">
            <Span>
              <FiLogIn />
            </Span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </Main>
      </Content>
    </Container>
  );
}

export default Home;