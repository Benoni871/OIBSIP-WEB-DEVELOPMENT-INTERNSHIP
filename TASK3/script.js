function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
