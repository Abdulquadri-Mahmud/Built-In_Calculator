
const viewContent = document.querySelector(".viewContent");
const input = document.querySelector(".input");
const display_error = document.querySelector(".display_error");
const clear_input = document.querySelector(".clear_input");
const enter_number = document.querySelector(".enter_number");

function expression() {
  //const display_error = document.querySelector(".display_error");
  for (let i = 1; i <= 100; i++) {
    let expressValue = `${input.value} x ${i} = ${input.value * i} \n`;
    //viewContent.innerText += expressValue;
    function Display_Error() {
      if (input.value === "") {
        display_error.style.display += "block";
        viewContent.innerText = "";
      }else if (isNaN(input.value)) {
        display_error.style.display = "block";
        viewContent.innerText = "";
      }else {
        viewContent.innerText += expressValue;
      }
    }
    Display_Error();
  }
}
//claer user input immediately after clicking the enter_number button.
function clear_inputUserInput() {
  input.value = "";
}

enter_number.addEventListener("click", () => {
  expression();
  clear_inputUserInput();
});

clear_input.addEventListener("click", () => {
  display_error.style.display = "none";
  viewContent.innerText = "";
});
