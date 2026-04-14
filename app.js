const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // blokuje odświeżenie strony

    const value = input.value;

    if (value.trim() === "") return; // nie dodawaj pustych

    const li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);

    input.value = ""; // wyczyść pole
});