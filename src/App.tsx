import React from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layout/MainLayout';

function App() {
  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: <div>Dashboard</div>,
        },
      ],
    },
  ]);

  return <React.Fragment>{routes}</React.Fragment>;
}

export default App;
