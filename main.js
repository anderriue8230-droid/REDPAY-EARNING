// ===========================================================
//  REDPAY — AUTH SYSTEM (SIGN UP + SIGN IN)
//  Works on GitHub Pages, Websim, and Mobile browsers
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {

  console.log("main.js loaded successfully");

  const form = document.getElementById("authForm");
  const signupTab = document.getElementById("tabSignup");
  const signinTab = document.getElementById("tabSignin");
  const nameRow = document.getElementById("nameRow");
  const submitBtn = document.querySelector(".submit");

  // If the form doesn't exist, stop.
  if (!form) {
    console.error("AUTH FORM NOT FOUND. Check index.html");
    return;
  }

  // =============================
  // TAB SWITCH: SIGN UP / SIGN IN
  // =============================
  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    signinTab.classList.remove("active");
    nameRow.style.display = "flex";
    submitBtn.textContent = "Create account";
  });

  signinTab.addEventListener("click", () => {
    signinTab.classList.add("active");
    signupTab.classList.remove("active");
    nameRow.style.display = "none";
    submitBtn.textContent = "Sign in";
  });

  // =============================
  //  FORM SUBMISSION HANDLER
  // =============================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const pwd = document.getElementById("password").value.trim();
    const country = document.getElementById("countryLabel").value.trim();

    // ================
    // SIGN UP MODE
    // ================
    if (signupTab.classList.contains("active")) {
      if (!first || !last || !phone || !email || !pwd) {
        alert("Please fill all fields");
        return;
      }

      // Save account
      localStorage.setItem("registeredName", first + " " + last);
      localStorage.setItem("rp_phone", phone);
      localStorage.setItem("rp_email", email);
      localStorage.setItem("rp_pwd", pwd);
      localStorage.setItem("rp_country", country);
      localStorage.setItem("rp_balance", "160000");  // default balance

      alert("Account created successfully!");
      window.location.href = "dashboard.html";
      return;
    }

    // ================
    // SIGN IN MODE
    // ================
    if (signinTab.classList.contains("active")) {
      const savedPhone = localStorage.getItem("rp_phone");
      const savedPwd = localStorage.getItem("rp_pwd");

      if (phone === savedPhone && pwd === savedPwd) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect phone or password");
      }
    }
  });

});
