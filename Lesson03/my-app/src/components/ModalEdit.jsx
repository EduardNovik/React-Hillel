import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit(props) {

  const [postName, setPostName] = useState('')
  const [postEmail, setPostEmail] = useState('')
  const [postCity, setPostCity] = useState('')
  const [postCompany, setPostCompany] = useState('')

  const handleClose = () => props.setModalEditState(false);

  const editHandler = () => {
    const editedItem = props.data.map((item) => {
     if(item.id === props.itemId) {
      return {...item, name:postName, email:postEmail, address:{...item.address, city:postCity}, company:{...item.company, name:postCompany}} 
     }
     else {
      return item
     }
    }) 
    props.setData(editedItem)
    props.setModalEditState(false)
  }

  return (
    <>
      <Modal
        open={props.modalEditState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit post
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2">
            Type the data that you like to edit
          </Typography>

          <Stack
            component="form"
            spacing={2}
            direction="column"
            sx={{
                mt:'20px'
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Name" variant="outlined" value={postName} onChange={(e)=>setPostName(e.target.value)}/>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" value={postEmail} onChange={(e)=>setPostEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="City" variant="outlined" value={postCity} onChange={(e)=>setPostCity(e.target.value)}/>
            <TextField id="outlined-basic" label="Company" variant="outlined" value={postCompany} onChange={(e)=>setPostCompany(e.target.value)}/>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ justifyContent: "center", mb: "20px", pt: "20px" }}
          >
            <Button variant="contained" onClick={editHandler}>Submit</Button>
            <Button variant="outlined" onClick={handleClose}>Close</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
