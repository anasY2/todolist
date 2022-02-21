import Input from "./components/Input";
import List from "./components/List";
import Modal from "./components/Modal";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
function App() {
  const arrayItems=[];
  const [itemList,setItemList]=useState(arrayItems);
  const [show,setShow]=useState(false);
  function addItem(item){
   setItemList((prevState)=>{
return [
  item,
  ...prevState
]
   })
  }
 const filterArray=(unwantedItem)=>{
   setItemList(itemList.filter(item => item !== unwantedItem))
 }
function displayModal(display){
setShow(display);
}
  
  return(
    <Container sx={{ height: "100vh", width: "50%" }}>
    <Typography
      varaint="h1"
      textAlign="center"
      fontSize={50}
      sx={{ fontFamily: "Permanent Marker" }}
    >
      TO-DO LIST
    </Typography>
    {show === true &&<Modal  modalDisplay={displayModal} />}
    <Input newItem={addItem} displayModal={displayModal}  />
    <List list={itemList} deletion={filterArray}/>
  </Container>
  )
}

export default App;
