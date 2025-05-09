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
