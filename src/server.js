/* 내장모듈로 서버 생성 */
const http = require('http')

http
  .createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'text/plain' })
    response.write('Hello Server')
    response.end()
  })
  .listen(3000)
