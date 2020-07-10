import styled from 'styled-components';

import logoBackground from '../../assets/home-background.svg'

export const Container = styled.div`
  height: 100vh;
  
  background: url(${logoBackground}) no-repeat 500px 100px;

`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  header {
    margin: 48px 0 0;
  }
`;

export const Main = styled.div`
  flex: 1;
  max-width: 560px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: #322153;
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  a {
    width: 100%;
    height: 72px;
    max-width: 360px;
    border-radius: 8px;
    text-decoration: none;

    background: #34CB79;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    &:hover {
      background: #2FB86E;
    }

    strong {
      flex: 1;
      text-align: center;
      color: #FFF;
    }

  }
`;

export const Span = styled.span`
  display: block;
  width: 72px;
  height: 72px;

  background: rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  svg {
    width: 20px;
    height: 20px;
    color: #FFF;
  }
`;
