let mode = window.localStorage.getItem("darkMode");
let darkBtn = document.querySelector("[name=dark-mode]");




if (mode === "enabled") {
    document.body.setAttribute("class", "darkmode");
    darkBtn.style.cssText = "background-color: var(--brand-secondary)";
   

  
  }

  darkBtn.addEventListener("click", () => {
    let mode = window.localStorage.getItem("darkMode");
    if (mode !== "enabled") {
      document.body.setAttribute("class", "darkmode");
      localStorage.setItem("darkMode", "enabled");
      darkBtn.style.cssText = "background-color: var(--brand-secondary)";
    
  
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", null);
      darkBtn.style.cssText = "background-color: var(--bg_default)";
     
    }
  });