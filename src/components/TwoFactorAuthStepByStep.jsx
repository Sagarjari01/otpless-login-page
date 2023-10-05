import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const TwoFactorAuthStepByStep = () => {
  const navigate = useNavigate();
  const otpless = (otplessUser) => {
    // alert(JSON.stringify(otplessUser));
    console.log({ otplessUser });
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script);
    window.otpless = (otplessUser) =>{
        const {mobile,email} = otplessUser
        
        if(mobile && email){
            navigate('/dashboard')
        }else{
            const loginPage = document.getElementById('otpless-login-page')
            mobile?loginPage.setAttribute('data-ch', 'email'):loginPage.setAttribute('data-ch', 'mobile');
            openModal()
        }
    }
    return () => {
      const divid = document.getElementById("otplessIdScript");
      document.body.removeChild(divid);
    };
  }, []);

  const openModal = () => {
    window.otplessInit();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
  };

  const closeModal = (e) => {
    const modalContainer = document.getElementById("modalContainer");
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  };
  return (
    <div>
      <div class="modal-container" id="modalContainer" onClick={closeModal}>
        <div class="modal">
          <div id="otpless-login-page"></div>
        </div>
      </div>
      <button id="loginBtn" onClick={openModal}>
        Login
      </button>
    </div>
  );
};

export default TwoFactorAuthStepByStep;
