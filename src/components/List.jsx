
import { Box } from "@mui/system";
import Data from "./Data";
function List(props) {
  const deleteItem=(element)=>{
    props.deletion(element)
  }
  return (
    <Box mt={5}>
   {props.list.map(item => <Data title={item} removeItem={deleteItem} />)}
   
    </Box>
  );
}
export default List;
