const fs = require('fs') 
const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoarquivo.txt'
fs.rename(arqAntigo,arqNovo,function(err){
if(err){
console.log(err)
return
}
console.log(` o nome do arquivo antigo e ${arqAntigo} e o nome do arquivo novo e ${arqNovo}`)
})