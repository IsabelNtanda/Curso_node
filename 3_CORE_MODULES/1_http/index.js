
const http = require('http')

const port = 3000

const server = http.createServer((res,req )=>{
res.write('oi http')
res.end()
})

server.listen(port, ()=>{
console.log('Server rodano')
})