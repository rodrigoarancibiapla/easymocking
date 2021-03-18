const DB = require("./DB");
const RESTAPI = require("./RESTAPI");

module.exports =  class FruitsFactory {

    EndPoint =  {
        "DB":DB,
        "HTTP":RESTAPI
    }
    getEndPoint(from, config) {
        
        return new (this.EndPoint[from])(config)

    }
}