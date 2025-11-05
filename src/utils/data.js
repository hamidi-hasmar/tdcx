const data = [
  {
    id: 1,
    name: "Task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    completed: false,
  },
  {
    id: 3,
    name: "Task 3",
    completed: false,
  },
  {
    id: 4,
    name: "Task 4",
    completed: false,
  },
  {
    id: 5,
    name: "Task 5",
    completed: false,
  },
];

export const fetchTaskList = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 4000);
  });
};
