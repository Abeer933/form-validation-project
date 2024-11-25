document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = Array.from(document.getElementsByClassName("btn"));
  // adding event listner to buttons
  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.innerText;
      // adding functions to calculator
      switch (value) {
        case "AC":
          display.innerText = "0";
          break;
        case "=":
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error";
          }
          break;
        case "sq.":
          display.innerText = Math.pow(parseFloat(display.innerText), 2);
          break;
        case "%":
          display.innerText = parseFloat(display.innerText) / 100;
          break;
        default:
          if (display.innerText === "0") {
            display.innerText = value;
          } else {
            display.innerText += value;
          }
      }
    });
  });
});
