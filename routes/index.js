var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Headlines');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.sendFile('submit.html', { root: 'public' });
});

/* POST submission. */
router.post('/submit-entry', function(req, res, next) {
  var headlines = new Headlines(req.body);
  headlines.save(function(err, headlines){
    if(err){ return next(err); }
    res.json(headlines);
  });
});

/* GET headlines. */
router.get('/headlines', function(req, res, next) {
  Headlines.find(function(err, headlines){
    if(err){ return next(err); }
    res.json(headlines);
  });
});

/* POST upvote. */
router.get('/vote', function(req, res, next) {
  res.render('index', { title: 'Vote' });
});

module.exports = router;
