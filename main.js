
function clock () {

var date = new Date();

var hours = date.getHours();
var mins = date.getMinutes();
var seconds = date.getSeconds();



var time = hours + ":" + mins + ":" + seconds

$('.container').html(time);


}




$(document).ready(function(){

setInterval('clock()', 1000);

});