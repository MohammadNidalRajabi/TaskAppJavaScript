class Task {
  constructor(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
function getInput(input) {
  const readline = require("readline-sync");
  return readline.question(input);
}
const tasks = [];

function addTask() {
  const description = getInput("Enter Task Description: ");
  const dueDate = getInput("Enter Due Date: ");
  const priority = getInput("Enter Priority Level: ");
  const task = new Task(description, dueDate, priority);
  tasks.push(task);
}
function allTasks() {
  if (!tasks.length) {
    console.log("No Tasks");
  }
  console.log("All Tasks");
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1} ${task.description} [Due in: ${task.dueDate}, Priority: ${
        task.priority
      }] `
    );
  });
}
function allCompleteTasks() {
  const completedTasks = tasks.filter((task) => task.completed);
  if (!completedTasks.length) {
    console.log("No Tasks Completed");
  }

  console.log("All Tasks Completed");
  completedTasks.forEach((task, index) => {
    console.log(
      `${index + 1} ${task.description} [Due in: ${task.dueDate}, Priority: ${
        task.priority
      }] `
    );
  });
}
function markTaskAsCompleted() {
  const taskIndex = getInput("Enter The Task Number: ") - 1;

  if (taskIndex < 0 || taskIndex >= tasks.length) {
    console.log("Task Number Not Found!\n");
    return;
  }

  tasks[taskIndex].completed = true;
  console.log("Task Completed!\n");
}
function deleteTask() {
  const taskIndex = getInput("Enter The Task Number: ") - 1;

  if (taskIndex < 0 || taskIndex >= tasks.length) {
    console.log("Task Number Not Found!\n");
    return;
  }

  tasks.splice(taskIndex, 1);
  console.log("Task Deleted!\n");
}

function clearAllTasks() {
  tasks.length = 0;
  console.log("All tasks cleared!\n");
}
function sortTaskByDueDate() {
 tasks.sort((task1, task2) => {
    const date1 = new Date(task1.dueDate);
    const date2 = new Date(task2.dueDate);
    return date1 - date2;
  });

  console.log("Tasks sorted by due date!\n");
}
function sortByPriority() {
  tasks.sort((task1, task2) => {
    const priority1 = task1.priority.toLowerCase();
    const priority2 = task2.priority.toLowerCase();

    if (priority1 < priority2) {
      return -1;
    } else if (priority1 > priority2) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log("Tasks sorted by priority!\n");
}
function startApp() {
  console.log("***************************");
  console.log("Welcome to JS TODO-APP");
  console.log("***************************");

  while (true) {
    console.log("Select an action:");
    console.log("1) Add a new task");
    console.log("2) List all tasks");
    console.log("3) List completed tasks");
    console.log("4) Mark a task as done");
    console.log("5) Delete a task");
    console.log("6) Sort tasks by the due date");
    console.log("7) Sort tasks by priority");
    console.log("8) Clear all tasks");
    console.log("***************************");
    console.log("***************************");
    const choice = getInput("What's your choice? ");

    switch (choice) {
      case "1":
        addTask();
        break;

      case "2":
        allTasks();
        break;
      case "3":
        allCompleteTasks();
        break;
      case "4":
        markTaskAsCompleted();
        break;
      case "5":
        deleteTask();
        break;
      case "6":
        sortTaskByDueDate();
      case "7":

        sortByPriority();
        break;
      case "8":
        clearAllTasks();
        break;
      default:
        console.log("Invalid choice!\n");
        break;
    }
  }
}

startApp();