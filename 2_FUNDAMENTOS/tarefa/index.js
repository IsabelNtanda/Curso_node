const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'nome',
      message:'Qual é  o seu nome',
     
    },
    {
      name:'idade',
      message:'Qual é a sua idade'
    },
  ])
  .then((answer) => {
  if(!answer.nome||!answer.idade){
  throw new Error (chalk.red('O nome e a idade são obrigatórios'))
  }
  const response= ` o seu nome é ${answer.nome} e vc está com ${answer.idade} anos `
  console.log(chalk.black.bgYellow(response))
  })
  .catch((err) => console.log(err))
