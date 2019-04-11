import React from 'react';
import styled from '@emotion/styled';
import { letterSpacing } from 'style/helpers';

const Container = styled.div`
  text-align: center;
  padding: 28px;

  h1 {
    font-size: 38px;
    font-weight: 500;
    text-transform: uppercase;
    ${letterSpacing(0.02)};
    margin-bottom: 12px;
  }

  h2 {
    font-size: 26px;
    ${letterSpacing(0.02)};
    font-weight: 400;
  }
`;

const Header = () => {


  return (
    <Container>
      <h1>Sustentabilidade + Tecnologia</h1>
      <h2>Sensores monitoram em tempo real as propriedades do <br /> ar, o gasto de água e o uso do espaço ao longo do dia</h2>
    </Container>
  );
};

export default Header;
