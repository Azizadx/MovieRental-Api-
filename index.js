const express = require('express');
const app = express();

//Lets create const data and use it for now 
const listMovieTypes =
[
    {id:1,movieType:'Action'},
    {id:2,movieType:'Romance'},
    {id:3,movieType:'Horror'}
];

app.get('/', (req,res) =>{
    res.send([listMovieTypes]);
});

app.listen(5000);
console.log('listening to port 5000');

//PORT 

