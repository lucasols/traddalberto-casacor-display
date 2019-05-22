import css from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';
import { centerContent } from 'style/modifiers';

const Container = styled.div`
  ${centerContent};
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  line-height: 0.9;
  font-weight: 300;
  letter-spacing: 0.04em;
  opacity: 0.8;
`;

const Logo = ({ url, height = 32 }: { url: string; height?: number }) => (
  <img
    alt="logo"
    src={url}
    css={css`
      vertical-align: middle;
      height: ${height}px;
      display: inline-block;
    `}
  />
);

const Footer = () => (
  <Container>
    <div
      css={css`
        position: absolute;
        bottom: 42px;
      `}
    >
      Oferecimento:&nbsp;&nbsp;Trad Dalberto Arquitetura &middot; Omni-electronica &middot; Deca | PROÁGUA
    </div>
    <div
      css={css`
        position: absolute;
        bottom: 16px;
        font-size: 10px;
      `}
    >
      Desenvolvimento e Design do Painel por lucassantos.net
    </div>
  </Container>
);

export default Footer;
