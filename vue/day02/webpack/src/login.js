var $ = require('jquery');
var template = require('./template/index.html');
require('./styles/index.css');



$('body').html(template);
$('#button').click(function () {
    var name = $('.name').val();
    var password = $('.password').val();
    console.log(name, password);

})