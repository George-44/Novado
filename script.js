let x = document.getElementById('btn');

x.onclick = addTask;

function addTask() {
    const taskbox = document.querySelector('.taskbox');
    taskbox.innerHTML = '<div class="tasks"> <img class="check-logo" src="Logos/check.png" alt="check-logo"> <p>დავალება 1</p> <img class="trash-logo" src="Logos/trash.png" alt="trash"></img> </div>';

    let trashIcons = document.querySelectorAll('.trash-logo');
    trashIcons.forEach(icon => {
        icon.addEventListener('click', removeTask);
    });

};

function removeTask(event) {
    const taskToRemove = event.target.closest('.tasks');

    if (taskToRemove) {
        taskToRemove.remove();
    }
};

