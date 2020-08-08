let mongoose = require('mongoose');

exports.User = mongoose.model('User', require('./UserSchema'));
exports.Chat = mongoose.model('Chats', require('./ChatSchema'));