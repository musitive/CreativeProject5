var mongoose = require('mongoose');
var HeadlineSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
  image: String,
  description: String
});
mongoose.model('Headline', HeadlineSchema);