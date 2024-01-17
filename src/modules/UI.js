export default class UI {
  static loadHomepage() {
    console.log('Loading');
    UI.initButtons();
    UI.clearTextFields();
  }

  // CREATING CONTENT
  static createTask(name, dueDate = 'No Date') {
    let taskList = document.getElementById('taskList');
    console.log('Creating task with name: ' + name);
    taskList.innerHTML += `
          <button class="button-task">
            <div class="left-task-panel">
              <i class="far fa-circle"></i>
              <p class="task-content">${name}</p>
            </div>
            <div class="right-task-panel">
              <p id="due-date" class="due-date">${dueDate}</p>
            </div>
          </button>
          `;
  }

  static createProject(projectName) {
    let userProjectList = document.getElementById('userProjectList');
    console.log('Creating project with name: ' + projectName);
    userProjectList.innerHTML += `
          <button class="user-project">
            <i class="fas fa-tasks"></i>
            <span>${projectName}</span>
          </button>
          `;
  }

  // INITIALIZE ALL BUTTONS
  static initButtons() {
    // NAV BAR BUTTONS
    let inbox = document.getElementById('inbox');
    let todayBtn = document.getElementById('today');
    let thisWeekBtn = document.getElementById('thisWeek');

    let addProjectBtn = document.getElementById('addProjectBtn');
    let addProject = document.getElementById('addProject');
    let cancelProject = document.getElementById('cancelProject');

    // ADD TASK BUTTONS
    let addTaskBtn = document.getElementById('addTaskBtn');

    let add = document.getElementById('add');
    let cancel = document.getElementById('cancel');

    inbox.addEventListener('click', UI.openInboxTasks);
    todayBtn.addEventListener('click', UI.openTodayTasks);
    thisWeekBtn.addEventListener('click', UI.openWeekTasks);

    addProjectBtn.addEventListener('click', UI.openAddProjectPopup);
    addProject.addEventListener('click', UI.addProject);
    cancelProject.addEventListener('click', UI.cancelProject);

    addTaskBtn.addEventListener('click', UI.openAddTaskPopup);

    add.addEventListener('click', UI.addTask);
    cancel.addEventListener('click', UI.closePopups);
  }

  static openInboxTasks() {
    UI.openTasks('Inbox', this);
  }

  static openTodayTasks() {
    UI.openTasks('Today', this);
  }

  static openWeekTasks() {
    UI.openTasks('This Week', this);
  }

  static openTasks(projectName, projectBtn) {
    let navBtns = document.querySelectorAll('.nav-default-btn');
    // also get all the project btns (no set default class for them yet)

    navBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    projectBtn.classList.add('active');
    // load task list with the project name
    // loadTasks(projectName);
  }

  // PROJECT
  static openAddProjectPopup() {
    let addProjectInput = document.getElementById('addProjectInput');

    this.classList.add('hidden');
    addProjectInput.classList.remove('hidden');
  }

  static addProject() {
    let projectTextField = document.getElementById('projectTextField');
    let projectName = projectTextField.value;

    if (projectTextField.value === '') {
      alert('Please enter a valid project name');
      UI.cancelProject();
      return;
    }

    UI.createProject(projectName);
    projectTextField.value = '';
  }

  static cancelProject() {
    let addProjectInput = document.getElementById('addProjectInput');
    let addProjectBtn = document.getElementById('addProjectBtn');

    addProjectBtn.classList.remove('hidden');
    addProjectInput.classList.add('hidden');
  }

  // TASKS
  static openAddTaskPopup() {
    let userInput = document.getElementById('addUserInput');

    this.classList.add('hidden');
    userInput.classList.remove('hidden');
  }

  static closePopups() {
    let userInput = document.getElementById('addUserInput');
    let addTaskBtn = document.getElementById('addTaskBtn');

    userInput.classList.add('hidden');
    addTaskBtn.classList.remove('hidden');
  }

  static addTask() {
    let userTextField = document.getElementById('userTextField');
    let taskName = userTextField.value;

    if (userTextField.value === '') {
      alert('Please enter a valid task name');
      UI.closePopups();
      return;
    }

    UI.createTask(taskName);
    userTextField.value = '';
  }

  // CLEARING CONTENT
  static clearTextFields() {
    let userTextField = document.getElementById('userTextField');
    let projectTextField = document.getElementById('projectTextField');

    userTextField.value = '';
    projectTextField.value = '';
  }

  // EMERGENCY CLEAR FUNCTION
  static clear() {
    UI.clearProjects();
    UI.clearTasks();
  }

  static clearProjects() {
    let userProjectList = document.getElementById('userProjectList');
    userProjectList.innerHTML = '';
  }

  static clearTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  }
}
