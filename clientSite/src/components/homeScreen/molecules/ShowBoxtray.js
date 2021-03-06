import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import EstimatedSchedule from "../molecules/EstimatedSchedule";
import TopAnime from "../molecules/TopAnime";
import RecentlyAdded from "../molecules/RecentlyAdded";

const ShowBoxtrayBody = styled.div`
  display: flex;
  justify-content:space-between;
  margin: 0;
  padding: 0;
`;

export const ShowBoxtray = (props) => {
  return (
    <ShowBoxtrayBody>
      <EstimatedSchedule />
      <TopAnime />
      <RecentlyAdded />
    </ShowBoxtrayBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShowBoxtray);
