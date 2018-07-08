var mongoose = require('mongoose');
var User = mongoose.model('users');

exports.createAccount = function(req, res) {
    console.log(req.body);
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.checkLogin = function(req, res) {
    User.find(req.body, { _id : 1, email : 1 }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};