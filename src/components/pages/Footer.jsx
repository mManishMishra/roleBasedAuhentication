import { useState } from "react"
import { FaFacebookSquare, FaGit, FaInstagramSquare, FaTwitter } from "react-icons/fa"



export const Footer=()=>{
   const [message, setMessage]= useState("")
    return(
        <>
        <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Company<span>logo</span></h3>
          
          <p className="footer-company-name">Mobility Inclusive © {new Date().toISOString().slice(0,10)}</p>
          <div className="footer-icons">
            <a href="#"><FaFacebookSquare className="facebook" /></a>
            <a href="#"><FaTwitter className="twitter" /></a>
            <a href="#"><FaGit className="facebook" /></a>
            <a href="#"><FaInstagramSquare className="instagram" /></a>
          </div>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Email" required/>
            <textarea name="message" placeholder="Message" value={message} onChange={e=> setMessage(e.target.value)} required/>
            <button href="mailto:manishmarv@gmail.com" onClick={e=>e.preventDefault()}>Send</button>
          </form>
        </div>
      </footer>
        </>
    )
}