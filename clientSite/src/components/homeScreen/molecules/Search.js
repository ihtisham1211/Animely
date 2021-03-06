import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";
import BgImg from "../../../assets/header-bg.jpg";

const SearchBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BackgroundImg = styled.img`
  z-index: 0;
  width: 100%;
  margin-bottom: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  position: absolute;
  align-self: center;
  top: 75%;
  height: 20%;
  width: 50%;
  background-color: pink;
  font-size: 1.5em;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: #f8f9fa;
  outline: 0;
  padding: 0.625rem 1.5rem 0.625rem 1.5rem;
  font-size: 1.2rem;
`;
const SearchIcon = styled.button`
  background: #f8f9fa;
  border: none;
  height: 100%;
  font-size: 1.2rem;
  align-self: center;
`;

export const Search = (props) => {
  return (
    <SearchBody>
      <BackgroundImg src={BgImg} alt={"bgImg"} />
      <InputContainer>
        <SearchInput placeholder={"Enter anime name..."} />
        <SearchIcon>
          <GrSearch />
        </SearchIcon>
      </InputContainer>
    </SearchBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
