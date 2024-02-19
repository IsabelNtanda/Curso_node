const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'p1',
      message:'Qual é  o seu nome',
     
    },
    {
      name:'p2',
      message:'Qual é a sua idade'
    },
  ])
  .then((answer) => {
  console.log(chalk.black.bgYellow(` o seu nome é ${answer.p1} e vc está com ${answer.p2} anos `))
  })
  .catch((err) => console.log(err))
