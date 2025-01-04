// calculator logic

let inputBox = document.querySelector(".input-box");

let pushbutton = Array.from(document.querySelectorAll(".button"));

pushbutton.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        inputBox.innerText = "0";
        break;
      case "=":
        try {
            inputBox.innerText = eval(inputBox.innerText);
        } catch (e) {
            inputBox.innerText = "Error!";
        }
        break;
      case "+/-":
        if (inputBox.innerText.includes("-")) {
            inputBox.innerText = inputBox.innerText.replace("-", "");
        } else {
            inputBox.innerText = "-";
        }
        break;
      case "%":
        let textPassed = inputBox.innerText + "/100";
        inputBox.innerText = eval(textPassed);
        break;
      default: 
        if (inputBox.innerText === "0" && e.target.innerText !== ".") { 
            inputBox.innerText = e.target.innerText;
        } else {
            inputBox.innerText += e.target.innerText; 
        }
    }
  });
});

