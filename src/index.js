const form = document.querySelector('#create-task-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.querySelector('#new-task-description').value
  const tasks = document.querySelector('#tasks')
  tasks.textContent = task
  })
