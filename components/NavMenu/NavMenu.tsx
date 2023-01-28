import React from "react";
import { StyledNav, StyledNavA, StyledNavLi, StyledNavUl } from "./NavMenu.styled";

interface Props {
  childrenBefore: React.ReactNode;
  childrenAfter: React.ReactNode;
  navLinks: [{
    href: string;
    text: string;
  }]
}

export const NavMenu: React.FC<Props> = ({ childrenBefore, childrenAfter, navLinks }) => {
  return (
    <StyledNav>
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
