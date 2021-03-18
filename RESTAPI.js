const fetch = require("node-fetch");


module.exports =class RESTAPI {
    
    constructor(config) {
        this.url = config.url;
    }
    async callAPI() {

        return new Promise((resolve, reject) =>{
            var res = fetch(this.url);
            res.then(res=>res.json()).
            then(res=>{
                resolve(res);
            }).catch((error)=> {
                reject(error);
            });
        });
    }

    async  getData() {

        try {
            return {"Status":"OK", Result: await this.callAPI()}
        }catch(error) {
            return {"Status":"ERROR", Result: error}
        
        }
        
    }
}
