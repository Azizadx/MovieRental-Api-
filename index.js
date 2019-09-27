
const express = require('express');
const app = express();

//Lets create const data and use it for now 
const listMovieTypes =
[
    {id:1,movieType:'Action'},
    {id:2,movieType:'Romance'},
    {id:3,movieType:'Horror'}
];

//This could be our page to see list of all movietypes
//And the get method is use to Read(display)content 
app.get('/',(req,res)=>{
    res.send('Welcome to Movie Rent Api :)))))');
});

app.get('/api/listmovietypes', (req,res) =>{
    res.send([listMovieTypes]);//return an array of listmovietype for now
});

//Getting a singl movietype
app.get('/api/listmovietypes/:id',(req,res)=>{
    //get what the user selected. step one
    //lookup the movieType. step two
    //if not found , return error. step three
    //Else return the movietype object. setp four
    //--------------------------------------------//
    //step one
    const movieType = listMovieTypes.find(c => c.id === parseInt(req.params.id));//this will help us to get what the user is selected
    console.log(movieType);
    //step two & step three
    if(!movieType)//which mean didsn't exist
    return res.status(404).send('Movie Type is not found :(((((');
    //step four
    res.send(movieType);
});


app.listen(5000);
console.log('listening to port 5000');

//PORT 

