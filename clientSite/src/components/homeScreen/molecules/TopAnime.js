import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import SmallBoxItem from "../atoms/SmallBoxItem";

const TopAnimeBody = styled.div`
  margin: 0 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
`;

const Title = styled.span`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  text-transform: uppercase;
  color: #e9ecef;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.3rem;
  white-space: nowrap;
  margin-right: 1rem;
`;

const ContainTnT = styled.div`
  display: flex;
  width: 100%;
  margin: 12.864px 0 12.864px 0;
  align-items: center;
`;

const Btns = styled(Title)`
  &:hover {
    color: #ced4da;
  }
  color: #4b5157;
  align-self: flex-end;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0 1rem;

  transition: all 0.15s ease-in-out 0s;
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const TopAnime = ({ Popular }) => {
  return (
    <TopAnimeBody>
      <ContainTnT>
        <Title>
          Top
          <br />
          Anime
        </Title>
        <Btns>Day</Btns>
        <Btns>Week</Btns>
        <Btns>Month</Btns>
      </ContainTnT>

      <ListContain>
        {Popular.length !== 0
          ? Popular.slice(0, 6).map((anime) => {
              return (
                <SmallBoxItem
                  key={uuid()}
                  img={anime.img}
                  title={anime.title}
                  status={anime.status}
                  totalEpisodes={anime.totalEpisodes}
                />
              );
            })
          : [...new Array(6)].map((element, i) => {
              return <SmallBoxItem key={uuid()} title={null} />;
            })}
      </ListContain>
    </TopAnimeBody>
  );
};

const mapStateToProps = (state) => ({
  Popular: state.main.Popular,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopAnime);
