import React from "react";
import styled, { keyframes } from "styled-components";

import { ITicketItem } from "./timeline.types";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  ticketItem: ITicketItem;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ index, ticketItem }) => {
  return (
    <TimelineItemContainer $index={index}>
      <TimeLineDot $index={index} />
      <TimelineItemBox>
        <h2>{ticketItem.discussionHeader}</h2>
        <small>{ticketItem.lastModified}</small>
        <p>{ticketItem.discussionDetails}</p>
        <TimelineItemArrow $index={index} />
      </TimelineItemBox>
    </TimelineItemContainer>
  );
};

const downAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const TimelineItemContainer = styled.div<{ $index: number }>`
  padding: 10px 50px;
  position: relative;
  width: 50%;
  /* background: rgba(0, 0, 0, 0.3); */
  animation: ${downAnimation} 1s linear forwards;
  opacity: 0;
  left: ${({ $index }) => ($index % 2 === 0 ? 0 : "50%")};
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;
    left: 0;
  }
  &:nth-child(n) {
    animation-delay: ${({ $index }) =>
      $index !== 0 ? 2 * $index - 1 + "s" : 0 + "s"} };
  }
  
`;

const TimeLineDot = styled.div<{ $index: number }>`
  width: 20px;
  height: 20px;
  right: -10px;
  top: 32px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  @media screen and (max-width: 600px) {
    left: 20px;
  }
  ${({ $index }) => ($index % 2 === 0 ? "" : "left: -10px")}
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
  border-${({ $index }) =>
    $index % 2 === 0 ? "left" : "right"}: 15px solid #fff;
  ${({ $index }) => ($index % 2 === 0 ? "right" : "left")}: -14px;
  @media screen and (max-width: 600px) {
    border-right: 15px solid #fff;
    border-left: 0;
    left: -14px;
  }
`;

export default TimelineItem;
