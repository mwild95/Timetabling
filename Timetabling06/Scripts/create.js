$(document).ready(function () {
    
    $("#rooms_choices").tabs();

        $( "#helpRounds" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
        $("#roundHelpBtn").click(function () {
            $("#helpRounds").dialog("open");
        });

        $("#helpModules").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
        $("#moduleHelpBtn").click(function () {
            $("#helpModules").dialog("open");
        });

})


