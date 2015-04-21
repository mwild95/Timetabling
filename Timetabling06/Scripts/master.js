$(document).ready(function(){
    
    if(!LoggedIn()){
        $("#side-menu").hide();
        document.getElementById("outerContainer").style.maxWidth = "100%";

    }

    $("#homeSideMenu").click(function () {
        
        var myParam = location.search.split('user=')[1];
        alert(myParam);
        if (myParam != null) {
            
            window,location.href = "/Timetabler/?user="+myParam;
        } else {
            window.location.href = "/Home/Index";
        }

    })

    $("#createSideMenu").click(function () {

        var myParam = location.search.split('user=')[1];
        alert(myParam);
        if (myParam != null) {

            window, location.href = "/Create/?user=" + myParam;
        } else {
            window.location.href = "/Home/Index";
        }

    })

    $("#logoutSideMenu").click(function () {

        
            window.location.href = "/Home/Index";

    })

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

