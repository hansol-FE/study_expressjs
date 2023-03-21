const RedisCluster = require('redis-cluster')
const RedisClient = requrie('redis')

let redis, redisSub
let subCallbacks = new Map()

async function getRedisClient(sub) {
  // const conf = await
}

process.on('SIGTERM', () => Server.shutdown())
process.on('SIGINT', () => Server.shutdown())
