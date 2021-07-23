import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'


const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const SocialsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background: #D6001C;
  height: 45px 
`;


const SocialItem = styled.li`
  height: 100%;
  padding: 0 0.7em;
  color: #FFF;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:first-child {
    border-right: 1px solid #C3051E;
  }
`;



export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <SocialsWrapper>
        <SocialItem>
          ENG
        </SocialItem>
        <SocialItem>
          <GrFacebookOption size="22" color="white" />
        </SocialItem>
        <SocialItem>
          <AiOutlineInstagram size="22" color="white" />
        </SocialItem>
        <SocialItem>
          <AiOutlineTwitter size="22" color="white" />
        </SocialItem>
      </SocialsWrapper>
    </AccessibilityContainer>
  );
}