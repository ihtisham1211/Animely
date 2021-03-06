import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "../../assets/index.png";
import { MdKeyboardArrowUp } from "react-icons/md";

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;
  width: auto;
`;

const ContainTopBtn = styled.div`
  &:hover {
    color: #bbbbbb;
  }
  display: flex;
  align-items: center;
  color: #878787;
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
`;

const TopBtn = styled.div`
  font-size: 2rem;
  margin-right: 0.1rem;
  margin-top: 4px;
`;
const BackToTopButton = styled.span`
  font-size: 1.2rem;
`;

const NavBtnTray = styled.div`
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 0 0;
  padding-top: 1.2rem;
  border-top: 1px solid #353535;
  width: 100%;
`;

const NavBtn = styled.span`
  &:hover {
    color: #b93030;
    border-bottom: 0.5px solid #ced4da;
    padding-bottom: 0.5rem;
  }

  color: #ced4da;
  font-size: 1.1rem;
  margin: 0 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.15s ease-in-out 0s;
`;

const ContainImgTitle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 1.8rem 0 1rem 0;
  justify-content: space-between;
  width: 100%;
`;
const LogoImg = styled.img`
  height: 2rem;
  margin-right: 1rem;
`;
const Title = styled.h1`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  color: #6d6d6d;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
`;
const Description = styled(Title)`
  justify-self: flex-end;
  margin: 0 0 0 auto;
  text-align:center;
  font-size: 0.8rem;
`;

export const Footer = (props) => {
  return (
    <FooterBody>
      <ContainTopBtn>
        <TopBtn>
          <MdKeyboardArrowUp />
        </TopBtn>
        <BackToTopButton>Back To Top</BackToTopButton>
      </ContainTopBtn>

      <NavBtnTray>
        <NavBtn href="#">Alphabet</NavBtn>
        <NavBtn href="#">Genre</NavBtn>
        <NavBtn href="#">Newest</NavBtn>
        <NavBtn href="#">Popular</NavBtn>
        <NavBtn href="#">Updated</NavBtn>
        {/*  no page */}
        <NavBtn href="#">Ongoing</NavBtn>
        {/*  no page */}
        <NavBtn href="#">New Seasons</NavBtn>

        {/* <AccountBtn>
  <VscAccount />
</AccountBtn> */}
      </NavBtnTray>
      <ContainImgTitle>
        <LogoImg src={logo} />
        <Title>Copyright © AnimeSuge.io. All Rights Reserved</Title>
        <Description>
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;Made with ❤️ for anime
          users!
        </Description>
      </ContainImgTitle>
    </FooterBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
