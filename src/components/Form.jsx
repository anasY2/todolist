import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
function Form(props) {
  const [insertData, setInsertedData] = useState("");

  const clickHandler = () => {
    if (insertData.trim().length === 0) {
      props.modalShow();

      return;
    } else {
      props.addData(insertData);
      setInsertedData("");
    }
  };
  function submitHandler(event) {
    event.preventDefault();
  }
  function changeHandler(event) {
    setInsertedData(event.target.value);
  }
  return (
    <Box component="form" onSubmit={submitHandler} pt={10}>
      <TextField
        onChange={changeHandler}
        value={insertData}
        type="text"
        fullWidth
        variant="outlined"
        color="primary"
        label="Enter Task"
      />
      <Box textAlign="right" mt={1}>
        <Button
          sx={{
            background: "black",
            "&:hover": {
              background: "#263238",
            },
          }}
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          onClick={clickHandler}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
export default Form;
