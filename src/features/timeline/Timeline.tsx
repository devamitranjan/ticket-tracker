import React from 'react';

import data from '../../mocks/ticketData';
import TimelineItem from './TimelineItem';
import './timeline.css';

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline: React.FC<TimelineProps> = ({ className }) => {
  const itemLength = data.ticketItems.length;

  return (
    <React.Fragment>
      <div className='timeline-header'>
        <h3>{data.ticketId}</h3>
        {data.ticketDescription}
      </div>

      <div className='timeline'>
        {data.ticketItems.map((ticketItem, index) => (
          <TimelineItem
            ticketItem={ticketItem}
            isLeft={index % 2 === 0}
            key={index}
          />
        ))}

        <div
          key={itemLength + 1}
          className={`container ${
            itemLength % 2 === 0 ? 'left' : 'right'
          }-container`}
        >
          <div
            className={`circle ${itemLength % 2 === 0 ? '' : 'circle-right'}`}
          ></div>
          <div className='text-box'>
            <h2>{'Enter heading'}</h2>
            <small>{new Date().toDateString()}</small>
            <p>{'Enter the details'}</p>
            <span
              className={`${
                itemLength % 2 === 0 ? 'left' : 'right'
              }-container-arrow`}
            ></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
