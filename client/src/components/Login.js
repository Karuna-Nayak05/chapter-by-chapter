import { useEffect } from "react";

function Login({ onLogin }) {

  function handleCallbackResponse(response) {
    onLogin(response.credential);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {

  if (!window.google || !window.google.accounts || !window.google.accounts.id) {
    console.error("❌ Google script not loaded yet");
    return;
  }

  window.google.accounts.id.initialize({
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    callback: handleCallbackResponse,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("googleSignInButton"),
    {
      theme: "filled_blue",
      size: "large",
      width: "280",
      shape: "pill",
    }
  );
}, []);


  return (
    <div className="login-wrapper">

      {/* ✨ Magical floating particles */}
      <div className="sparkles"></div>

      <div className="login-box">

        <h1 className="login-title">📖 Chapter by Chapter</h1>

        <p className="login-subtitle">
          Begin your magical reading adventure ✨
        </p>

        <div id="googleSignInButton" className="google-btn-container"></div>

      </div>
    </div>
  );
}

export default Login;

