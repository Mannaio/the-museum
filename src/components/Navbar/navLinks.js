import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 60%;
  list-style: none;
  white-space: nowrap;
  word-break: normal;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 0.5em;
  color: #FFF;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  @media only screen and (min-width: 1083px) {
    padding: 0 1.5em
  }
`;


const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export function NavLinks(props) {

  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">VISITA</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">COSA VEDERE</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">CHI SIAMO</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">ATTIVITÀ</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">AGENDA</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}