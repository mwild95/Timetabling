$(document).ready(function () {
    
    $("#rooms_choicesRequest1").tabs();

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


        $("#addRoomBtnRequest1").click(function () {
            addRoomTab(1);
        });

        fillWeeks(1, 1);
        
        $("#specialReqsBtn").click(function () {
            if ($("#specialReqsDiv").is(":visible")) {
                $("#specialReqsBtn").text("▼");
                $("#specialReqsDiv").hide("slow");
            } else {
                $("#roomTypeBtn").text("▼");
                $("#roomTypeDivRoom1Request1").hide("slow");

                $("#facilitiesBtn").text("▼");
                $("#facilitiesTableRoom1Request1").hide("slow");

                $("#parkBtn").text("▼");
                $("#parkDivRoom1Request1").hide("slow");

                $("#specialReqsBtn").text("▲");
                $("#specialReqsDiv").show("slow");
            }
        });

        $("#roomTypeBtn").click(function () {
            if ($("#roomTypeDivRoom1Request1").is(":visible")) {
                $("#roomTypeBtn").text("▼");
                $("#roomTypeDivRoom1Request1").hide("slow");
            } else {
                $("#specialReqsBtn").text("▼");
                $("#specialReqsDiv").hide("slow");

                $("#facilitiesBtn").text("▼");
                $("#facilitiesTableRoom1Request1").hide("slow");

                $("#parkBtn").text("▼");
                $("#parkDivRoom1Request1").hide("slow");

                $("#roomTypeBtn").text("▲");
                $("#roomTypeDivRoom1Request1").show("slow");
            }
        });
        $("#facilitiesBtn").click(function () {
            if ($("#facilitiesTableRoom1Request1").is(":visible")) {
                $("#facilitiesBtn").text("▼");
                $("#facilitiesTableRoom1Request1").hide("slow");
            } else {
                $("#specialReqsBtn").text("▼");
                $("#specialReqsDiv").hide("slow");

                $("#parkBtn").text("▼");
                $("#parkDivRoom1Request1").hide("slow");

                $("#roomTypeBtn").text("▼");
                $("#roomTypeDivRoom1Request1").hide("slow");

                $("#facilitiesBtn").text("▲");
                $("#facilitiesTableRoom1Request1").show("slow");
            }
        });
        
        $("#parkBtn").click(function () {
            if ($("#parkDivRoom1Request1").is(":visible")) {
                $("#parkBtn").text("▼");
                $("#parkDivRoom1Request1").hide("slow");
            } else {
                $("#facilitiesBtn").text("▼");
                $("#facilitiesTableRoom1Request1").hide("slow");

                $("#roomTypeBtn").text("▼");
                $("#roomTypeDivRoom1Request1").hide("slow");

                $("#specialReqsBtn").text("▼");
                $("#specialReqsDiv").hide("slow");

                $("#parkBtn").text("▲");
                $("#parkDivRoom1Request1").show("slow");
            }
        });
        
        

    //facilitiesTableRoom1Request1
        populateFacilitiesTable(1, 1);
        populateRoomType(1, 1);
        fillParks(1,1);
        

        var action;
        $(".number-spinner button").mousedown(function () {
            btn = $(this);
            input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-dir') == 'up') {
                action = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                        updateRooms(1, 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            } else {
                action = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                        updateRooms(1, 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            }
        }).mouseup(function () {
            clearInterval(action);
        });


        var action1;
        $(".number-spinner button test").mousedown(function () {
            btn = $(this);
            input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-dir') == 'up') {
                action1 = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                        updateRooms(1, 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action1);
                    }
                }, 50);
            } else {
                action1 = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                        updateRooms(1, 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action1);
                    }
                }, 50);
            }
        }).mouseup(function () {
            clearInterval(action1);
        });
        updateRooms(1, 1);
})




function addRoomTab(RequestNo) {
   $("div#rooms_choicesRequest" + RequestNo + " ul").append(
    	"<li><a href='#room" + ($("#rooms_choicesRequest"+RequestNo+" >ul >li").size() +1) + "Request" + RequestNo + "'>Room " + ($("#rooms_choicesRequest"+RequestNo+" >ul >li").size() +1) + "</a></li>"
    );

    $("#rooms_choicesRequest" + RequestNo).append(
        "<div id='room" + $("#rooms_choicesRequest"+RequestNo+" >ul >li").size() + "Request" + RequestNo + "'>Testing Testing</div>"
    );
    
    $("#rooms_choicesRequest" + RequestNo).tabs("refresh");
    
    
}

