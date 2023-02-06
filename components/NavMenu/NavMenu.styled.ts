import Link from 'next/link';
import styled, { css } from 'styled-components';

const resetStyle = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Nav = styled.nav``;

export const NavUl = styled.ul`
  ${resetStyle}
`;

export const NavLi = styled.li``;

export const NavA = styled(Link)``;

export const NestedNavUl = styled.ul`
  ${resetStyle}
`;

export const NestedNavLi = styled.li``;

export const NestedNavA = styled(Link)``;
