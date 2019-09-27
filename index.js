const express = require('express');
const app = express();

const movieType =
[
    {id:1,typeName:'Action'},
    {id:2,typeName:'Romance'},
    {id:3,typeName:'Horror'}
];

app.get('/', (req,res) =>{
    res.send([movieType]);
});

app.listen(5000);
console.log('listening to port 5000');

//PORT 

