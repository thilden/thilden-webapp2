import * as http from 'http'

const port = 4100

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('Hello!')
})

server.listen(port)
console.log('Node.js server listening on port', port)
