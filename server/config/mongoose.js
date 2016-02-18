var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multicourse db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String, 
    lastName: String,
    userName: String
  });
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      User.create({firstName: 'Rob', lastName: 'Merrill', userName: 'Rob'});
      User.create({firstName: 'Marissa', lastName: 'Merrill', userName: 'Marissa'});
      User.create({firstName: 'Oso', lastName: 'Merrill', userName: 'Oso'});
      User.create({firstName: 'Tom', lastName: 'Merrill', userName: 'Tom'});
    }
  })

}

