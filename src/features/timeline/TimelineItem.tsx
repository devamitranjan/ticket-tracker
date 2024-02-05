import React from 'react';
import { ITicketItem } from './timeline.types';

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isLeft: boolean;
  ticketItem: ITicketItem;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ isLeft, ticketItem }) => {
  return (
    <div className={`container ${isLeft ? 'left' : 'right'}-container`}>
      <div className={`circle ${isLeft ? '' : 'circle-right'}`}></div>
      <div className='text-box'>
        <h2>{ticketItem.discussionHeader}</h2>
        <small>{ticketItem.lastModified}</small>
        <p>{ticketItem.discussionDetails}</p>
        <span className={`${isLeft ? 'left' : 'right'}-container-arrow`}></span>
      </div>
    </div>
  );
};

export default TimelineItem;
