let d = document, [inputs, a] = [
    d.querySelectorAll('[type="text"]'),
    d.querySelector('#submit')]
a.disabled = true

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input',() => {
    let values = []
    inputs.forEach(v => values.push(v.value))
    a.disabled = values.includes('')
  })
}
let form = document.getElementById("login");

  form.addEventListener("submit", function (eventData) {
    eventData.preventDefault(); // Stop it being sent
    let elements = this.elements; // Get all form elements
    let username = elements.name.value; // Select username entered
    let msg = "Welcome " + username; // Create welcome message
    document.getElementById("login").textContent = msg; // Write welcome message
  });