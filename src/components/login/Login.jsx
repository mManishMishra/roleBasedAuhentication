import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);


export const schema =Yup.object().shape({
    email:Yup.string()
           .required("email is required field")
           .email("please enter valid email")
,
    password: Yup.string()
              .required("please enter password")
              .min(4,"password should be longer than 4 characters")
              .minLowercase(1,"password must contain lowercase")
              .minUppercase(1,"password must contain one uppercase")
              .minNumbers(1,"password must contain one number")
              .minSymbols(1,"password must contain a symbol")
})


const Login=()=>{
    const navigate=useNavigate();
    // using state to chnage eye and type of input field
    const [passwordType, setPasswordType] =useState("password")
    const [eye, setEye]= useState({openEye:{display:"none"}, closeEye:{display:"block"}})
    const database = [{email:"admin@admin.com" , password:"1@Abc",role:"admin"}, {email:"user@user.com" ,password:"A1@bc", role:"user"}]
    const forgotPassword=()=>{
        navigate('/resetpassword')
    }

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
        return(
        <>
            <Formik
            validationSchema={schema}
            initialValues={{email:"user@user.com",password:"A1@bc"}}
            onSubmit={(data)=>{
                const verifyUser= database.find((user)=>user.email===data.email)
                if(verifyUser && verifyUser.password===data.password && verifyUser.role==="user"){
                // alert(JSON.stringify(data))
                    localStorage.setItem("isLoggedIn", true)
                    localStorage.setItem("role", "user")
                    navigate('/user')
                }
                else if(verifyUser && verifyUser.password===data.password && verifyUser.role==="admin"){
                    localStorage.setItem("isLoggedIn", true)
                    localStorage.setItem("role","admin")
                    navigate('/admin')
                }
                else{
                    alert("user isn't assigned a role")
                 }
                // setting user exist in databse and displaying dashboard
            }
            }>
       {({values,errors,touched,handleChange ,handleBlur,handleSubmit}
       )=>(
    <div className="login">
        <div className="form">
            <form noValidate onSubmit={handleSubmit}>
                <span>Fraud Dashboard </span>
                <input type="email" name="email" 
                onChange={handleChange} onBlur={handleBlur} 
                value={values.email} 
                placeholder="enter email" className="form-control inp_text" id="email"/>
                <p className="error">
                    {errors.email && touched.email && errors.email}
                </p>
                <div onClick={togglePassword}>
            <i class="fa-solid fa-eye-slash" id="close_eye" style={eye.closeEye}></i>
            <i class="fa-sharp fa-solid fa-eye" id="open_eye" style={eye.openEye}></i>
          </div>
                <input type={passwordType} name="password" 
                onChange={handleChange} onBlur={handleBlur} 
                value={values.password} placeholder="enter password" className="form-control"/>
                <p className="error">
                    {errors.password && touched.password && errors.password}
                </p>

                <button type="submit">Login</button>
            </form>
            <button id="forgot_password" onClick={forgotPassword}>Forgot password?</button>
        </div>
    </div>
)}
            </Formik>
        </>
    )

}


export default Login;