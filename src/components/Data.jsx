import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
function Data(props) {
  const clickHandler = (event) => {
    props.removeItem(event.target.value);
  };
  return (
   
    <Box mb={1}>
      <Paper
        sx={{
          background: "black",
          color:'white',
          padding: "4px 5px",
          display: "flex",
          flexWrap:'wrap',
          flex:'1 1 100px',
          justifyContent: "space-between",
          alignItems:'center'
        }}
      >
        <Typography sx={{ fontSize: "1.3rem" }}>{props.title}</Typography>
        <Button value={props.title} onClick={clickHandler} variant="contained"sx={{background:'white',color:'black','&:hover':{background:'#CFD8DC'}}}>Delete</Button>
      </Paper>
    </Box>
   
    
  );
}
export default Data;
