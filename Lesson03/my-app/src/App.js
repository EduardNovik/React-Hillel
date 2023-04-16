import * as React from "react";
import { Paper } from "@mui/material";
import DataTable from "./components/DataTable";


export default function App() {


  return (
    <Paper sx={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', height:"100vh"}}>
      <DataTable />
    </Paper> 
  );
}
 