import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: flex-end;
`;

const RightSection = styled.div`
  display: flex;
  margin-left: 3%;
`;

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
      </MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
      </RightSection>
    </NavbarContainer>
  );
}