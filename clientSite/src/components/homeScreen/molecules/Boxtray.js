import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BoxItem from "../atoms/BoxItem";
import { v4 as uuid } from "uuid";

const BoxtrayBody = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  padding: 0;
  margin: 0;
`;

export const Boxtray = ({ OngoingSeries }) => {
  return (
    <>
      {OngoingSeries.length !== 0 ? (
        <BoxtrayBody>
          {OngoingSeries.slice(0, 14).map((anime) => {
            return <BoxItem key={uuid()} title={anime.title} img={anime.img} />;
          })}
        </BoxtrayBody>
      ) : (
        <BoxtrayBody>
          {[...new Array(14)].map((element, i) => {
            return <BoxItem key={uuid()} title={null} img={null} />;
          })}
        </BoxtrayBody>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  OngoingSeries: state.main.OngoingSeries,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Boxtray);
