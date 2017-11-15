var express = require('express');
var router = express.Router();

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
  res.render('index', { title: 'Submit' });
});

/* GET headlines. */
router.get('/headlines', function(req, res, next) {
  res.render('index', { title: 'Headlines' });
});

/* POST upvote. */
router.get('/vote', function(req, res, next) {
  res.render('index', { title: 'Vote' });
});

module.exports = router;
