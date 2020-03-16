var MongoDB = {};
var fs = require('fs')
var path = require('path')
var writeFileRecursive = require('../common.js')

MongoDB.resultConf = () => {
    fs.readFile(path.join(__dirname, "../Json/dbConfigMo.json"), (err, data) => {

        if (err) {
            console.log(err)
            return
        }
        let JsonConf = data.toString()

        fs.readFile(path.join(__dirname, "../lastConf/mongod.conf"), (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            let MongConf = data.toString()

            console.log(MongConf)
        })
    })
}
MongoDB.resultConf()