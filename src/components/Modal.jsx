import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css";
function Backdrop(){
  return <div className="backdrop" />
}
function ModalOverlay(props){
return (
  <Box
  sx={{
    position: "absolute",
    zIndex: "100",
    width: "50%",
    top: "30%",
    left: "25%",
    background: "white",
    borderRadius: "5px",
  }}
>
  <Box
    p={0.5}
    sx={{
      background: "black",
      borderTopRightRadius: "4px",
      borderTopLeftRadius: "4px",
    }}
  >
    <Typography variant="h4" color="white">
      Error
    </Typography>
  </Box>
  <Box sx={{ height: "120px", padding: "4px 3px" }}>
    <Typography variant="h4" color="black">
      Please enter something!!!
    </Typography>
  </Box>
  <Box textAlign="right" sx={{ padding: "0px 5px 6px 0px" }}>
    <Button
      variant="contained"
      disableElevation
      onClick={props.modalHandler}
      sx={{
        background: "black",
        "&:hover": {
          background: "#424242",
        },
      }}
    >
      Okay
    </Button>
  </Box>
</Box>
)
}
function Modal(props) {
  function modalHandler() {
    props.modalDisplay(false);
  }
  return (
    //     <div class="wrapper">
    //   <h2>Error</h2>
    //   <h4>Enter a task in the list!!</h4>
    //   <div class="button">
    //     <button variant="danger" onClick={modalHandler}>Okay</button>
    //   </div>
    // </div>
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay modalHandler={modalHandler} />,document.getElementById('overlay-root'))}
 
    </React.Fragment>
  );
}
export default Modal;
