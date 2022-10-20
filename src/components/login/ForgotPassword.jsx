import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import YupPassword from "yup-password";
import { ShowPassword } from "./ShowPassword";
YupPassword(Yup);

const schema=Yup.object().shape({
    email:Yup.string()
           .required("email is required field")
           .email("please enter valid email"),
    password: Yup.string()
           .required("please enter password")
           .min(4,"password should be longer than 4 characters")
           .minLowercase(1,"password must contain lowercase")
           .minUppercase(1,"password must contain one uppercase")
           .minNumbers(1,"password must contain one number")
           .minSymbols(1,"password must contain a symbol")
,   confirmPassword: Yup.string().when("password", {
    is: val=>(val && val.length>0 ?true:false),
    then: Yup.string().oneOf(
    [Yup.ref("password"),null],"Password and confirm password doesn't match")
}) 
})
export const ForgotPassword=()=>{
    const database = [{email:"abc@abc.com" , password:"1@Abc",role:"user"}, 
    {email:"user@user.com" ,password:"A1@bc", role:"admin"}]
    const [password, setPassword ] = useState({newPassword:"" ,oldPassword:""})
    const [checked, setChecked]= useState(false)
    const [displayPassword, setDisplayPassword] = useState({display:"none"})
    const [eye, setEye]= useState({openEye:{display:"none"}, closeEye:{display:"block"}})
    const [passwordType , setPasswordType] =  useState("password")


    // showing hiding password using eye
    const togglePassword=()=>{
        if(passwordType==="password"){
        setPasswordType("text")
        setEye({openEye:{display:"block"},closeEye:{display:"none"}})
      }
      else{
        setPasswordType("password")
        setEye({openEye:{display:"none"},closeEye:{display:"block"}})
      }
    }
    // Checkbox function
    const checkedStatus=()=>{
        setChecked(!checked)
    }
    return(
        <>
        <Formik
        validationSchema={schema}
        initialValues={{email:"abc@abc.com", password:"", changePassword:""}}
        onSubmit={(values)=>{
            const verifyUser=database.find((user)=>user.email===values.email)
            if(verifyUser && checked && values.password===values.confirmPassword){
                setPassword({newPassword:`New Password is : ${values.password}`, oldPassword:`old password is ${verifyUser.password}`})
                setDisplayPassword({display:"block"})
            }
            else if(checked===false && verifyUser){
                alert("please confirm you want to make changes")
            }
            else{
                setPassword(`User Doesn't exist`)
            }
        }}
        >{({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
          <div className="login">
            <div className="form forgot-password">
             <form noValidate onSubmit={handleSubmit}>
                <span> Reset Password </span>
                <input type="email" name="email" 
                onBlur={handleBlur}
                onChange={handleChange} 
                value={values.email} 
                placeholder="enter email" className="form-control inp_text" id="email"/>
                 <p className="error">
                    {errors.email && touched.email && errors.email}
                </p>
                <input type="password" name="password" 
                onChange={handleChange} onBlur={handleBlur} 
                value={values.password}  className="form-control" placeholder="enter new password"/>
                <div onClick={togglePassword}>
            <i class="fa-solid fa-eye-slash" id="close_eye" style={eye.closeEye}></i>
            <i class="fa-sharp fa-solid fa-eye" id="open_eye" style={eye.openEye}></i>
          </div>
                 <p className="error">
                    {errors.password && touched.password && errors.password}
                </p>
                 <input type="password" name="confirmPassword" 
                onChange={handleChange} onBlur={handleBlur} 
                value={values.confirmPassword}  className="form-control" placeholder="confirm new password"/>
               <div onClick={togglePassword}>
            <i class="fa-solid fa-eye-slash" id="close_eye" style={eye.closeEye}></i>
            <i class="fa-sharp fa-solid fa-eye" id="open_eye" style={eye.openEye}></i>
          </div>
               <p className="error">
                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </p>

                <input type="checkbox"  checked={checked} onChange={checkedStatus} className="checkbox"/>
                <button type="submit">Reset Password</button>
            </form>
            <p>{password.newPassword}</p>
                <p>{password.oldPassword}</p>
        </div>
      </div>
       )}</Formik>
        </>
    )
}