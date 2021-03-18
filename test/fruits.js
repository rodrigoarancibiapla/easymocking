const assert = require("assert");


describe("fruits amount", async () => {
    var Fruits = require("../Fruits");
    var config=require("../config");
    var fruitsObj = null;
    
    beforeEach(async()=>{
        fruitsObj = new Fruits(config);
    });

    afterEach(async()=>{
        delete require.cache[require.resolve("../Fruits")];
        Fruits = require("../Fruits");
    });

    it("validate amount", async() => {
        
        fruitsObj.__proto__.getFruits = async function () {
            return {"Status":"OK", Result: [{"name":"Oranges","amount":20},{"name":"Bananas","amount":10},{"name":"Apples","amount":12}]}
        }
        var fruits=await fruitsObj.getFruits();
    
        assert.equal(fruitsObj.validate(fruits),true);
        fruitsObj.__proto__.getFruits = async function () {
            return {"Status":"OK", Result: [{"name":"Oranges","amount":20},{"name":"Bananas","amount":10},{"name":"Apples","amount":"invalid"}]}
        }
        var fruits=await fruitsObj.getFruits();
        assert.equal(fruitsObj.validate(fruits),false);
        

    });

    it("validate exception", async() => {
    
        fruitsObj.endPoint.__proto__.getData= async function () {
            throw ("Timeout")
        }

        var fruits=await fruitsObj.getFruits();
          
        assert.equal(fruitsObj.validate(fruits),null);
  
    });
});
