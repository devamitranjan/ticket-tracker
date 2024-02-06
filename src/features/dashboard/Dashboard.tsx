import React, { KeyboardEvent } from "react";
// import { Button } from "reactstrap";
// import { ColDef } from "ag-grid-community";

// import DataGrid from "../../component/DataGrid";
import "./dashboard.css";
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
    [ticket, navigate],
  );
  const { pathname } = useLocation();
  const isTimelineDashboard = /\/timeline\/?$/.test(pathname);

  return (
    <>
      <div
        className={`ticket-container ${isTimelineDashboard ? "center" : ""}`}
      >
        <h1>Welcome To Timeline Viewer</h1>
        <input
          type='text'
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder='Enter the ticket id to create/view the timeline'
        />
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
