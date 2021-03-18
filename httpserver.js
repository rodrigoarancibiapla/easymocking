
const express =require('express');
const app = express();

app.get("/getFruits",(req,res) => 
{
    return res.json([{"name":"Oranges","amount":20},{"name":"Bananas","amount":10},{"name":"Apples","amount":12}]);
});

app.listen(8000,()=>{
    console.log("Listening port 8000");
})