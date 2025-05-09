const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Clone initial tasks into the working array
const tasks = [...initialTasks];

// Function to add a new task
function addTask() {
  if (tasks.length >= initialTasks.length + 3) {
    alert("There are enough tasks on your board, please check them in the console.");
    logAllTasks();
    logCompletedTasks();
    return;
  }
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  const status = prompt("Enter task status (todo, doing, done):");

  const lastId = tasks[tasks.length - 1]?.id || 0;
  const newTask = {
    id: lastId + 1,
    title: title?.trim() || "Untitled Task",
    description: description?.trim() || "No description",
    status: status?.trim().toLowerCase() || "todo",
  };

  tasks.push(newTask);
  console.log("Task added:", newTask);
}

// Function to log all tasks
function logAllTasks() {
  console.log("=== All Tasks ===");
  tasks.forEach(task => console.log(task));
}

// Function to log only completed tasks
function logCompletedTasks() {
  console.log("=== Completed Tasks ===");
  const doneTasks = tasks.filter(task => task.status === "done");
  doneTasks.forEach(task => console.log(task));
}

// ✅ Trigger addTask when page loads
window.onload = function () {
  addTask();
};