function createTabContent(RequestNo) {
    var newRoomNumber = $("#rooms_choicesRequest" + RequestNo + " >ul >li").size();

}

function fillWeeks(roomNo, requestNo) {
    var amountOfWeeks = parseInt($('#roundSelectRequest' + requestNo).val());
    var output = "";
    
    //weeksTbleRoom1Request1
    var tableID = "weeksTbleRoom" + roomNo + "Request" + requestNo;
    
    var table = document.getElementById(tableID);
    while (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1);
    }
    var row = table.insertRow(0);
    
    for (var i = 1; i <= amountOfWeeks; i++) {
        row.insertCell(i - 1);
        table.rows[0].cells[i - 1].innerHTML = "<div id='week" + (i) + "Room" + roomNo + "Request" + requestNo + "Title'><h5>" + (i) + "</h5></div>";
    }
    
    var row_selects = table.insertRow(1);
    
    for (var t = 1; t <= amountOfWeeks; t++) {
        row_selects.insertCell(t-1);
        if (t <= 12) {
            table.rows[1].cells[t - 1].innerHTML = "<input id='week" + (t) + "Room" + roomNo + "Request" + requestNo + "Input' type='checkbox' name='Week " + (t) + "' value='" + (t) + "' onclick='updateRooms(" + roomNo + "," + requestNo + ");' checked>";
        } else {
            table.rows[1].cells[t - 1].innerHTML = "<input id='week" + (t) + "Room" + roomNo + "Request" + requestNo + "Input' type='checkbox' name='Week " + (t) + "' value='" + (t) + "' onclick='updateRooms(" + roomNo + "," + requestNo + ");'>";
        }
    }
    
}

function populateRoomType(roomNo, RequestNo) {
    var roomTypeDiv = $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo);
    var roomTypeHTML = "<div class='container' id='roomTypeDivRoom" + roomNo + "Request" + RequestNo + "' hidden>";
    roomTypeHTML += "<label class='radio-inline'>";
    roomTypeHTML += "<input type='radio' name='roomTypeRadioRoom" + roomNo + "Request" + RequestNo + "' id='roomTypeRadioRoom" + roomNo + "Request" + RequestNo + "Any' value='Any' onclick='updateRooms(" + roomNo + "," + RequestNo + ");' checked>";
    roomTypeHTML += "Any";
    roomTypeHTML += "</label>";
    for (var i = 0; i < roomType.length; i++) {
        
        roomTypeHTML += "<label class='radio-inline'>";
        roomTypeHTML += "<input type='radio' name='roomTypeRadioRoom" + roomNo + "Request" + RequestNo + "' id='roomTypeRadioRoom" + roomNo + "Request" + RequestNo + roomType[i] + "' value='" + roomType[i] + "' onclick='updateRooms(" + roomNo + "," + RequestNo + ");'>";
        roomTypeHTML += roomType[i];
        roomTypeHTML += "</label>";
        
    }
    roomTypeHTML += "</div>";
    roomTypeDiv.replaceWith(roomTypeHTML);
}

function populateFacilitiesTable(roomNo, RequestNo) {
    var tabContent = "<table style='width:100%; text-align:right; font-size:0.7em;' id='facilitiesTableRoom1Request1' hidden>";
    var splitFacilities = split(facilities, (facilities.length / 4));
    for (var i = 0; i < splitFacilities.length; i++) {
        tabContent += "<tr style='width:100%;'>";

        for (var q = 0; q < splitFacilities[i].length; q++) {
            tabContent += "<td width='28.33'>";
            tabContent += splitFacilities[i][q];
            tabContent += " - </td><td width='5%'><input type='checkbox' id='facilityTableRoom" + roomNo + "Request" + RequestNo + splitFacilities[i][q] + "' name='facilityTableRoom" + roomNo + "Request" + RequestNo + splitFacilities[i][q] + "' value='" + splitFacilities[i][q] + "' onclick='updateRooms(" + roomNo + "," + RequestNo + ");'>";
            tabContent += "</td>";
           
        }
        tabContent += "</tr>";

    }
    tabContent += " </table>";
    $("#facilitiesTableRoom1Request1").replaceWith(tabContent);
}

