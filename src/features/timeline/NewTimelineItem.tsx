import React from "react";
import styled from "styled-components";

interface NewTimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  $index: number;
}

const NewTimelineItem: React.FC<NewTimelineItemProps> = ({ $index }) => {
  return (
    <NewTimelineItemContainer $index={$index}>
      <HorizontalBar />
      <VerticalBar />
    </NewTimelineItemContainer>
  );
};

const HorizontalBar = styled.div`
  height: 3rem;
  width: 0.25rem;
  background-color: #c0c0c0;
  border-radius: 10%;
  position: absolute;
  @media screen and (max-width: 600px) {
    margin: 25px auto;
  }
`;

const VerticalBar = styled.div`
  min-height: 0.25rem;
  min-width: 3rem;
  background-color: #c0c0c0;
  border-radius: 10%;
`;

const NewTimelineItemContainer = styled.div<{ $index: number }>`
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.3rem;
  ${({ $index }) => ($index % 2 === 0 ? "right: -0.25rem;" : "left: -0.25rem;")}
  &:hover {
    cursor: pointer;
    ${HorizontalBar}, ${VerticalBar} {
      background-color: #5a5a5b;
    }
  }
  @media screen and (max-width: 600px) {
    left: -0.25rem;
  }
`;
export default NewTimelineItem;
