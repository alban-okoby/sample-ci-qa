const { addTask, deleteTask, getTasks } = require('../todo');

test('addTask adds a new task', () => {
  addTask('Buy milk');
  expect(getTasks().length).toBe(1);
  expect(getTasks()[0].name).toBe('Buy milk');
});

test('deleteTask removes the correct task', () => {
  const tasks = getTasks();
  const id = tasks[0].id;
  deleteTask(id);
  expect(getTasks().length).toBe(0);
});