import React, { useState } from "react";
import auth from "../services/authService";
import "../styles/login.scss";
import stock from '../assets/blue-flower.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    try {
      if(email.length > 0 && password.length > 0) {
         auth.login(email, password).then(()=>{
          window.location = '/home';
         }).catch(err=>console.error(err));
       } else {
         alert('Please enter correct username and password!');
       }
      } catch (ex) {
        alert('Invalid username or password, please try again!');
        console.log(`Error logging in: ${ex}`);
      }
  }

  return (
    <React.Fragment>
      <div className="login-container p-0 d-inline-flex" style={{height:'100vh',alignItems:'center',width:'100%',backgroundImage: 'linear-gradient(to right,#0088b6,#009de4)'}}>
        <div className="col-12 pl-0 pr-0 setHeightWrap" style={{display:'inline-flex',alignItems:'center',height:'80vh'}}>
            <div className="col-12 p-0" style={{textAlign:'-webkit-center',height:'100%'}}>
              <div className="col-lg-9 col-md-10 col-sm-10 col-xs-12 pl-0 pr-0" style={{height:'100%',background:'#fff'}}>
                <div id="backgimg"  className="row m-0 " style={{height:'100%'}}>
                  <div  className="col-lg-6 col-md-6  col-sm-6 col-xs-12 p-0" style={{height:'100%',textAlign:'left'}}>            
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 login-form-2 alignItemss" style={{display:'flex',alignItems:'center'}}>
                    <div className="col-12">
                    <div className="row m-0">
                      <div className="col-12">
                        <h2 style={{color:'#2c81c0',lineHeight:2}}>User Login</h2>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col-12">
                        <div className="form-group" style={{display:'inline-flex',alignItems:'center'}}>
                        <svg style={{position:'relative',left:'30px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0062cc" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                          <input className="login-inputs"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="true" required/>
                        </div>
                      </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group" style={{display:'inline-flex',alignItems:'center'}}>
                        <svg style={{position:'relative',left:'30px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0062cc" class="bi bi-lock-fill" viewBox="0 0 16 16">
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg> 
                        <input className="login-inputs" style={{borderRadius:'35px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" autoComplete="true" required/>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btnSubmit" onClick={(e) => handleSubmit(e)}>Login</button>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </React.Fragment>
  );
}