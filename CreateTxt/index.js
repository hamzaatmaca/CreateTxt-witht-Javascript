var text = document.getElementById('text').value

function x(){
var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
saveAs(blob, 'benim YAzim');
}