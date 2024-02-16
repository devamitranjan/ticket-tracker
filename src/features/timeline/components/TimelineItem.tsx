import React from "react";
import styled, { keyframes } from "styled-components";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  $index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ $index, children }) => {
  return (
    <TimelineItemContainer $index={$index}>
      <TimeLineDot $index={$index} />
      {children}
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
      $index !== 0 ? 2 * $index - 1 + "s" : 0 + "s"};
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

export default TimelineItem;
