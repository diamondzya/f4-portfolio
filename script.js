document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.getElementById('typed-h1');
  const name = "Cyrus Daniel Madriaga";
  h1.innerHTML = 'Hi, I am <span id="typed-name"></span>';
  const span = document.getElementById('typed-name');
  let i = 0;

  function typeName() {
    if (i < name.length) {
      span.textContent += name[i];
      i++;
      setTimeout(typeName, 15); // Adjust speed here
    } else {
      span.style.color = "rgb(243, 126, 126)";
    }
  }
  typeName();


});
