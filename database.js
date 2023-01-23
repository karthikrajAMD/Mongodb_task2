//Users:
db.users.insertMany([
  {
    user_id: 1,
    name: "Raja",
    email: "Raja@gmail.com",
    mentor_id: 1,
  },
  {
    user_id: 2,
    name: "Vijay",
    email: "Vijay@gmail.com",
    mentor_id: 2,
  },
  {
    user_id: 3,
    name: "Ajith",
    email: "Ajith@gmail.com",
    mentor_id: 3,
  },
  {
    user_id: 4,
    name: "Simbu",
    email: "simbu@gmail.com",
    mentor_id: 4,
  },
  {
    user_id: 5,
    name: "Siva",
    email: "siva@gmail.com",
    mentor_id: 5,
  },
]);

// codekata
db.codekata.insertMany([
  {
    user_id: 1,
    no_of_problems_solved: 98,
  },
  {
    user_id: 2,
    no_of_problems_solved: 96,
  },
  {
    user_id: 3,
    no_of_problems_solved: 106,
  },
  {
    user_id: 4,
    no_of_problems_solved: 88,
  },
  {
    user_id: 5,
    no_of_problems_solved: 56,
  },
]);

// attendance
db.attendance.insertMany([
  {
    user_id: 1,
    topic_id: 1,
    present: true,
  },
  {
    user_id: 2,
    topic_id: 2,
    present: false,
  },
  {
    user_id: 3,
    topic_id: 3,
    present: false,
  },
  {
    user_id: 4,
    topic_id: 4,
    present: true,
  },
  {
    user_id: 5,
    topic_id: 5,
    present: true,
  },
]);

// topics
db.topics.insertMany([
  {
    topic_id: 1,
    topic: "Javascript",
    topic_date: new Date("2022-05-01"),
  },
  {
    topic_id: 2,
    topic: "HTML",
    topic_date: new Date("2022-07-01"),
  },
  {
    topic_id: 3,
    topic: "CSS",
    topic_date: new Date("2022-08-15"),
  },
  {
    topic_id: 4,
    topic: "ReactJS",
    topic_date: new Date("2022-09-12"),
  },
  {
    topic_id: 5,
    topic: "NodeJS",
    topic_date: new Date("2022-10-01"),
  },
]);

// tasks
db.tasks.insertMany([
  {
    task_id: 1,
    topic_id: 1,
    user_id: 1,
    task: "HTML task",
    due_date: new Date("2022-07-05"),
    submitted: true,
  },
  {
    task_id: 2,
    topic_id: 2,
    user_id: 2,
    task: "CSS task",
    due_date: new Date("2022-08-25"),
    submitted: true,
  },
  {
    task_id: 3,
    topic_id: 3,
    user_id: 3,
    task: "Javascript task",
    due_date: new Date("2022-05-20"),
    submitted: true,
  },
  {
    task_id: 4,
    topic_id: 4,
    user_id: 4,
    task: "ReactJS task",
    due_date: new Date("2022-09-25"),
    submitted: false,
  },
  {
    task_id: 5,
    topic_id: 5,
    user_id: 5,
    task: "NodeJS task",
    due_date: new Date("2022-11-15"),
    submitted: false,
  },
]);

// company_drives
db.company_drives.insertMany([
  {
    user_id: 1,
    drive_date: new Date("2022-12-05"),
    company_name: "Capgemini",
  },
  {
    user_id: 1,
    drive_date: new Date("2022-12-10"),
    company_name: "Wipro",
  },
  {
    user_id: 2,
    drive_date: new Date("2022-12-20"),
    company_name: "Microsoft",
  },
  {
    user_id: 3,
    drive_date: new Date("2022-12-15"),
    company_name: "Zoho",
  },
  {
    user_id: 5,
    drive_date: new Date("2022-12-30"),
    company_name: "Infosys",
  },
]);

// mentors
db.mentors.insertMany([
  {
    mentor_id: 1,
    mentor_name: "Swapnasri",
    mentor_email: "Swapnasri@gmail.com",
    mentee_count: 30,
  },
  {
    mentor_id: 2,
    mentor_name: "Sangeetha",
    mentor_email: "Sangeetha@gmail.com",
    mentee_count: 25,
  },
  {
    mentor_id: 3,
    mentor_name: "Ragav",
    mentor_email: "Ragav@gmail.com",
    mentee_count: 40,
  },
  {
    mentor_id: 4,
    mentor_name: "Vinoth",
    mentor_email: "vinoth@gmail.com",
    mentee_count: 12,
  },
  {
    mentor_id: 5,
    mentor_name: "Deva",
    mentor_email: "deva@gmail.com",
    mentee_count: 15,
  },
]);
