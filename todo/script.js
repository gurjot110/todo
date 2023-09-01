document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function addTask(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${text}
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);

        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
    }
});
