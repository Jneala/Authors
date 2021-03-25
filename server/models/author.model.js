const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Author's need names."],
      minLength: [3, "Author name must be longer than 3 characters"]
  }

}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;