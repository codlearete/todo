import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props){  //props means properties
    const [modalIsOpen, SetModalIsOpen] = useState(false);

    function deleteHandler() {
        SetModalIsOpen(true)
    }
    function closeModalHandler(){
        SetModalIsOpen(false)
    }
    return(
        <div className="card">
            <h2 >{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler} >Delete</button>
            </div>
            {modalIsOpen && (<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>)}        {/* {modalIsOpen ? <Modal/> : null} */}
            {modalIsOpen && <Backdrop  onCancel = {closeModalHandler} />}  
        </div>
    );
}


export default Todo