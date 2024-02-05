import React from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Dashboard from './features/dashboard/Dashboard';

import './App.css';
import Timeline from './features/timeline/Timeline';

function App() {
  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'timeline/:id',
          element: <Timeline />,
        },
      ],
    },
  ]);

  return <React.Fragment>{routes}</React.Fragment>;
}

export default App;
