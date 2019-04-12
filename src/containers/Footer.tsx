import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from 'style/modifiers';

const Container = styled.div`
  ${centerContent};
  font-size: 16px;
`;

const Footer = () => (
  <Container>
    <div>
      Créditos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </Container>
);

export default Footer;
