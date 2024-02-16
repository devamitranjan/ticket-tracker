import React from "react";
import styled, { keyframes } from "styled-components";

import data from "../../../mocks/ticketData";
import TimelineItem from "./TimelineItem";
import NewTimelineItem from "./NewTimelineItem";
import { Outlet } from "react-router-dom";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline: React.FC<TimelineProps> = ({ className }) => {
  const itemLength = data.ticketItems.length || 1;

  return (
    <>
      <Outlet />
      <TimelineContainer>
        <TimelineHeader>
          <h3>{data.ticketId}</h3>
          <p>{data.ticketDescription}</p>
        </TimelineHeader>
        <TimelineItems>
          {data.ticketItems.map((ticketItem, index) => (
            <TimelineItem $index={index} key={index}>
              <TimelineItemBox>
                <h2>{ticketItem.discussionHeader}</h2>
                <small>{ticketItem.lastModified}</small>
                <p>{ticketItem.discussionDetails}</p>
                <TimelineItemArrow $index={index} />
              </TimelineItemBox>
            </TimelineItem>
          ))}
          <TimelineItem $index={itemLength} key={itemLength}>
            <HiddenItemBox>
              <NewTimelineItem $index={itemLength} />
              <TimelineItemArrow $index={itemLength} />
            </HiddenItemBox>
          </TimelineItem>
        </TimelineItems>
      </TimelineContainer>
    </>
  );
};

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineHeader = styled.div`
  text-align: center;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;

const lineAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

const TimelineItems = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 50px auto;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    animation: ${lineAnimation} 3s linear forwards;
  }
  @media screen and (max-width: 600px) {
    margin: 25px auto;
    &::after {
      left: 31px;
    }
  }
`;

const TimelineItemBox = styled.div`
  padding: 20px 30px;
  background: #fff;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  h2 {
    font-weight: 600;
  }
  small {
    display: inline-block;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
    small {
      margin-bottom: 10px;
    }
  }
`;

const TimelineItemArrow = styled.span<{ $index: number }>`
  height: 0;
  width: 0;
  position: absolute;
  top: 20px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: ${({ $index }) =>
    $index % 2 === 0 ? "15px solid #fff" : "none"};
  border-right: ${({ $index }) =>
    $index % 2 === 0 ? "none" : "15px solid #fff"};
  ${({ $index }) => ($index % 2 === 0 ? "right" : "left")}: -14px;
  @media screen and (max-width: 600px) {
    border-right: 15px solid #fff;
    border-left: 0;
    left: -14px;
  }
`;

const HiddenItemBox = styled.div`
  padding: 20px 30px 80px 0px;
  position: relative;
  border-radius: 6px;
`;

export default Timeline;
