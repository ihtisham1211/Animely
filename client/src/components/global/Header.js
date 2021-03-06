import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "../../assets/index.png";
import { VscAccount } from "react-icons/vsc";

const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
  width: auto;
`;
const LogoImg = styled.img`
  height: 3rem;
`;
const NavBtnTray = styled.div`
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 0 auto;
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

const AccountBtn = styled.span`
  &:hover {
    color: #bababa;
  }
  color: #6d6d6d;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
`;

export const Header = (props) => {
  return (
    <HeaderBody>
      <LogoImg src={logo} />
      <NavBtnTray>
        <NavBtn href="#">Genre</NavBtn>
        <NavBtn href="#">Newest</NavBtn>
        <NavBtn href="#">Updated</NavBtn>
        {/*  no page */}
        <NavBtn href="#">Ongoing</NavBtn>
        {/*  no page */}
        <NavBtn href="#">New Seasons</NavBtn>
        <NavBtn href="#">Popular</NavBtn>
        <NavBtn href="#">Alphabet</NavBtn>
        {/* <AccountBtn>
          <VscAccount />
        </AccountBtn> */}
        
      </NavBtnTray>
    </HeaderBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
