import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('nodejs express')
})

app.listen(8000, () => {
  console.log('server start')
})
