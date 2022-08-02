// Javascript events.

document.getElementById('img1').addEventListener("mouseover",abc);
function abc(){
    document.getElementById('img1').style.filter='grayscale(0%)';
}
document.getElementById('img1').addEventListener("mouseout",xyz);
function xyz(){
    document.getElementById('img1').style.filter='grayscale(100%)';
}

document.getElementById('img2').addEventListener("mouseover",pqr)
function pqr(){
    document.getElementById('img2').style.filter='grayscale(0%)';
}
document.getElementById('img2').addEventListener("mouseout",efg);
function efg(){
    document.getElementById('img2').style.filter='grayscale(100%)';
}

function test(){
    alert("Click Event");
}