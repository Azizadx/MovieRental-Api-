
const express = require('express');//Import express help us to create http server
const Joi = require('joi');//Import Joi is package that help to create easy validation schema

const app = express();
app.use(express.json());
//Lets create const data and use it for now 
const listMovieTypes =
[
    {id:1,movieType:'Action'},
    {id:2,movieType:'Romance'},
    {id:3,movieType:'Horror'}
];

//This could be home page or main page
//And the get method is use to Read(display)content 
app.get('/',(req,res)=>{
    res.send('Welcome to Movie Rent Api :)))))');
});

//This could be our page to see list of all movietypes we have
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
    const movieType = listMovieTypes.find(type => type.id === parseInt(req.params.id));//this will help us to get what the user is selected
    console.log(movieType);
    //step two & step three
    if(!movieType)//which mean didsn't exist
    return res.status(404).send('Movie Type is not found :(((((');
    //step four
    res.send(movieType);
});


//Creatting new MovieType and add it to movielisttype we have .
//And we're using post method that going help us to create data and add to our api
app.post('/api/listmovietypes', (req,res) =>{
    //check if user is input the correct data . step one 
    //if not display error message to user. step two
    // else add the new movietype to list we have. step three
    //-------------------------------------------------------//
    //step one and two 
    const {error} = validateMovie(req.body);
    //400 bad request
    if (error)
        return  res.status(400).send(error.details[0].message);

    //step three
    const movieType = {
        id: listMovieTypes.length + 1,//get the current index 
        movieType: req.body.movieType,
    };
    listMovieTypes.push(movieType);
    res.send(movieType);

});

//Update an existting MovieType and add it to movielisttype we have .
//And we're using put method that going help us to update data .
app.put('/api/listmovietypes/:id',(req,res)=>{
   //get what the user selected. step one
    //lookup the movieType. step two
    //if not found , return error. step three
    //Else return the movietype object. setp four
    //--------------------------------------------//
    const movieType = listMovieTypes.find(type => type.id === parseInt(req.params.id));
    if(!movieType) return res.status(404).send('the MovieType doesnt exist:(((((((');
    const {error} = validateMovie(req.body);
    //400 bad request
    if (error) return res.status(400).send(error.details[0].message);

    //update MovieType
    movieType.movieType = req.body.movieType;
    //Return the update Movietype
    res.send(movieType);
});


//delete existting MovieType  .
//And we're using delete method that going help us to delete data .
app.delete('/api/listmovietypes/:id',(req,res)=>{
      //get what the user selected. step one
    //lookup the movieType. step two
    //if not found , return error. step three
    //Else delete movietype and return delete object. setp four
    //--------------------------------------------//
    //step one ,two ,and three
    const movieType = listMovieTypes.find(type => type.id === parseInt(req.params.id));
    if(!movieType) return res.status(404).send('the MovieType doesnt exist:(((((((');
    const {error} = validateMovie(req.body);
    //400 bad request
    if (error) return res.status(400).send(error.details[0].message);

    //step four
    //delete MovieType
    const index = listMovieTypes.indexOf(movieType);
    listMovieTypes.splice(index , 1);

});


//simple validtion function to check input.
function validateMovie(movieType)
{
    const schema = {
        movieType:Joi.string().min(3).required()
    };
    return Joi.validate(movieType, schema);
    
}


app.listen(5000);
console.log('listening to port 5000');

//PORT 

