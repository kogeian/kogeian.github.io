function bigger(){
    document.getElementById("Text").style.fontSize = "24pt";
}
function fancy(){
    document.getElementById("boring").checked = false;

    if(document.getElementById("fancy").checked == true){
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    }
}
function boring(){
    document.getElementById("fancy").checked = false;
    if(document.getElementById("boring").checked == true){
        document.getElementById("Text").style.fontWeight = "normal";
        document.getElementById("Text").style.color = "black";
        document.getElementById("Text").style.textDecoration = "none";
    }
}
function moo(){
    var text = document.getElementById("Text").value;
    text = text.toUpperCase();

    var parts = text.split(".");
    
    document.getElementById("Text").value = parts.join("-MOO ");

}

