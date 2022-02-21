import Form from "./Form";


function Input(props){
    function insertItem(data){
props.newItem(data);
    }
    function showModal(){
        props.displayModal(true);
    }
return(
        <Form addData={insertItem} modalShow={showModal} />
    )
}
export default Input;