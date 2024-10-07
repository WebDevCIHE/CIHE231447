export function handleFormFocus() {
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("focusin", (event) => {
        if (event.target.tagName === "INPUT") {
          event.target.style.backgroundColor = "yellow";
        }
      });
  
      form.addEventListener("focusout", (event) => {
        if (event.target.tagName === "INPUT") {
          event.target.style.backgroundColor = "white";
        }
      });
    });
  }
  
  export function handleButtonHover() {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "lightblue";
      });
  
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "";
      });
    });
  }