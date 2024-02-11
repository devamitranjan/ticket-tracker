import React, { KeyboardEvent } from "react";
import styled from "styled-components";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dashboard: React.FC<DashboardProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ticket, setTicket] = React.useState(id ?? "");
  const handleSubmit = React.useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      console.log("asdfgh", e);
      if (e.key.toLowerCase() === "enter") navigate(`/timeline/${ticket}`);
    },
    [ticket, navigate]
  );
  const { pathname } = useLocation();
  const isTimelineDashboard = /\/timeline\/?$/.test(pathname);

  return (
    <>
      <TicketContainer $isTimelineDashboard={isTimelineDashboard}>
        <h1>Welcome To Timeline Viewer</h1>
        <input
          type='text'
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder='Enter the ticket id to create/view the timeline'
        />
      </TicketContainer>
      <Outlet />
    </>
  );
};

const TicketContainer = styled.div<{ $isTimelineDashboard: boolean }>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${({ $isTimelineDashboard }) =>
    $isTimelineDashboard
      ? {
          justifyContent: "center",
          height: "100vh",
        }
      : {}}
  & h1 {
    color: #fff;
    align-items: center;
    display: none;
  }
  & input {
    width: 80%;
    border-radius: 10px;
    border: 1px solid #fff;
    outline: none;
    font-size: 2rem;
    text-align: center;
    margin: 3rem 0;
    padding: 1rem;
  }

  & input::focus {
    border: 2px solid #f5f1e9;
  }
`;

export default Dashboard;
