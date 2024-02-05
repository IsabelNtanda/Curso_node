

const readline = require('readline').createInterface({
input:process.stdin,
output:process.stdout,
})

readline.quetion('Qual é a sua linguagem favorita',(language) =>{
  console.log(`A nha linguagem de programacao e ${language}`)
  readline.close()
})


