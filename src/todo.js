const tasks = [];
function addTask(name) {
  tasks.push({ id: Date.now(), name });
}
function deleteTask(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx !== -1) tasks.splice(idx, 1);
}
function getTasks() {
  return [...tasks];
}
module.exports = { addTask, deleteTask, getTasks };