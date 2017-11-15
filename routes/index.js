var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Headline');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.sendFile('submit.html', { root: 'public' });
});

/* POST submission. */
router.get('/submit-entry', function(req, res, next) {
  var headline = new Headline(req.body);
  headline.save(function(err, headline){
    if(err){ return next(err); }
    res.json(headline);
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
