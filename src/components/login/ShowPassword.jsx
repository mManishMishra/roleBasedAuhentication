import { useState } from "react"

export const ShowPassword=()=>{
    const [passwordType , setPasswordType] =  useState("password")
  
    const [openEye , setOpenEye] =useState({display:"none"})
   const [closeEye , setCloseEye]= useState({display:"block"})
  


    const togglePassword=()=>{
        if(passwordType==="password"){
           
           setPasswordType("text")
           setCloseEye({display:"none"})
           setOpenEye({display:"block"})
           return;
        }
        
        setPasswordType("password")
        setOpenEye({display:"none"})
        setCloseEye({display:"block"})
     }
    return(
        <>
          <div onClick={togglePassword}>
            <i class="fa-solid fa-eye-slash" id="close_eye" style={closeEye}></i>
            <i class="fa-sharp fa-solid fa-eye" id="open_eye" style={openEye}></i>
          </div>
        </>
    )
}