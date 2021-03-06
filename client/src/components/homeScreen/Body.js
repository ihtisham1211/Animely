import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Search from "./molecules/Search";
import Buttonstray from "./molecules/Buttonstray";
import Boxtray from "./molecules/Boxtray";
import ShowBoxtrayBody from "./molecules/ShowBoxtray";
import {
  getOngoingSeries,
  getRecentlyAddedSeries,
  getRecentReleaseEpisodes,
  getPopular,
} from "../../actions/main";

import { setloading } from "../../actions/options";

const BodysBody = styled.div`
  padding: 1rem 0 1rem 0;
`;
const Title = styled.h1`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  text-transform: uppercase;
  color: #e9ecef;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 0.95em;
  width: auto;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
const Description = styled.h3`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6d6d6d;
  text-align: left;
  display: block;
`;

export const Body = ({
  getOngoingSeries,
  getRecentlyAddedSeries,
  getRecentReleaseEpisodes,
  getPopular,
  OngoingSeries,
  RecentlyAddedSeries,
  RecentReleaseEpisodes,
  Popular,
}) => {
  useEffect(() => {
    if (OngoingSeries.length === 0) getOngoingSeries();

    if (RecentlyAddedSeries.length === 0) getRecentlyAddedSeries();

    if (RecentReleaseEpisodes.length === 0) getRecentReleaseEpisodes();

    if (Popular.length === 0) getPopular();
  });

  return (
    <BodysBody>
      <Search />
      <Title>Watch anime online</Title>
      <Description>
        AnimeSuge is a free streaming anime website that allows you to watch
        anime online in English subbed and dubbed. Join us and watch anime
        online for free with ease. Easy access and no registration is required.
        Our content is updated daily with beautiful layouts, fast streaming
        servers, and great features that help you easily track and watch your
        favorite anime. We are confident AnimeSuge is the best free anime
        streaming site in the space that you can't simply miss! Please help us
        by sharing this site with your friends. Thanks!
      </Description>
      <Buttonstray />
      <Boxtray />
      <ShowBoxtrayBody />
    </BodysBody>
  );
};

const mapStateToProps = (state) => ({
  OngoingSeries: state.main.OngoingSeries,
  RecentlyAddedSeries: state.main.RecentlyAddedSeries,
  RecentReleaseEpisodes: state.main.RecentReleaseEpisodes,
  Popular: state.main.Popular,
  Loaded: state.options.loaded,
});

const mapDispatchToProps = {
  getOngoingSeries,
  getRecentlyAddedSeries,
  getRecentReleaseEpisodes,
  getPopular,
  setloading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
