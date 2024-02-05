const inquirer = require('inquirer')

// criando um array de objecto
inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual a primeira nota',
    },

    {
      name: 'p2',
      message: 'Qual a segunda nota',
    },
  ])
  .then((answers) => {
    console.log(answers)

    const media = ((parseInt(answers.p1) + parseInt(answers.p2))/2)
    console.log(` A media e : ${media}`)
  })
  .catch((err) => console.log(err))
