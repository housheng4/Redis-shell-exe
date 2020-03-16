var makeConf = {};
var RedisConf = require('./RedisConf.js')
var PGConf = require('./PGConf.js')
var MongConf = require('./MongoDB.js')

makeConf.getRedisConf = () => {
    RedisConf.resultConf()
}

makeConf.getPGConf = () => {
    PGConf.resultConf()
}

makeConf.getMongoDBConf = ()=>{
    MongConf.resultConf()
}
module.exports = makeConf;