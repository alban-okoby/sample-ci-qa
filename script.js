const tasks = [];

function render() {
  const ul = document.getElementById('task-list');
  ul.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    ul.appendChild(li);
  });

  li.textContent = task.name + ' ';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      tasks.splice(idx, 1);
      render();
    };
    li.appendChild(delBtn);
}

document.getElementById('add-btn').onclick = () => {
  const input = document.getElementById('new-task');
  tasks.push({ id: Date.now(), name: input.value });
  input.value = '';
  render();
};