function split(a, n) {
    var len = a.length, out = [], i = 0;
    while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
    }
    return out;
}

function fillParks(roomNo, RequestNo) {
    var output = "";
    var parkDiv = $("#parkDivRoom" + roomNo + "Request" + RequestNo);
    output += "<div class='container' id='parkDivRoom" + roomNo + "Request" + RequestNo + "' hidden>";
    output += "<label class='radio-inline'>";
    output += "<input type='radio' name='parkRadioRoom" + roomNo + "Request" + RequestNo + "' id='parkRadioRoom" + roomNo + "Request" + RequestNo + "Any' value='Any' onclick='updateRooms(" + roomNo + "," + RequestNo + ");' checked>";
    output += "Any";
    output += "</label>";
    for (var i = 0; i < parks.length; i++) {
        
        output += "<label class='radio-inline'>";
        output += "<input type='radio' name='parkRadioRoom" + roomNo + "Request" + RequestNo + "' id='parkRadioRoom" + roomNo + "Request" + RequestNo + parks[i] + "' value='" + parks[i] + "' onclick='updateRooms("+roomNo+","+RequestNo+");'>";
        output += parks[i];
        output += "</label>";
        
        
    }
    output += "</div>";
    parkDiv.replaceWith(output);
}




function selectLink(select1, select2) {
    select2.selectedIndex = select1.selectedIndex;
}

function generateModuleSelect(RequestNo, PartCode) {
   var moduleCodeSelect = document.getElementById("moduleCodeSlctRequest" + RequestNo);
   var moduleTitleSelect = document.getElementById("modulesTitleSlctRequest" + RequestNo);
    
    
    

    for (var q = moduleCodeSelect.options.length - 1; q >= 0; q--) {
        moduleCodeSelect.remove(q);
        moduleTitleSelect.remove(q);
    }

    for (var i = 0; i < moduleTitle.length; i++) {
        if (PartCode == 'Any') {
            var newOptionCode = document.createElement("option");
            newOptionCode.text = moduleTitle[i];
            moduleTitleSelect.add(newOptionCode);

            var newOptionTitle = document.createElement("option");
            newOptionTitle.text = deptCode + moduleCode[i];
            moduleCodeSelect.add(newOptionTitle);
        }
        if (moduleCode[i].substring(0, 1) == PartCode) {
            var newOptionCode = document.createElement("option");
            newOptionCode.text = moduleTitle[i];
            moduleTitleSelect.add(newOptionCode);

            var newOptionTitle = document.createElement("option");
            newOptionTitle.text = deptCode + moduleCode[i];
            moduleCodeSelect.add(newOptionTitle);
        }
        
    }
}

function alterLength(roomNo, RequestNo) {
    var selectedValue = $("#timeSlctRoom"+roomNo+"Request"+RequestNo).val();
    var newMax = 18 - parseInt(selectedValue);
    $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).attr("value", "1");
    $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).attr("max", newMax.toString());
    while ($("#timeSlctRoom" + roomNo + "Request" + RequestNo).val() > 1) {
        
        $("#lengthDownRoom" + roomNo + "Request" + RequestNo).trigger("click");
    }
}

