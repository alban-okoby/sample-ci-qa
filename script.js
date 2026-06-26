const tasks = [];

function render() {
  const ul = document.getElementById('task-list');
  /*ul.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    ul.appendChild(li);
  });*/
}

document.getElementById('add-btn').onclick = () => {
  const input = document.getElementById('new-task');
  tasks.push({ id: Date.now(), name: input.value });
  input.value = '';
  render();
};
