import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const LogoText = styled.h2`
  font-size: 38px;
  line-height: 0.9;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoText>The</LogoText>
      <LogoText>Museum</LogoText>
    </LogoWrapper>
  );
}