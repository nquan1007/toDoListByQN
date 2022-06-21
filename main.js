window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => { // Sự việc diễn ra khi bấm Add Task
        
        e.preventDefault();
        // ngăn chặn việc bấm Add Task là bị refresh

        const task = input.value;

        if (!task) {
            alert('Please write down your task before press Add Task');
            return; // ? chua hieu
        }

        const taskElement = document.createElement("div"); // tạo thẻ div taskElement
        taskElement.classList.add("task"); // thêm class input value vào taskElement

        const taskContentElement = document.createElement("div"); // tạo thẻ div chứa content của task
        taskContentElement.classList.add("content"); // thêm class content vào taskContentElement
        // taskContentElement.innerText = task;

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "type";
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly");

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("actions");
        
        const buttonEditElement = document.createElement("button");
        buttonEditElement.classList.add("edit");
        buttonEditElement.innerHTML = "Edit";

        taskActionsElement.appendChild(buttonEditElement);

        const buttonDeleteElement = document.createElement("button");
        buttonDeleteElement.classList.add("delete");
        buttonDeleteElement.innerHTML = "Delete";

        taskActionsElement.appendChild(buttonDeleteElement);
        
        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        input.value = ""; // sau khi add task thì input = '';

        buttonEditElement.addEventListener('click', () => {
            if (buttonEditElement.innerText.toLowerCase() == "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                buttonEditElement.innerText = "save";
            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                buttonEditElement.innerText = "edit";
            }
        })

        buttonDeleteElement.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        })
    })
})

// con cac

