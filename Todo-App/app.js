const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText === '') {
        return;
    }
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.toggle('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.textContent = taskText;
    li.appendChild(deleteBtn);
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    taskList.appendChild(li);
    taskInput.value = '';
});