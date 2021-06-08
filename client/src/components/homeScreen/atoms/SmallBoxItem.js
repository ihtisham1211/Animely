import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SmallBoxItemBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
`;
const ItemTitle = styled.span`
  &:hover {
    color: #6d6d6d;
    font-weight: 500;
  }
  color: #b7c0c8;
  display: block;
  line-height: 1.3rem;
  font-size: 1.25rem;
  font-weight: normal;
  transition: all 0.15s ease-in-out 0s;
  text-overflow: ellipsis;
  text-align: left;
  cursor: pointer;
`;

const Status = styled(ItemTitle)`
  &:hover {
    font-weight: 500;
  }
  font-weight: 500;
  color: #6d6d6d;
  font-size: 0.9rem;
  margin-top: 0.6rem;
`;

const TnS = styled.div`
  margin-left: 1rem;
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TnSK = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemImg = styled.img`
  height: 90px;
  width: 63px;
  cursor: pointer;
  z-index: -1;
  border-radius: 0.3rem;
`;

export const SmallBoxItem = ({ img, title, status, totalEpisodes }) => {
  return (
    <>
      {title === null ? (
        <SmallBoxItemBody>
          <SkeletonTheme color="#202020" highlightColor="#6d6d6d">
            <div style={{ display: "flex" }}>
              <Skeleton width={"63px"} height={"90px"} />
              <TnSK>
                <Skeleton width={"100px"} height={"10px"} />
                <Skeleton width={"100px"} height={"10px"} />
              </TnSK>
            </div>
          </SkeletonTheme>
        </SmallBoxItemBody>
      ) : (
        <SmallBoxItemBody>
          <ItemImg src={img} alt={"SmallImgItem"} />
          <TnS>
            <ItemTitle>{title}</ItemTitle>
            <Status>
              {status} • EP-{totalEpisodes}
            </Status>
          </TnS>
        </SmallBoxItemBody>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallBoxItem);
