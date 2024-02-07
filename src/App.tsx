import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Dashboard from "./features/dashboard/Dashboard";
import Timeline from "./features/timeline/Timeline";

function App() {
  const routes = useRoutes([
    {
      path: "timeline",
      element: <Dashboard />,
      children: [
        {
          path: ":id",
          element: <Timeline />,
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to='/timeline' />,
    },
  ]);

  return <React.Fragment>{routes}</React.Fragment>;
}

export default App;
