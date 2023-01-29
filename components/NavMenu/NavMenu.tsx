import React from "react";
import { StyledNav, StyledNavA, StyledNavLi, StyledNavUl } from "./NavMenu.styled";

export interface NavMenuProps {
  childrenBefore?: React.ReactNode;
  childrenAfter?: React.ReactNode;
  navLinks: [{
    href: string;
    text: string;
  }]
}

interface Props extends NavMenuProps {
  className: string;
}

export const NavMenu: React.FC<Props> = ({ className, childrenBefore, childrenAfter, navLinks }) => {
  return (
    <StyledNav className={className}>
      {childrenBefore}
      <StyledNavUl>
        {navLinks.map((link) =>
          <StyledNavLi><StyledNavA href={link.href}>{link.text}</StyledNavA></StyledNavLi>
        )}
      </StyledNavUl>
      {childrenAfter}
    </StyledNav>
  );
}
