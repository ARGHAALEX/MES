const employees = [
  {
    id: 1,
    email: "updated_employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Complete the first project milestone.",
        date: "2024-12-22",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Review the team's progress.",
        date: "2024-12-20",
        category: "Management",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Prepare a presentation for stakeholders.",
        date: "2024-12-25",
        category: "Presentation",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1",
        description: "Submit expense reports.",
        date: "2024-12-19",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Organize team lunch.",
        date: "2024-12-23",
        category: "Team Building",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Update system documentation.",
        date: "2024-12-24",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Draft marketing strategy for Q1.",
        date: "2024-12-22",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Conduct competitor analysis.",
        date: "2024-12-21",
        category: "Analysis",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 3",
        description: "Finalize product designs.",
        date: "2024-12-18",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Coordinate event logistics.",
        date: "2024-12-26",
        category: "Events",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Check inventory levels.",
        date: "2024-12-20",
        category: "Inventory",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Plan next quarter's budget.",
        date: "2024-12-28",
        category: "Budgeting",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1",
        description: "Respond to client inquiries.",
        date: "2024-12-18",
        category: "Customer Service",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Prepare training materials.",
        date: "2024-12-27",
        category: "Training",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Analyze sales data.",
        date: "2024-12-24",
        category: "Sales",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
