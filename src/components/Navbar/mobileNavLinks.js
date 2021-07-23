import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksMobileWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 10%;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

// I have created an other Hamburgher for the menu Mobile open to avoid missing the haburgher when i scroll in the mobile page

const Hamburgher = styled.div`
  position: absolute;
  top: 50px;
  right: 70px;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksMobileWrapper>
          <Hamburgher>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          </Hamburgher>
          <List>
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
            <Accessibility />
          </List>
        </LinksMobileWrapper>

      )}
    </NavLinksContainer>
  );
}