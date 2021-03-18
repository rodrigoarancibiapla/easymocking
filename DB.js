
module.exports =class DB {
    constructor(config) {;}

    async getData() {
        
        return {"Status":"OK", Result: [{"name":"Oranges","amount":20},{"name":"Bananas","amount":10},{"name":"Apples","amount":12}]}
    }
}