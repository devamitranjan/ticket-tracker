import React from 'react';
import { Button } from 'reactstrap';
import { ColDef } from 'ag-grid-community';

import DataGrid from '../../component/DataGrid';

interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dashboard: React.FC<DashboardProps> = () => {
  const columns: ColDef[] = [
    { field: 'ticketId' },
    { field: 'lastModified' },
    { field: 'alerts' },
  ];
  return <DataGrid columns={columns} data={[]} key='tickets' />;
};

export default Dashboard;
