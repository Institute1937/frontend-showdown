'use strict';

require('./index.html');

var Elm = require('./Main.elm');
// var mountNode = document.getElementById('main');

// The third value on embed are the initial values for incomming ports into Elm
// var app = Elm.Main.embed(mountNode);

var app = Elm.Main.fullscreen();