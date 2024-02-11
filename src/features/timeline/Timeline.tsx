import React from "react";
import styled, { keyframes } from "styled-components";

import data from "../../mocks/ticketData";
import TimelineItem from "./TimelineItem";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline: React.FC<TimelineProps> = ({ className }) => {
  return (
    <TimelineContainer>
      <TimelineHeader>
        <h3>{data.ticketId}</h3>
        <p>{data.ticketDescription}</p>
      </TimelineHeader>
      <TimelineItems>
        {data.ticketItems.map((ticketItem, index) => (
          <TimelineItem ticketItem={ticketItem} index={index} key={index} />
        ))}
      </TimelineItems>
    </TimelineContainer>
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
    animation: ${lineAnimation} 5s linear forwards;
  }
  @media screen and (max-width: 600px) {
    margin: 25px auto;
    &::after {
      left: 31px;
    }
  }
`;

export default Timeline;
