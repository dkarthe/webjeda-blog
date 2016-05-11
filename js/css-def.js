var cb = function() {
var l = document.createElement('link'); l.rel = 'stylesheet';
var m = document.createElement('link'); m.rel = 'stylesheet';
l.href = '/css/main.css';
m.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
var i = document.getElementsByTagName('head')[0]; i.parentNode.insertBefore(m, i);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);