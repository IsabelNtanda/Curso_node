

const chalk = require('chalk')

const nota = 9

if(nota>=9){
  console.log(chalk.green('parabens vc está aprovado'))
} else{
  console.log(chalk.bgred('parabens vc está reprovado'))
}
