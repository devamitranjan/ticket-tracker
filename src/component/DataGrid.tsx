import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface DataGridProps<T, P> {
  data: T[];
  columns: (ColDef<T, P> | ColGroupDef)[];
}

const DataGrid = <T, P>({
  data,
  columns,
}: DataGridProps<T, P>): React.ReactElement => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "95%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState<T[]>([]);
  const [columnDefs] = useState(columns);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  const onGridReady = useCallback(() => {
    Promise.resolve(data).then((dt) => setRowData(dt as T[]));
  }, [data]);

  return (
    <>
      <div style={{ height: "450px" }}>
        <div style={containerStyle}>
          <div style={gridStyle} className={"ag-theme-quartz"}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              autoGroupColumnDef={autoGroupColumnDef}
              groupDisplayType={"multipleColumns"}
              onGridReady={onGridReady}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataGrid;
