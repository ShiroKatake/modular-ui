import React from "react";
import { Nav, NavA, NavLi, NavUl, NestedNavUl, NestedNavLi, NestedNavA } from "./NavMenu.styled";

type NavLink = {
  href?: string;
  text?: string | React.ReactNode;
  sublinks?: NavLink[];
}

export interface NavMenuProps {
  childrenBefore?: React.ReactNode;
  childrenAfter?: React.ReactNode;
  navLinks: NavLink[];
}

interface Props extends NavMenuProps {
  className?: string;
}

export const NavMenu: React.FC<Props> = ({ className, childrenBefore, childrenAfter, navLinks }) => {
  const renderNavLinks = () => {
    return navLinks.map((link) =>
      <NavLi key={link.href}>
        {link.href && <NavA href={link.href}>{link.text}</NavA>}
        <NestedNavUl>
          {link.sublinks && link.sublinks.map((sublink) =>
            <NestedNavLi key={sublink.href}>
              {sublink.href && <NestedNavA href={sublink.href}>{sublink.text}</NestedNavA>}
            </NestedNavLi>
          )}
        </NestedNavUl>
      </NavLi>
    );
  };

  return (
    <Nav className={className}>
      {childrenBefore}
      <NavUl>{renderNavLinks()}</NavUl>
      {childrenAfter}
    </Nav>
  );
}
