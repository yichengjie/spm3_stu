var config = require('./config');
var $ = require('jquery');
module.exports = function() {
    $('body').html(config.text);
};