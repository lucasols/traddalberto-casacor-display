import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Icon, { Icons } from 'components/Icon';
import { colors } from 'style/theme';
import { letterSpacing } from 'style/helpers';
import { centerContent } from 'style/modifiers';

type Props = {
  title?: string;
  icon?: Icons;
  gridCollumSpan?: 1 | 2;
  gridCollum?: 1 | 2;
};

const Container = styled.div`
  padding: 16px 0;

  background: ${colors.bg};
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05),
    0px 6px 6px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.05),
    0px 16px 16px rgba(0, 0, 0, 0.05);

  color: ${colors.cardText};
`;

const Header = styled.header`
  ${centerContent};
  margin-bottom: 24px;

  h1 {
    font-size: 28px;
    ${letterSpacing(0.08)};
    font-weight: 400;
    margin-left: 8px;
  }
`;

const Card: FunctionComponent<Props> = ({
  title,
  icon,
  children,
  gridCollumSpan = 2,
  gridCollum = 1,
}) => (
  <Container
    css={{
      gridColumn: `${gridCollum} / span ${gridCollumSpan}`,
    }}
  >
    {title && icon && (
      <Header>
        <Icon name={icon} size={32} />
        <h1>{title}</h1>
      </Header>
    )}
    {children}
  </Container>
);

export default Card;
