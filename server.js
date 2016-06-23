const config = require('rc')('elasticbeans', {
  secret: 'SECRETS'
})

const port = process.env.PORT || 3000

const Http = require('http')

const server = Http.createServer((req, res) => {
  res.write(`${Date.now()} ${config.secret}`)
  res.end()
})

server.listen(port)

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/')
