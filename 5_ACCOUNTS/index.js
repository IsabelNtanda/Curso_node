// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')
operation()

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer',
        choices: [
          'Criar Conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action']
      if (action === 'Criar Conta') {
        createAccount()
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

// Criar a conta

function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildingAccount()
}
// construindo criar a conta

function buildingAccount() {
  inquirer
    .prompt([
      {
        name: 'accoutname',
        message: 'Digite um nome para a sua conta',
      },
    ])
    .then((answer) => {
      // const {accoutname} = answer
      const accoutname = answer['accoutname']
      console.info(accoutname)

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }

      if (fs.existsSync(`accounts/${accoutname}.json`)) {
        console.log(
          chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
        )
        buildingAccount()
      }
      fs.writeFileSync(
        `accounts/${accoutname}.json`,
        '{"balance":0}',
        function (err) {
          console.log(err)
        },
      )
      console.log(chalk.green("Parabéns a sua conta foi criada"))
      operation()
    })
    .catch((err) => console.log(err))
}
