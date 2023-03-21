const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const http = require('http')
const static = require('serve-static')

const app = express()
const port = 3001

// router
const admin = require('./routes/admin')

app.get('/', (req, res) => {
  res.send('express response test')
})

// 미들웨어 등록
app.use('/admin', admin)

app.listen(port, () => {
  console.log(`express server test port : ${port}`)
})

// class ApiServer extends http.Server {
//   constructor(config) {
//     const app = express()
//     super(app)
//     this.config = config
//     this.app = app
//     this.currentCons = new Set()
//     this.busy = new WeakSet()
//     this.stopping = false
//   }

//   async start() {
//     this.app.use(helmet())
//     this.app.use(cookieParser())
//     this.app.use(bodyParser())

//     this.app.use(
//       this.app.static(path.join(__dirname, 'dist'), {
//         setHeaders: (res, path) => {
//           res.setHeaders('Access-Control-Allow-Origin', '*') // 어떠한곳에서 요청을 하던간에 접근할 수 있도록 허락.
//           res.setHeaders('Access-Control-Allow-Headers', '*')
//           res.setHeaders('Access-Control-Allow-Methods', 'GET')
//         },
//       })
//     )

//     // 커스텀 에러 핸들링
//     this.app.use((err, req, res, next) => {
//       console.error('Internal error', err)
//       if (req) {
//         console.log(req)
//       }
//       if (res) {
//         console.log(res)
//       }
//       next()
//     })
//   }
// }

// const init = async (config = {}) => {
//   const server = new ApiServer(config)
//   return server.start()
// }
