import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ListItemBody from "../atoms/ListItem";
import { v4 as uuid } from "uuid";

const EstimatedScheduleBody = styled.div`
  margin: 0 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:32%;
`;
const Title = styled.h1`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  text-transform: uppercase;
  color: #e9ecef;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.3rem;
  white-space: nowrap;
`;
const Time = styled(Title)`
  color: #4b5157;
  transition: all 0.15s ease-in-out 0s;
  box-shadow: 0 0 0 #000;
  align-self: flex-end;
  margin-left: 1.5rem;
`;
const ContainTnT = styled.div`
  display: flex;
  align-self:flex-start;

`;

const TodayBtn = styled.span`
  &:hover {
    color: #ced4da;
    border: 1px solid #ced4da;
  }
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6d6d6d;
  transition: all 0.15s ease-in-out 0s;
  padding: 0.4rem 1.2rem 0.4rem 1.2rem;
  margin: 0 1rem 0 1rem;
  border: 1px solid #6d6d6d;
`;
const YesNTomBtn = styled(TodayBtn)``;

const BtnTray = styled.div`
  display: flex;
  align-self:flex-start;
  width: 100%;
  margin: 0.5rem 0 0.5rem 0;
`;

const ListContain = styled.div`
  width: 100%;
`;

export const EstimatedSchedule = ({ RecentReleaseEpisodes }) => {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  return (
    <EstimatedScheduleBody>
      <ContainTnT>
        <Title>
          Estimated
          <br /> schedule
        </Title>
        <Time>{time} - GMT</Time>
      </ContainTnT>

      <BtnTray>
        <YesNTomBtn>Yesterday</YesNTomBtn>
        <TodayBtn>Today</TodayBtn>
        <YesNTomBtn>Tomorrow</YesNTomBtn>
      </BtnTray>
      {RecentReleaseEpisodes.length !== 0? (
        <ListContain>
          {RecentReleaseEpisodes.slice(0, 10).map((anime) => {
            return (
              <ListItemBody
                key={uuid()}
                title={anime.title}
                released={anime.released}
                totalEpisodes={anime.totalEpisodes}
              />
            );
          })}
        </ListContain>
      ) : (
        <ListContain>
          {[...new Array(10)].map((element, i) => {
            return (
              <ListItemBody
                key={uuid()}
                title={null}
                released={null}
                totalEpisodes={null}
              />
            );
          })}
        </ListContain>
      )}
    </EstimatedScheduleBody>
  );
};

const mapStateToProps = (state) => ({
  RecentReleaseEpisodes: state.main.RecentReleaseEpisodes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EstimatedSchedule);
