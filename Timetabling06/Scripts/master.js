$(document).ready(function(){
    
    if(!LoggedIn()){
        $("#side-menu").hide();
        document.getElementById("outerContainer").style.maxWidth = "100%";
    }
});

function LoggedIn() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    
    if (vars["user"] == null) {
        return false;
    } else {
        return true;
    }
    
}

