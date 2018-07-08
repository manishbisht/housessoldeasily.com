module.exports = function (app) {
    var user = require('../controller/userController');

    app.route('/signup')
        .post(user.createAccount);

    app.route('/login')
        .post(user.checkLogin);
};