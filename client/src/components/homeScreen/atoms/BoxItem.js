import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const BoxItemBody = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 300px;
  margin:0.5rem;
`;
const ItemTitle = styled.a`
  &:hover {
    color: #6d6d6d;
    font-weight: 500;
  }
  color: #b7c0c8;
  display: block;
  line-height: 1.1rem;
  font-size: 1rem;
  font-weight: normal;
  transition: all 0.15s ease-in-out 0s;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 0.2rem;
  cursor: pointer;
`;

const ItemImg = styled.img`
  height: 250px;
  width: 175px;
  cursor: pointer;
  z-index: -1;
  border-radius:0.3rem;
`;

const PlaySvg = styled.div`
  &:hover {
    opacity: ${(props) => (props.title != null ? 0.9 : 0)};
  }
  padding: 5.5rem 0 0 3.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  color: #ffffff;
  position: absolute;
  height: 250px;
  width: 175px;
  font-size: 4.5rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
`;

export const BoxItem = ({ title, img }) => {
  return (
    <BoxItemBody>
      {img !== null ? (
        <ItemImg src={img} alt="ItemImg" />
      ) : (
        <SkeletonTheme color="#202020" highlightColor="#6d6d6d">
          {" "}
          <Skeleton width={"175px"} height={"250px"} />
        </SkeletonTheme>
      )}
      <PlaySvg title={title}>
        <FaPlay />
      </PlaySvg>
      <ItemTitle>{title}</ItemTitle>
    </BoxItemBody>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoxItem);
