import { ITicket } from '../features/timeline/timeline.types';

const data: ITicket = {
  ticketId: 'Ticket-101 Timeline',
  ticketDescription: 'This is the first dummy description for the ticket',
  ticketItems: [
    {
      discussionHeader: 'Discussion 1',
      lastModified: '05-02-2024',
      discussionDetails: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        praesentium assumenda optio voluptates porro sunt dignissimos
        corrupti facilis magnam expedita neque, totam quaerat eum
        distinctio repellat, natus quae, recusandae iste?`,
    },
    {
      discussionHeader: 'Discussion 2',
      lastModified: '05-02-2024',
      discussionDetails: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        praesentium assumenda optio voluptates porro sunt dignissimos
        corrupti facilis magnam expedita neque, totam quaerat eum
        distinctio repellat, natus quae, recusandae iste?`,
    },
    {
      discussionHeader: 'Discussion 3',
      lastModified: '05-02-2024',
      discussionDetails: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        praesentium assumenda optio voluptates porro sunt dignissimos
        corrupti facilis magnam expedita neque, totam quaerat eum
        distinctio repellat, natus quae, recusandae iste?`,
    },
  ],
};

export default data;
