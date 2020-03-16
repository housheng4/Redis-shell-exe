var makeConf = {};
var RedisConf = require('./RedisConf.js')
var PGConf = require('./PGConf.js')

makeConf.getRedisConf = () => {
    RedisConf.resultConf()
}

makeConf.getPGConf = () => {
    PGConf.resultConf()
}

module.exports = makeConf;