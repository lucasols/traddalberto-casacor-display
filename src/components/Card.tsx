import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Icon, { Icons } from 'components/Icon';
import { colors } from 'style/theme';
import { letterSpacing } from 'style/helpers';
import { centerContent } from 'style/modifiers';

type Props = {
  title?: string;
  icon?: Icons;
  gridCollumSpan?: 1 | 2 | 3;
  gridCollum?: 1 | 2 | 3;
  titleSize?: number;
  overflowHidden?: boolean;
};

const Container = styled.div`
  padding: 24px 0;

  background: ${colors.bg};
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05),
    0px 6px 6px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.05),
    0px 16px 16px rgba(0, 0, 0, 0.05);

  color: ${colors.cardText};
`;

const Header = styled.header`
  ${centerContent};
  margin-bottom: 36px;

  h1 {
    text-align: center;
    ${letterSpacing(0.08)};
    font-weight: 400;
    margin-left: 0.2em;
  }
`;

const Card: FunctionComponent<Props> = ({
  title,
  icon,
  children,
  gridCollumSpan = 3,
  gridCollum = 1,
  titleSize = 26,
  overflowHidden = false,
}) => (
  <Container
    css={{
      overflow: overflowHidden ? 'hidden' : 'visible',
      gridColumn: `${gridCollum} / span ${gridCollumSpan}`,
    }}
  >
    {title && icon && (
      <Header>
        <Icon name={icon} size={1.14 * titleSize} />
        <h1
          css={{
            fontSize: titleSize,
          }}
        >
          {title}
        </h1>
      </Header>
    )}
    {children}
  </Container>
);

export default Card;
