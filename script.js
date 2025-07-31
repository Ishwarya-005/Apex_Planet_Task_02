function validateForm(event) {
  let isValid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('ageError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('messageError').textContent = '';

  const name = document.getElementById('name').value;
  if (!/^[a-zA-Z]+$/.test(name)) {
    document.getElementById('nameError').textContent = 'Name must contain letters only';
    isValid = false;
  }

  const age = document.getElementById('age').value;
  if (!/^\d+$/.test(age) || age <= 0) {
    document.getElementById('ageError').textContent = 'Age must be a positive integer';
    isValid = false;
  }

  const phone = document.getElementById('phone').value;
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Phone number must be 10 digits';
    isValid = false;
  }

  const message = document.getElementById('message').value.trim();
  if (message === '') {
    document.getElementById('messageError').textContent = 'Please enter a message';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }

  return isValid;
}

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';

    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    removeButton.addEventListener('click', function (event) {
      event.stopPropagation();
      taskList.removeChild(taskItem);
    });
  }
});

