/*************************************************************************************************************************/
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/movieDb');
var Schema = mongoose.Schema;
  var status = 'false';
var movieSchema = new Schema({
 Title: String,
 Year:String,
 /*Rated:String,
 Released:String,
 Runtime:String,
 Genre:String,
 Director:String,
 Writer:String,
 Actors:String,
 Plot:String,
 Language:String,
 Country:String,
 Awards:String,
 Poster:String,
 Metascore:String,
 imdbRating:String,
 imdbVotes:String,
 imdbID:String,
 Type:String,*/
 Response:String
});
var movieModel = mongoose.model('movieModel', movieSchema);

/*var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
 if (err) {
   console.log(err);
 } else {
   console.log('meow');
 }
});*/
/**************************************************************************************************************************/

var express = require('express');
var router = express.Router();

/*/Title/Harry Potter and the Deathly Hallows: Part 2/Year/2011/Rated/PG-13/Released/15 Jul 2011/Runtime/130 min/Genre/Adventure, Drama, Fantasy/Director/David Yates/Writer/Steve Kloves (screenplay), J.K. Rowling (novel)/Actors/Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe/Plot/Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts./Language/English/Country/USA, UK/Awards/Nominated for 3 Oscars. Another 45 wins & 87 nominations./Poster/http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg/Metascore/87/imdbRating/8.1/imdbVotes/530,955/imdbID/tt1201607/Type/movie/Response/True*/
/*router.post('/add/Title/:Title/Year/:Year/Rated/:Rated/Released/:Released/Runtime/:Runtime/Genre/:Genre/Director/:Director/Writer/:Writer/Actors/:Actors/Plot/:Plot/Language/:Language/Country/:Country//Awards/:Awards/Poster/:Poster/Metascore/:Metascore/imdbRating/:imdbRating/imdbVotes/:imdbVotes/imdbID/:imdbID/Type/:Type/Response/:Response', function (req, res) {*/
router.post('/add/Title/:Title/Year/:Year/Response/:Response',function(req,res){

  console.log("wwwwwwwwww");
  var newMovie = new movieModel( {
    Title: req.params['Title'],
    Year:req.params['Year'],
    /*Rated:req.params['Rated'],
    Released:req.params['Released'],
    Runtime:req.params['Runtime'],
    Genre:req.params['Genre'],
    Director:req.params['Director'],
    Writer:req.params['Writer'],
    Actors:req.params['Actors'],
    Plot:req.params['Plot'],
    Language:req.params['Language'],
    Country:req.params['Country'],
    Awards:req.params['Awards'],
    Poster:req.params['Poster'],
    Metascore:req.params['Metascore'],
    imdbRating:req.params['imdbRating'],
    imdbVotes:req.params['imdbVotes'],
    imdbID:req.params['imdbID'],
    Type:req.params['Type'],*/
    Response:req.params['Response']
  });
  console.log("eeeeeeeee");
  newMovie.save(function (err) {
   if (err) {
     console.log(err);
   } else {
     status = 'true';
     console.log('meow');
   }
  });
  res.send(status);
});

router.delete('/delete', function (req, res) {
  res.send('delete');
});

router.put('/update', function (req, res) {
  res.send('update');
});

router.get('/find', function (req, res) {
  res.send('find');
});

module.exports = router;
