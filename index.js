const Display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  display.textContent += input;
  adjustFontSize();
}

function clearDisplay() {
  display.value = "";
}

function backSpace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = Number(eval(display.value).toFixed(9));
  } catch (error) {
    display.value = "Error";
  }
}

function adjustFontSize() {
  const parentWidth = display.offsetWidth;
  const contentWidth = display.scrollWidth;

  if (contentWidth > parentWidth) {
    const newFontSize =
      parseFloat(window.getComputedStyle(display).fontSize) - 5;
    display.style.fontSize = `${newFontSize}px`;
  }
}
