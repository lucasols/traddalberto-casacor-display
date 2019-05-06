import React from 'react';
import styled from '@emotion/styled';
import { letterSpacing } from 'style/helpers';
import { centerContentCollum } from 'style/modifiers';
import { colorsRgba } from 'style/theme';

const Container = styled.div`
  text-align: center;
  ${centerContentCollum};

  h1 {
    margin-top: 28px;
    font-size: 48px;
    font-weight: 400;
    text-transform: uppercase;
    ${letterSpacing(0.02)};
    margin-bottom: 12px;

    text-shadow: 1px 2px 4px ${colorsRgba.bg(0.9)};
  }

  h2 {
    font-size: 30px;
    ${letterSpacing(0.02)};
    font-weight: 300;
    line-height: 1.4;

    text-shadow: 1px 2px 4px ${colorsRgba.bg(0.9)};
  }
`;

const Header = () => (
  <Container>
    <h1>Sustentabilidade + Tecnologia</h1>
    <h2>
        Sensores monitoram em tempo real as propriedades do <br /> ar, o gasto
        de água e o uso do espaço ao longo do dia
    </h2>
  </Container>
);

export default Header;
