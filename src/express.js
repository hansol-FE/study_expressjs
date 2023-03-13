const exp = require('constants')
const express = require('express')
const http = require('http')

// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send('express response test')
// })

// app.listen(port, () => {
//   console.log(`express server test port : ${port}`)
// })

class ApiServer extends http.Server {
  constructor(config) {
    const app = express()
    super()
    this.config = config
    this.app = app
    this.currentCons = new Set()
    this.busy = new WeakSet()
    this.stopping = false
  }

  async start() {}
}

const init = async (config = {}) => {
  const server = new ApiServer(config)
  return server.start()
}
