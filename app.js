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

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";

    // checkbox -> przekreślenie
    checkbox.addEventListener("change", function() {
        li.classList.toggle("done");
    });

    // usuwanie elementu
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});