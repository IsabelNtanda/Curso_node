const http = require('http')
const port = 8080
const server = http.createServer((res, req) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Olá, este é meu primero server com html</h1>')
})
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
