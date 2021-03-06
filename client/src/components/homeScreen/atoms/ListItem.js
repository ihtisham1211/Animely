import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ListItemBody = styled.div`
  display: flex;
  justify-content: flex-start;
  width:90%;
  
`;
const Numbers = styled.span`
  line-height: 2.8em;
  font-size: 1.1rem;
  white-space: nowrap;
  color: #6d6d6d;
  transition: all 0.15s ease-in-out 0s;
  margin: 0.2rem 0.8rem 0.2rem 1.5rem;
`;
const Letters = styled(Numbers)`
  &:hover {
    color: #6d6d6d;
  }
  margin: 0.2rem 0 0.2rem 0;
  color: #b7c0c8;
  overflow: hidden;
  text-overflow: ellipsis;

`;
const SKListItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ListItem = ({ title, released, totalEpisodes }) => {
  return (
    <>
      {title !== null ? (
        <ListItemBody>
          <Numbers>{released}</Numbers>
          <Letters>{title}</Letters>
          <Numbers> - EP {totalEpisodes === null ? 0 : totalEpisodes}</Numbers>
        </ListItemBody>
      ) : (
        <SKListItemBody>
          <SkeletonTheme color="#202020" highlightColor="#6d6d6d">
            <div style={{ margin: "0.2rem 0.8rem 0.2rem 1.5rem" }}>
              <Skeleton width={"350px"} height={"30px"} />
            </div>
          </SkeletonTheme>
        </SKListItemBody>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
