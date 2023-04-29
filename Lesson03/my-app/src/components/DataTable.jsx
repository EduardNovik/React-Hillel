import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from '@mui/icons-material/Edit';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ModalDelete from "./ModalDelete";
import ModalEdit from './ModalEdit'
import ModalAddPost from './ModalAddPost'

export default function DataTable() {
  const [data, setData] = useState();
  const [modalDeleteState, setModalDeleteState] = useState(false)
  const [modalEditState, setModalEditState] = useState(false)
  const [modalAddPostState, setModalAddPostState] = useState(false)
  const [itemId, setItemId] = useState(null)

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  const showDeleteModalHandler = (id) => {
    setModalDeleteState(true)
    setItemId(id)
  }

  const showEditModalHandler = (id) => {
    setModalEditState(true)
    setItemId(id)
  }

  const showAddPostModalHandler = () => {
    setModalAddPostState(true)
  }



  return (
    <>
      <Stack spacing={2} direction="row" sx={{justifyContent:'center', mb:'100px', pt:'100px'}}>
        <Button variant="contained" onClick={showAddPostModalHandler}>Add post</Button>
      </Stack>
      <TableContainer component={Paper} sx={{maxWidth:'1200px', m:'0 auto'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User number</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">e-mail</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
            {data &&    
              data.map((item) => { 
                return (
                  <TableRow
                    key={item.id}
                    sx={{ 
                      "&:last-child td, &:last-child th": { border: 0 },
                      '&:hover': {boxShadow:' 0px 0px 10px 0px gray'}
                   }}
                  >
                    <TableCell component="th" scope="row">{item.id}</TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.email}</TableCell>
                    <TableCell align="left">{item.address.city}</TableCell>
                    <TableCell align="left">{item.company.name}</TableCell>
                    <TableCell align="center" 
                      onClick={() => showEditModalHandler(item.id)}
                      sx={{transition:'all 0.2s', '&:hover':{transform :'scale(70%)', cursor:'pointer'} }}
                    ><EditIcon /></TableCell>
                    <TableCell 
                      align="center" 
                      onClick={() => showDeleteModalHandler(item.id)}  
                      sx={{transition:'all 0.2s', color:'red', '&:hover':{transform :'scale(70%)', cursor:'pointer', color:'black'} }}
                      >X</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDelete modalDeleteState={modalDeleteState} setModalDeleteState={setModalDeleteState} itemId={itemId} setData={setData} data={data}/>
      <ModalEdit modalEditState={modalEditState} setModalEditState={setModalEditState} itemId={itemId} setData={setData} data={data}/>
      <ModalAddPost modalAddPostState={modalAddPostState} setModalAddPostState={setModalAddPostState} setData={setData} data={data}/>
    </> 
  );
}
