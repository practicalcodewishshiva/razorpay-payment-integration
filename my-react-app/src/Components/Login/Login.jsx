import React, { useState } from 'react'
import './Login.css';
import logo from './myntra-image.jpg';
import { useNavigate } from "react-router-dom";


function Login() {
  const [num, setNum] = useState("")
  const navigate = useNavigate();


  function HandleChanging(e) {
    setNum(e.target.value);
    console.log(e.target.value);
  }
  function HandleButton() {

    if (num==="test") {
      navigate("/MainPage");
    } else {
      alert("invalid number");
    }

  }




  return (
    <>
      <div className="main-container">
        <div className="navabar">
          <h1>NavBar</h1>
        </div>
        <div className='main-login'>
          <div className="Login-bar">
            <div className="image-logo">
              <img id="image" src={logo} alt="logo" width="300" ></img>
            </div>

            <div className='Signup-container'>
              <h3>Login <span id="or">Or</span> SignUp</h3>
              <input onChange={HandleChanging} value={num} id="input-num" type="tel" placeholder='Mobile Number' maxLength="10"></input>
              <div className="checkbox-container">
                <input className="checkbox" type="checkbox"></input>
                <div className="box">By continuing, I agree to the <a id="achor" href="#">Term of use</a>& <a id="achor" href="#">Privacy Policy</a>  and I am above 18 years old.</div>
              </div>

              <div className='button'>
                <button onClick={HandleButton}>CONTINUE</button>
              </div>
            </div>


            <div className='trouble'>Have trouble logging in? <span id="get-help">Get help</span></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login;