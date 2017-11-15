var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Headline = mongoose.model('Headline');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.sendFile('submit.html', { root: 'public' });
});

/* POST submission. */
router.post('/headlines', function(req, res, next) {
  var newHeadline = Headline({
    title: 'Peter Quill',
    image: 'starlord55',
    description: 'password'
  });
  //var headline = new Headline(req.body);
  newHeadline.save(function(err, newHeadline){
    if(err){ return next(err); }
    res.json(newHeadline);
  });
});

/* GET headlines. */
router.get('/headlines', function(req, res, next) {
  Headline.find(function(err, headlines){
    if(err){ return next(err); }
    res.json(headlines);
  });
});

/* POST upvote. */
router.get('/vote', function(req, res, next) {
  res.render('index', { title: 'Vote' });
});

module.exports = router;
