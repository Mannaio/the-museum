import styled from "styled-components";
import React from "react";
import './footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { TiSocialPinterestCircular } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { CgArrowLongRight } from 'react-icons/cg';

const FooterTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const FooterTitlesPrivacy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 50px;
  line-height: 3em
`;

const FooterTitlesNewsletter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 20px;
  line-height: 2em
`;

const FooterTitleLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

const FooterTitle = styled.h3`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  margin: 0;
`;

const FooterTitlePartner = styled.h3`
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin: 0;
`;

const FooterAddress = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-decoration: underline;
  margin: 0;
`;

const FooterSubsrciption = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  text-decoration: underline;
  text-transform: uppercase;
  margin: 0;
`;

const SubFooterInfo = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  margin: 0;
`;

const Dot = styled.span`
  height: 15px;
  width: 15px;
  background-color: #333333;
  margin-right: 15px;
  border-radius: 50%;
  display: inline-block;
`;

const DescriptionFooterText = styled.span`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

const DescriptionTerms = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: 3em;
`;

const SocialsWrapper = styled.ul`
  margin-top: 50px;
  padding: 0;
  display: flex;
  list-style: none;
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
`;

const FooterTitles = () => {
    return (
        <FooterTitleWrapper>
            <FooterTitle>The Museum</FooterTitle>
            <FooterAddress>Via Sant Ottavio, 44 - 10126 Torino</FooterAddress>
        </FooterTitleWrapper>
    )
}

const FooterPrivacy = () => {
    return (
        <FooterTitlesPrivacy>
            <span>STAMPA</span>
            <span>STATUTO E CODICE ETICO</span>
            <span>PRIVACY</span>
        </FooterTitlesPrivacy>
    )
}

const FooterNewsLetter = () => {
    return (
        <FooterTitlesNewsletter>
            <DescriptionFooterText>Resta sempre aggiornato su mostre, workshop ed eventi</DescriptionFooterText>
            <input type="text" placeholder="email" />
            <DescriptionTerms>
                <FooterAddress>
                    <Dot />
                    Accetto i termini e le condizioni
                </FooterAddress>
                <FooterSubsrciption>
                    Iscriviti alla Newsletter
                    <CgArrowLongRight style={{ marginLeft: '10px' }} color="red" />
                </FooterSubsrciption>
            </DescriptionTerms>
        </FooterTitlesNewsletter>
    )
}

const FooterContacts = () => {
    return (
        <FooterContactWrapper>
            <div>
                <FaPhoneAlt />
                <span style={{ marginLeft: '10px' }} >011.0062713</span>
            </div>
            <div>
                <HiOutlineMail />
                <span style={{ marginLeft: '10px' }} >info@themuseum.it</span>
            </div>
        </FooterContactWrapper>
    )
}


const FooterLogos = () => {
    return (
        <FooterTitleLogos>
            <div className="logo"></div>
            <FooterTitleWrapper>
                <FooterTitlePartner>Main</FooterTitlePartner>
                <FooterTitlePartner>Partner</FooterTitlePartner>
            </FooterTitleWrapper>
        </FooterTitleLogos>
    )
}

const FooterSocials = () => {
    return (
        <SocialsWrapper>
            <SocialItem>
                <AiFillFacebook size="22" color="white" />
            </SocialItem>
            <SocialItem>
                <AiOutlineTwitter size="22" color="white" />
            </SocialItem>
            <SocialItem>
                <AiFillYoutube size="22" color="white" />
            </SocialItem>
            <SocialItem>
                <TiSocialPinterestCircular size="22" color="white" />
            </SocialItem>
            <SocialItem>
                <FaInstagram size="22" color="white" />
            </SocialItem>
        </SocialsWrapper>
    )
}


const Footer = () => {

    return (
        <section>
            <footer className="App__footer">
                <div className="container">
                    <div className="column-3">
                        <div className="container-column">
                            <FooterTitles />
                            <FooterLogos />
                            <FooterSocials />
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="container-column">
                            <FooterPrivacy />
                            <FooterContacts />
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="container-column">
                            <FooterNewsLetter />
                        </div>
                    </div>
                </div>
            </footer>
            <div className="App__subfooter">
                <div className="container">
                    <SubFooterInfo>2020 THE MUSEUM®</SubFooterInfo>
                    <SubFooterInfo>Publicis Sapient</SubFooterInfo>
                </div>
            </div>
        </section>

    )

}

export default Footer;