import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isWorkEmail,setIsWorkEmail] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script)
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      // Your code here
      navigate('/dashboard')
    };
    return () => {
      const divid = document.getElementById("otplessIdScript");
      document.body.removeChild(divid);
    };
  }, []);

  const openModal = () =>{
    window.otplessInit()
    const modalContainer = document.getElementById('modalContainer');
    const modal = document.getElementById('otpless-login-page')
    modalContainer.style.display = 'flex';
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  };

  const closeModal = (e) => {
    const modalContainer = document.getElementById('modalContainer');
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  };
  return (
    <div>
      <div class="modal-container" id="modalContainer" onClick={closeModal}>
        <div class="modal">
          <div id="otpless-login-page"></div>
        </div>
      </div>
      <button id="loginBtn" onClick={openModal}>Login</button>
    </div>
  );
};

export default Home;
