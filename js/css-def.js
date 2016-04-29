var cb = function() {

var m = document.createElement('link'); m.rel = 'stylesheet';
var n = document.createElement('link'); n.rel = 'stylesheet';

m.href = '/css/main.css';
n.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';

var i = document.getElementsByTagName('head')[0]; i.parentNode.insertBefore(m, i);
var j = document.getElementsByTagName('head')[0]; j.parentNode.insertBefore(n, j);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);