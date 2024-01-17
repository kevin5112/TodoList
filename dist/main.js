/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
class UI {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qiw4Q0FBOEMsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgbG9hZEhvbWVwYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nJyk7XG4gICAgVUkuaW5pdEJ1dHRvbnMoKTtcbiAgICBVSS5jbGVhclRleHRGaWVsZHMoKTtcbiAgfVxuXG4gIC8vIENSRUFUSU5HIENPTlRFTlRcbiAgc3RhdGljIGNyZWF0ZVRhc2sobmFtZSwgZHVlRGF0ZSA9ICdObyBEYXRlJykge1xuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0YXNrIHdpdGggbmFtZTogJyArIG5hbWUpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi10YXNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC10YXNrLXBhbmVsXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj4ke25hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtdGFzay1wYW5lbFwiPlxuICAgICAgICAgICAgICA8cCBpZD1cImR1ZS1kYXRlXCIgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBgO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgdXNlclByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJQcm9qZWN0TGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBwcm9qZWN0IHdpdGggbmFtZTogJyArIHByb2plY3ROYW1lKTtcbiAgICB1c2VyUHJvamVjdExpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXNlci1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10YXNrc1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPiR7cHJvamVjdE5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIGA7XG4gIH1cblxuICAvLyBJTklUSUFMSVpFIEFMTCBCVVRUT05TXG4gIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICAvLyBOQVYgQkFSIEJVVFRPTlNcbiAgICBsZXQgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3gnKTtcbiAgICBsZXQgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbiAgICBsZXQgdGhpc1dlZWtCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpc1dlZWsnKTtcblxuICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgbGV0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpO1xuXG4gICAgLy8gQUREIFRBU0sgQlVUVE9OU1xuICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcblxuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcblxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlbkluYm94VGFza3MpO1xuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlblRvZGF5VGFza3MpO1xuICAgIHRoaXNXZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlbldlZWtUYXNrcyk7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlbkFkZFByb2plY3RQb3B1cCk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFByb2plY3QpO1xuICAgIGNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jYW5jZWxQcm9qZWN0KTtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuQWRkVGFza1BvcHVwKTtcblxuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFRhc2spO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlUG9wdXBzKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuSW5ib3hUYXNrcygpIHtcbiAgICBVSS5vcGVuVGFza3MoJ0luYm94JywgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgb3BlblRvZGF5VGFza3MoKSB7XG4gICAgVUkub3BlblRhc2tzKCdUb2RheScsIHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5XZWVrVGFza3MoKSB7XG4gICAgVUkub3BlblRhc2tzKCdUaGlzIFdlZWsnLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuVGFza3MocHJvamVjdE5hbWUsIHByb2plY3RCdG4pIHtcbiAgICBsZXQgbmF2QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtZGVmYXVsdC1idG4nKTtcbiAgICAvLyBhbHNvIGdldCBhbGwgdGhlIHByb2plY3QgYnRucyAobm8gc2V0IGRlZmF1bHQgY2xhc3MgZm9yIHRoZW0geWV0KVxuXG4gICAgbmF2QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIC8vIGxvYWQgdGFzayBsaXN0IHdpdGggdGhlIHByb2plY3QgbmFtZVxuICAgIC8vIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gIH1cblxuICAvLyBQUk9KRUNUXG4gIHN0YXRpYyBvcGVuQWRkUHJvamVjdFBvcHVwKCkge1xuICAgIGxldCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdElucHV0Jyk7XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGFkZFByb2plY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0VGV4dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUZXh0RmllbGQnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0VGV4dEZpZWxkLnZhbHVlO1xuXG4gICAgaWYgKHByb2plY3RUZXh0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgcHJvamVjdCBuYW1lJyk7XG4gICAgICBVSS5jYW5jZWxQcm9qZWN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVUkuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdFRleHRGaWVsZC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNhbmNlbFByb2plY3QoKSB7XG4gICAgbGV0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0SW5wdXQnKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGFkZFByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8vIFRBU0tTXG4gIHN0YXRpYyBvcGVuQWRkVGFza1BvcHVwKCkge1xuICAgIGxldCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVXNlcklucHV0Jyk7XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHVzZXJJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9zZVBvcHVwcygpIHtcbiAgICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFVzZXJJbnB1dCcpO1xuICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcblxuICAgIHVzZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2soKSB7XG4gICAgbGV0IHVzZXJUZXh0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclRleHRGaWVsZCcpO1xuICAgIGxldCB0YXNrTmFtZSA9IHVzZXJUZXh0RmllbGQudmFsdWU7XG5cbiAgICBpZiAodXNlclRleHRGaWVsZC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB0YXNrIG5hbWUnKTtcbiAgICAgIFVJLmNsb3NlUG9wdXBzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVUkuY3JlYXRlVGFzayh0YXNrTmFtZSk7XG4gICAgdXNlclRleHRGaWVsZC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy8gQ0xFQVJJTkcgQ09OVEVOVFxuICBzdGF0aWMgY2xlYXJUZXh0RmllbGRzKCkge1xuICAgIGxldCB1c2VyVGV4dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJUZXh0RmllbGQnKTtcbiAgICBsZXQgcHJvamVjdFRleHRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGV4dEZpZWxkJyk7XG5cbiAgICB1c2VyVGV4dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgcHJvamVjdFRleHRGaWVsZC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy8gRU1FUkdFTkNZIENMRUFSIEZVTkNUSU9OXG4gIHN0YXRpYyBjbGVhcigpIHtcbiAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgVUkuY2xlYXJUYXNrcygpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgbGV0IHVzZXJQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyUHJvamVjdExpc3QnKTtcbiAgICB1c2VyUHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUYXNrcygpIHtcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=