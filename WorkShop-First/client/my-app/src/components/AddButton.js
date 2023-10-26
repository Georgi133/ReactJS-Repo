import UserCreating from "./UserCreating";
import { useState } from "react";

export default function AddButton ({
    onUserCreateSubmit,
    formValues,
    formChangeHandler,
    formErrors,
    validateForm,

}) {

    const [isShowed,setIsShowed] = useState(false);
    
    const onAddForm = () => {
        setIsShowed(true);
    }

    const onClose = () => {
        setIsShowed(false);
    } 

    return (
        <>
         {isShowed && <UserCreating 
         validateForm={validateForm}
         formErrors={formErrors}
         formValues={formValues}
          onClose={onClose}
           onUserCreateSubmit={onUserCreateSubmit}
           formChangeHandler={formChangeHandler}/>}
         <button onClick={onAddForm} className="btn-add btn">Add new user</button>
        </>
    );
}