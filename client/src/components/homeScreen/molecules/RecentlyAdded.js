import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SmallBoxItem from "../atoms/SmallBoxItem";
import { v4 as uuid } from "uuid";

const RecentlyAddedBody = styled.div`
  margin: 0 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:32%;
  `;

const Title = styled.span`
  font-family: "Baloo Tamma 2", Montserrat, "Open Sans", Lato, Tahoma;
  text-transform: uppercase;
  color: #e9ecef;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.3rem;
  white-space: nowrap;
`;

const ContainTnT = styled.div`
  display: flex;
  align-self:flex-start;
  margin:12.864px 0 12.864px 0;
`;

const ViewAll = styled(Title)`
  &:hover {
    color: #ced4da;
    border-bottom: 1px solid #ced4da;
  }
  color: #4b5157;
  font-size: 1rem;
  transition: all 0.15s ease-in-out 0s;
  box-shadow: 0 0 0 #000;
  margin-left: 1rem;
  border-bottom: 1px solid #4b5157;
  align-self: flex-end;
`;
const ListContain = styled.div`
  display: flex;
  flex-direction: column;
  align-self:flex-start;

`;
export const RecentlyAdded = ({ RecentlyAddedSeries }) => {
  return (
    <RecentlyAddedBody>
      <ContainTnT>
        <Title>
          Recently
          <br />
          Added
        </Title>
        <ViewAll>View All</ViewAll>
      </ContainTnT>

      <ListContain>
        {RecentlyAddedSeries.length !== 0
          ? RecentlyAddedSeries.slice(0, 6).map((anime) => {
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
    </RecentlyAddedBody>
  );
};

const mapStateToProps = (state) => ({
  RecentlyAddedSeries: state.main.RecentlyAddedSeries,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAdded);
