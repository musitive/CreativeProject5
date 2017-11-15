var mongoose = require('mongoose');
var HeadlinesSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
  description: String,
  image: String,
});
mongoose.model('Headlines', HeadlinesSchema);