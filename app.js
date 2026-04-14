const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const value = input.value;
    if (value.trim() === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.textContent = value;

    // reakcja na zaznaczenie
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });

    li.appendChild(checkbox);
    li.appendChild(text);

    list.appendChild(li);

    input.value = "";
});