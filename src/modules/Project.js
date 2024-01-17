export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  gettaskList() {
    return this.taskList;
  }

  settaskList(taskList) {
    this.taskList = taskList;
  }

  gettaskList(taskName) {
    return this.taskList.find((task) => task.getName() === taskName);
  }

  contains(taskName) {
    return this.taskList.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    if (this.taskList.find((task) => task.getName() === newTask.name)) return;
    this.taskList.push(newTask);
  }

  deleteTask(taskName) {
    this.taskList = this.taskList.filter((task) => task.getName() !== taskName);
  }
}