function updateRooms(roomNo, RequestNo) {
    //String user, int roundID, int day, int time, int length,int[] weeks,int students,String roomType,String park, String[] facilities
    var userVar = deptCode;
    var roundIDVar = $("#roundSelectRequest" + RequestNo + " :selected").val();
    var dayVar = $("#daySlctRoom" + roomNo + "Request" + RequestNo).val();
    var timeVar = $("#timeSlctRoom" + roomNo + "Request" + RequestNo).val();
    var lengthVar = $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var weeksVar = [];
    var weeksArray = $("#weeksTbleRoom"+roomNo+"Request"+RequestNo+" :checked");
    for (var i = 0; i <weeksArray.length ; i++) {
        weeksVar[weeksVar.length] = weeksArray[i].value.toString();
    }
    var studentsVar = $("#capacitySpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var roomTypeVar = $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var parkVar = $("#parkDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var facilitiesObject = $("#facilitiesTableRoom"+roomNo+"Request"+RequestNo+" :checked");
    var facilitiesValue = [];
    for (var q = 0; q < facilitiesObject.length; q++) {
        facilitiesValue[facilitiesValue.length] = facilitiesObject[q].value;
    }
    
    

    $.ajax({
        type: 'GET',
        url: '/create/_roomChecker',
        data: {
            roomNum: roomNo,
            requestNum: RequestNo,
            user: userVar,
            roundID: roundIDVar,
            day: dayVar,
            time: timeVar,
            length: lengthVar,
            weeks: weeksVar,
            students: studentsVar,
            roomType: roomTypeVar,
            park: parkVar,
            facilities : facilitiesValue
        },
        datatype: 'html',
        success: function (data) {
            
            $("#roomBuildingSlctRoom"+roomNo+"Request"+RequestNo).replaceWith(data);
            //Do your stuffs here
        }
    });
}

function timeChange(roomNo, RequestNo) {
    alterLength(roomNo, RequestNo);
    updateRooms(roomNo, RequestNo);
}

function fillRooms(roomNo, RequestNo, buildingCode) {
    var roomSelect = document.getElementById("roomSlctRoom" + roomNo + "Request" + RequestNo);
    for (var i = roomSelect.options.length - 1; i >= 0 ; i--) {
        roomSelect.remove(i);
    }

    for (var q = 0; q < rooms.length; q++) {
        if (buildingCode == 'Any') {
            var newOption = document.createElement("option");
            newOption.text = rooms[q].buildingCode + rooms[q].roomNumber;
            newOption.value = rooms[q].buildingCode + rooms[q].roomNumber;
            roomSelect.add(newOption);
        } else {
            if (rooms[q].buildingCode == buildingCode) {
                var newOption = document.createElement("option");
                newOption.text = rooms[q].buildingCode+rooms[q].roomNumber;
                newOption.value = rooms[q].buildingCode + rooms[q].roomNumber;
                roomSelect.add(newOption);
            }
        }
        
        
    }
}


function sendRequest() {
    var roomNo = 1;
    var RequestNo = 1;
    var userVar = deptCode;
    var moduleCodeVar = $("#moduleCodeSlctRequest" + RequestNo).val();
    moduleCodeVar = moduleCodeVar.substr(2, moduleCodeVar.length - 1);
    var priorityVar = $("#priorityChkRequest" +RequestNo).is(":checked");
    var roundIDVar = $("#roundSelectRequest" + RequestNo + " :selected").val();
    var dayVar = $("#daySlctRoom" + roomNo + "Request" + RequestNo).val();
    var timeVar = $("#timeSlctRoom" + roomNo + "Request" + RequestNo).val();
    var lengthVar = $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var weeksVar = [];
    var weeksArray = $("#weeksTbleRoom" + roomNo + "Request" + RequestNo + " :checked");
    for (var i = 0; i < weeksArray.length ; i++) {
        weeksVar[weeksVar.length] = weeksArray[i].value.toString();
    }
    var weeksTest = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var weeksNum = 0;
    if (weeksTest.join() === weeksVar.join()) {
        weeksNum = 1;
    }
    var studentsVar = $("#capacitySpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var roomTypeVar = $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var parkVar = $("#parkDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var facilitiesObject = $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo + " :checked");
    var facilitiesValue = [];
    for (var q = 0; q < facilitiesObject.length; q++) {
        facilitiesValue[facilitiesValue.length] = facilitiesObject[q].value;
    }
    var otherReqs = $("#specialReqsRoom"+roomNo + "Request"+RequestNo).val();

    var requestData = {
        "deptCode": userVar,
        "roundID": parseInt(roundIDVar),
        "moduleCode": moduleCodeVar,
        "priority": parseInt(priorityVar),
        "day": parseInt(dayVar),
        "start": parseInt(timeVar)-8,
        "length": parseInt(lengthVar),
        "weeks": weeksNum,
        "capacity": parseInt(studentsVar),
        "type": roomTypeVar,
        "otherReqs": otherReqs
    };
    var obj = JSON.stringify(requestData);

    $.ajax({
        type: 'POST',
        url: '/create/Submit',
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Submitting Failed. Please Reload and Try Again.");
        },
        data: JSON.stringify({ requests: requestData, weeks: weeksVar, facilities: facilitiesValue }),
        datatype: 'html',
        contentType: 'application/json',
        processData: false,
        async:false,
        success: function (data) {
            alert(data);
        }
    });
}