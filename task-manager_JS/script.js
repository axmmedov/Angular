// O'zgaruvchilarni e'lon qilish
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const allBtn = document.getElementById('allBtn');
const pendingBtn = document.getElementById('pendingBtn');
const completedBtn = document.getElementById('completedBtn');

// LocalStorage'dan vazifalarni olish yoki bo'sh array yaratish
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Vazifalarni ekranga chiqarish
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) li.classList.add('completed');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.onclick = () => toggleComplete(index);

        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);
        taskList.appendChild(li);
    });
}

// Yangi vazifa qo‘shish
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

// Vazifani bajarilgan deb belgilash
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Vazifani o‘chirish
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Vazifalarni localStorage'ga saqlash
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filtr tugmalariga hodisalar qo‘shish
allBtn.addEventListener('click', () => renderTasks('all'));
pendingBtn.addEventListener('click', () => renderTasks('pending'));
completedBtn.addEventListener('click', () => renderTasks('completed'));

// Dasturni ishga tushirish
renderTasks();
