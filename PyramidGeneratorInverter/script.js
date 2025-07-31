function generatePyramid() {
  const char = document.getElementById("char").value || "#";
  const count = parseInt(document.getElementById("rows").value) || 10;
  const output = document.getElementById("output");
  let result = "";

  for (let i = 1; i <= count; i++) {
    const spaces = " ".repeat(count - i);
    const chars = char.repeat(2 * i - 1);
    result += spaces + chars + "\n";
  }

  output.textContent = result;
}

function generateInvertedPyramid() {
  const char = document.getElementById("char").value || "#";
  const count = parseInt(document.getElementById("rows").value) || 10;
  const output = document.getElementById("output");
  let result = "";

  for (let i = count; i >= 1; i--) {
    const spaces = " ".repeat(count - i);
    const chars = char.repeat(2 * i - 1);
    result += spaces + chars + "\n";
  }

  output.textContent = result;
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}
