var theGifs = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

for (i = 0; i < 28; i++){
    theGifs[i] = i+'.gif'
 }
// theGifs[0] = '1.gif'
// theGifs[1] = '2.gif'
// theGifs[2] = '3.gif'
// theGifs[3] = '4.gif'

// do not edit anything below this line

var j = 0
var p = theGifs.length;
var preBufferGifs = new Array()
for (j = 0; j < p; j++){
    preBufferGifs[j] = new Image()
    preBufferGifs[j].src = theGifs[j]
}
function showGif(place){
    var whichImage = Math.round(Math.random()*(p-1));
    document.write('<img class="'+place+'" src="images/gifs/'+theGifs[whichImage]+'">');
}

var thePngs = new Array()
var k = 0
for (k = 0; k < 314; k++){
    thePngs[k] = k+'.png'
 }

var l = 0
var q = thePngs.length;
var preBuffer = new Array()
for (l = 0; l < q;l++){
   preBuffer[l] = new Image()
   preBuffer[l].src = thePngs[l]
}
function showPng(place){
    var whichImage = Math.round(Math.random()*(q-1));
    document.write('<img class="'+place+'" src="images/png/'+thePngs[whichImage]+'">');
}