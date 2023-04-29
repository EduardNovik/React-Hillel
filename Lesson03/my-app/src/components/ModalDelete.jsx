import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

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

export default function ModalDelete(props) {

  const handleClose = () => props.setModalDeleteState(false);

  const deleteHandler = () => {
    const filteredData = props.data.filter((elem) => elem.id !== props.itemId)
    props.setData(filteredData)
    props.setModalDeleteState(false)
  }

  return (
    <div>
      <Modal
        open={props.modalDeleteState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete the post?
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            sx={{ justifyContent: "center", mb: "20px", pt: "20px" }}
          >
            <Button variant="contained" onClick={deleteHandler}>Yes</Button>
            <Button variant="outlined" onClick={handleClose}>No</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
