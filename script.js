
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";
let resetNext = false;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("clear")) {
      current = "";
      display.textContent = "0";
      return;
    }

    if (value === "←") {
      current = current.slice(0, -1);
      display.textContent = current || "0";
      return;
    }

    if (value === "=") {
      try {
        current = eval(current).toString();
        display.textContent = current;
        resetNext = true;
      } catch {
        display.textContent = "Error";
        current = "";
      }
      return;
    }

    if (resetNext) {
      current = "";
      resetNext = false;
    }

    current += value;
    display.textContent = current;
  });
});
