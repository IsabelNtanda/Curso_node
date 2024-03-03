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
      } else if (action === 'Depositar') {
        deposit()
      } else if (action === 'Consultar conta') {
      } else if (action === 'Sacar') {
      } else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigado por usar o ACCOUNT!'))
        process.exit()
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
  return
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
        }
      )
      console.log(chalk.green('Parabéns a sua conta foi criada'))
      operation()
    })
    .catch((err) => console.log(err))
}

// Adicionar montante do usuario

function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountname',
        message: 'Qual o nome da sua conta',
      },
    ])
    .then((answer) => {
      const accountname = answer['accountname']
      // valida se a conta existe
      if (!checkAccount(accountname)) {
        return deposit()
      }
      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Quanto voce deseja depositar',
          },
        ])
        .then((answer) => {
          const amount = answer['amount']

          // add an amount
          addAmount(accountname,amount)
          operation()
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => {
      console.log(err)
    })
}
function checkAccount(accountname) {
  if (!fs.existsSync(`accounts/${accountname}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome'))
    return false
  }
  return true
}

function addAmount(accountname,amount) {
const account = getAccount(accountname)

console.log(account)


}

function getAccount(accountname) {
  const accountJson = fs.readFileSync(`accounts/${accountname}.json`, {encoding: 'utf8', flag: 'r',
  })

  return JSON.parse(accountJson)
}
