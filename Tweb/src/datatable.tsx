import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Person, Employee } from './user';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows: (Person | Employee)[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon.snow@example.com', phone: '555-1234' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com', phone: '555-5678' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime.lannister@example.com', phone: '555-9012' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com', phone: '555-3456' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'daenerys.targaryen@example.com', phone: '555-7890' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'melisandre@example.com', phone: '555-2345' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ferrara.clifford@example.com', phone: '555-6789' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'rossini.frances@example.com', phone: '555-1234' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'harvey.roxie@example.com', phone: '555-5678' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: 800 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}