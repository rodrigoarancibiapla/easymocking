const FruitsFactory = require("./FruitsFactory");

module.exports = class Fruits {
   
    constructor(config) {

        this.config = config;
        var fruitsFObj = new FruitsFactory();
        this.endPoint = fruitsFObj.getEndPoint(config.endPoint,this.config);
    }
  
    async getFruits() {

        try {
            return await this.endPoint.getData();
        }catch(error){
            return {"Status":"ERROR", Result: error}
        }
    }
   
    validate(fruits) {
        
        if (fruits.Status=="OK")
           return fruits.Result.every((e)=>Number.isInteger(e.amount));
        else return null;
    }
}
