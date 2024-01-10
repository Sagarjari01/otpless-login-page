import React, { useEffect } from "react";
import { initOTPless } from "../utills/initOtpless";

const Login = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");
    if (paramsValue) {
      openModal();
    }
  }, []);
  
  const callback = (otplessUser) => {
    const currentURL = window.location.href;
    const urlWithoutParams = currentURL.split("?")[0];
    window.history.pushState(null, "", urlWithoutParams);
    alert("OTPLESS DATA :"+JSON.stringify(otplessUser))
    window.location.href = '/dashboard';
  };
  
  const openModal = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");
    
    if (!paramsValue) {
      const currentURL = window.location.href;
      const newParam1 = "ex=true";
      const updatedURL = `${currentURL}?${newParam1}`;
      window.history.pushState(null, "", updatedURL);
    }
    
    initOTPless(callback);
    
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };

  const closeModal = (e) => {
    const currentURL = window.location.href;
    const urlWithoutParams = currentURL.split("?")[0];
    window.history.pushState(null, "", urlWithoutParams);
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

export default Login;
