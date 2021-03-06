import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";

const ButtonsTrayBody = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  text-transform: uppercase;
  color: #e9ecef;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin: 0;
  width: 5em;
  padding: 0;
  width: 5em;
  display: inline-block;
  margin-right: 10px;
  font-weight: 400;
`;

const ListButtons = styled.div`
  align-self: end;
`;

const ListButton = styled.span`
  &:hover {
    color: #ababab;
  }
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 10px;
  color: #4b5157;
  transition: all 0.15s ease-in-out 0s;
  box-shadow: 0 0 0 #000;
`;

const OptionButtons = styled.div`
display: flex;
  margin-left: auto;
  align-self: end;
`;
const OptionButton = styled.span`
  &:hover {
    color: #ababab;
  }
  font-size: 1.8rem;
  margin-left: 5px;
  color: #4b5157;
`;

const PageButtons = styled.div`
  margin-right: 1rem;
`;
export const Buttonstray = (props) => {
  return (
    <ButtonsTrayBody>
      <Title>Recently updated</Title>
      <ListButtons>
        <ListButton>All</ListButton>
        <ListButton>Subbed</ListButton>
        <ListButton>Dubbed</ListButton>
        <ListButton>Chinese</ListButton>
        <ListButton>Trending</ListButton>
        <ListButton>Random</ListButton>
      </ListButtons>
      <OptionButtons>

        <PageButtons>
          <OptionButton>
            <MdNavigateBefore />
          </OptionButton>
          
          <OptionButton>
            <MdNavigateNext />
          </OptionButton>
        </PageButtons>

        <OptionButton>
          <MdViewModule />
        </OptionButton>
        <OptionButton>
          <MdViewList />
        </OptionButton>
      </OptionButtons>
    </ButtonsTrayBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Buttonstray);
