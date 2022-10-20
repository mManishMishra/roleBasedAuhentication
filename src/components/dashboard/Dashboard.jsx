import React from "react";
import { Footer } from "../pages/Footer";
import { Navbar } from "../pages/Navbar";

export const Dashboard=()=>{
    return(
        <>
            
            <Navbar />
            {/* <LeadCount /> */}
            <h1>This is Dashboard</h1>
        
            <Footer />
        </>
    )
}