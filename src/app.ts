import inquirer from "inquirer"

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name ?",
      default: "Iron man",
    },
    {
      type: "input",
      name: "languages",
      message: "what is your preferred language ?",
      default: "Golang",
    },
  ])
  .then((answers) => {
    console.log(answers.name)
    console.log(answers.languages)
  })
  .catch((err) => console.log(err))
