import React from 'react';
import styled from '@emotion/styled';
import { letterSpacing } from 'style/helpers';
import { centerContentCollum } from 'style/modifiers';
import { colorsRgba } from 'style/theme';

const Container = styled.div`
  text-align: center;
  ${centerContentCollum};

  h1 {
    font-size: 49px;
    font-weight: 400;
    text-transform: uppercase;
    ${letterSpacing(0.02)};
    margin-bottom: 12px;
    margin-top: 29px;

    text-shadow: 1px 2px 4px ${colorsRgba.bg(0.9)};
  }

  h2 {
    font-size: 30px;
    ${letterSpacing(0.02)};
    font-weight: 300;
    line-height: 1.3;

    text-shadow: 1px 2px 4px ${colorsRgba.bg(0.9)};
  }
`;

const Header = () => (
  <Container>
    <h1>Sustentabilidade + Tecnologia</h1>
    <h2>
      Para potencializar a relação entre pessoas e ambientes
      de forma sustentável mostramos aqui, por meio de
      dados, <br />a dinâmica de uso deste espaço e seus recursos.
    </h2>
  </Container>
);

export default Header;
