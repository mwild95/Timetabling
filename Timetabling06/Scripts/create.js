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
        $("#helpTime").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration:1000
            },
            hide: {
                effect: "explode",
                duration:500
            }
        });
        $("#timeHelpBtnRoom1Request1").click(function () {
            $("#helpTime").dialog("open");
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


        $("#addRoomBtnRoom1Request1").click(function () {
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
    $("#timeSpinnerDivRoom1Request1 button").mousedown(function () {
            btn = $(this);
            input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-dir') == 'up') {
                action = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                        
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            } else {
                action = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                        
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            }
        }).mouseup(function () {
            clearInterval(action);
            updateRooms(1, 1);
        });


        var action1;
    $("#capacitySpinnerDivRoom1Request1 button").mousedown(function () {
            btn = $(this);
            input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-dir') == 'up') {
                action1 = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                        
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action1);
                    }
                }, 50);
            } else {
                action1 = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                        
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action1);
                    }
                }, 50);
            }
        }).mouseup(function () {
            clearInterval(action1);
            updateRooms(1, 1);
        });

        
        updateRooms(1, 1);
})




function addRoomTab(RequestNo) {
   $("div#rooms_choicesRequest" + RequestNo + " ul").append(
    	"<li><a href='#room" + ($("#rooms_choicesRequest"+RequestNo+" >ul >li").size() +1) + "Request" + RequestNo + "'>Room " + ($("#rooms_choicesRequest"+RequestNo+" >ul >li").size() +1) + "</a></li>"
    );
   
    $("#rooms_choicesRequest" + RequestNo).append(
        "<div id='room" + $("#rooms_choicesRequest" + RequestNo + " >ul >li").size() + "Request" + RequestNo + "'>" + getTabContent(($("#rooms_choicesRequest" + RequestNo + " >ul >li").size()), RequestNo) + "</div>"
    );
    
    $("#rooms_choicesRequest" + RequestNo).tabs("refresh");
    initiateFunctionality($("#rooms_choicesRequest" + RequestNo + " >ul >li").size(), RequestNo);
    
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
    var tabContent = "<table style='width:100%; text-align:right; font-size:0.7em;' id='facilitiesTableRoom"+roomNo+"Request"+RequestNo+"' hidden>";
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
    $("#facilitiesTableRoom"+roomNo+"Request"+RequestNo).replaceWith(tabContent);
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
    var btn = $("#timeSpinnerDivRoom" + roomNo + "Request" + RequestNo + " button");
    var input = btn.closest('.number-spinner').find('input');
    var selectedValue = $("#timeSlctRoom"+roomNo+"Request"+RequestNo).val();
    var newMax = 18 - parseInt(selectedValue);
    $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).attr("value", "1");
    $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).attr("max", newMax.toString());
    
        
        input.val(1);
        btn.prop("disabled", false);

    
}

function updateRooms(roomNo, RequestNo) {
    //String user, int roundID, int day, int time, int length,int[] weeks,int students,String roomType,String park, String[] facilities
    var userVar = deptCode;
    var roundIDVar = $("#roundSelectRequest" + RequestNo + " :selected").attr("id");
    var dayVar = $("#daySlctRoom" + roomNo + "Request" + RequestNo).val();
    var timeVar = $("#timeSlctRoom" + roomNo + "Request" + RequestNo).val()-8;
    var lengthVar = $("#timeSpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var weeksVar = [];
    var weeksArray = $("#weeksTbleRoom" + roomNo + "Request" + RequestNo + " :checked");
    if (weeksArray.length == 0) {
        alert("You need to select atleast 1 week.");
        weeksVar[weeksVar.length] = 200;
    } else {
        for (var i = 0; i <weeksArray.length ; i++) {
            weeksVar[weeksVar.length] = parseInt(weeksArray[i].value);
        }
    }
    
    var studentsVar = $("#capacitySpinnerRoom" + roomNo + "Request" + RequestNo).val();
    var roomTypeVar = $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var parkVar = $("#parkDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
    var facilitiesObject = $("#facilitiesTableRoom"+roomNo+"Request"+RequestNo+" :checked");
    var facilitiesValue = [];
    for (var q = 0; q < facilitiesObject.length; q++) {
        facilitiesValue[facilitiesValue.length] = facilitiesObject[q].value;
    }
    
    /*type: 'POST',
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
        }*/

    $.ajax({
        type: 'POST',
        url: '/create/_roomChecker',
        error: function(xhr, ajaxOptions, thrownError){
            alert("Oops. Something went wrong. Please refresh and try again.");
        },
        data: JSON.stringify({
            "roomNo": roomNo,
            "RequestNo": RequestNo,
            "deptCode": userVar,
            "roundID": roundIDVar,
            "day": dayVar,
            "start": timeVar,
            "length": lengthVar,
            "weeks": weeksVar,
            "capacity": studentsVar,
            "type": roomTypeVar,
            "park": parkVar,
            "facilities" : facilitiesValue
        }),
        datatype: 'html',
        contentType: 'application/json',
        processData: false,
        async:false,
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

function fillRooms(roomNo, RequestNo, buildingCode, roomPref) {
    var roomSelect = document.getElementById("roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref" + roomPref);
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
    $("#load_screen").show();
    var createObjects = [];
    var NoOfRooms = $("#rooms_choicesRequest1 >ul >li").size();
    for (var h = 1; h <= NoOfRooms; h++) {
        var obj;
        var roomNo = h;
        var RequestNo = 1;
        var userVar = deptCode;
        var moduleCodeVar = $("#moduleCodeSlctRequest" + RequestNo).val();
        moduleCodeVar = moduleCodeVar.substr(2, moduleCodeVar.length - 1);
        var priorityVar = ($("#priorityChkRequest" +RequestNo).is(":checked") ? 1 : 0);
        var roundIDVar = $("#roundSelectRequest" + RequestNo + " :selected").attr("id");
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
    
        var roomTypeVar = $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
        var parkVar = $("#parkDivRoom" + roomNo + "Request" + RequestNo + " :checked").attr("value");
        var facilitiesObject = $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo + " :checked");
        var facilitiesValue = [];
        for (var q = 0; q < facilitiesObject.length; q++) {
            facilitiesValue[facilitiesValue.length] = facilitiesObject[q].value;
        }
        var otherReqs = $("#specialReqsRoom"+roomNo + "Request"+RequestNo).val();
        var roomPrefs = [];
    /////////finding rooms and prefernces///////////
        var room_request = [];
        var firstRoomBuildingCode = $("#buildingSlctRoom" + roomNo + "Request" + RequestNo + "Pref1").val();
        var firstRoomRoomNumber = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1").val();
        if (firstRoomBuildingCode == "Any") {
            for (var t = 0; t < rooms.length; t++) {
                if(rooms[t].buildingCode+rooms[t].roomNumber==firstRoomRoomNumber){
                    firstRoomBuildingCode = rooms[t].buildingCode;
                    firstRoomRoomNumber = rooms[t].roomNumber;
                }
            }
        } else {
            
            firstRoomRoomNumber=firstRoomRoomNumber.substring(firstRoomBuildingCode.length, firstRoomRoomNumber.length);
        }
    
    
        var studentsVar = $("#capacitySpinnerRoom" + roomNo + "Request" + RequestNo).val();
    
        var firstRoom = {
        "buildingCode": firstRoomBuildingCode,
        "roomNumber": firstRoomRoomNumber,
        "class_size": parseInt(studentsVar),
        "priority":1
        };
        room_request[room_request.length] = firstRoom;
        if ($("#roomBuildingSlctRoom" + roomNo + "Request" + RequestNo + "Pref2").is(":visible")) {
            var secondRoomBuildingCode = $("#buildingSlctRoom" + roomNo + "Request" + RequestNo + "Pref2").val();
            var secondRoomRoomNumber = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2").val();
        
 
            if (secondRoomBuildingCode == "Any") {
                for (var t = 0; t < rooms.length; t++) {
                    if (rooms[t].buildingCode + rooms[t].roomNumber == secondRoomRoomNumber) {
                         secondRoomBuildingCode = rooms[t].buildingCode;
                        secondRoomRoomNumber = rooms[t].roomNumber;
                    }
                }
            } else {
                secondRoomRoomNumber = secondRoomRoomNumber.substring(secondRoomBuildingCode.length, secondRoomRoomNumber.length);
            
            }
            var secondRoom = {
            "buildingCode": secondRoomBuildingCode,
            "roomNumber": secondRoomRoomNumber,
            "class_size": parseInt(studentsVar),
            "priority": 2
            };
            room_request[room_request.length] = secondRoom;
        }

        if ($("#roomBuildingSlctRoom" + roomNo + "Request" + RequestNo + "Pref3").is(":visible")) {
            var thirdRoomBuildingCode = $("#buildingSlctRoom" + roomNo + "Request" + RequestNo + "Pref3").val();
            var thirdRoomRoomNumber = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3").val();
        

            if (thirdRoomBuildingCode == "Any") {
                for (var t = 0; t < rooms.length; t++) {
                    if (rooms[t].buildingCode + rooms[t].roomNumber == thirdRoomRoomNumber) {
                        thirdRoomBuildingCode = rooms[t].buildingCode;
                        thirdRoomRoomNumber = rooms[t].roomNumber;
                    }
                }
            } else {
                thirdRoomRoomNumber = thirdRoomRoomNumber.substring(thirdRoomBuildingCode.length, thirdRoomRoomNumber.length);
            }
            var thirdRoom = {
            "buildingCode": thirdRoomBuildingCode,
            "roomNumber": thirdRoomRoomNumber,
            "class_size": parseInt(studentsVar),
            "priority": 3
            };
            room_request[room_request.length] = thirdRoom;
        }




        var requestData = {
            "deptCode": userVar,
            "roundID": parseInt(roundIDVar),
            "moduleCode": moduleCodeVar,
            "priority": priorityVar,
            "day": parseInt(dayVar),
            "start": parseInt(timeVar)-8,
            "length": parseInt(lengthVar),
            "weeks": weeksNum,
            "type": roomTypeVar,
            "otherReqs": otherReqs,
            "room_request":room_request
        
        };
        obj = requestData;
        createObjects[createObjects.length] = { "requests": obj, "weeks": weeksVar, "facilities": facilitiesValue };
    }
    
    
    
    obj = JSON.stringify(createObjects);

    $.ajax({
        type: 'POST',
        url: '/create/Submit',
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Submitting Failed. Please Reload and Try Again.");
        },
        data: JSON.stringify(createObjects),
        datatype: 'html',
        contentType: 'application/json',
        processData: false,
        async:false,
        success: function (data) {
            $("#containsEverything").replaceWith(data);
            $("#load_screen").hide();
        }
    });
}

function getTabContent(roomNo, RequestNo) {
    var output = "";
    output += generateAutoFillDiv(roomNo, RequestNo);
    output += generateTimeWeeksDiv(roomNo, RequestNo);
    return output;
}

function generateAutoFillDiv(roomNo, RequestNo) {
    var output = "<div id='autofillDivRoom"+roomNo+"Request"+RequestNo+"' class='well' style='width:100%;' hidden><h4>Use Timetable Auto-Fill - Insert Timetable Image Here</h4></div>";
    return output;
}

function generateTimeWeeksDiv(roomNo,RequestNo){
    var output = "";
    output += "<div class='well' style='width:100%'>";
    output += "<h5 style='display:inline-block;'>Time Slot:</h5>";
    output += "<button type='button' class='btn btn-info btn-xs' style='display:inline-block; float:right;' id='timeHelpBtnRoom"+roomNo+"Request"+RequestNo+"'>?</button>";
    output += "<div>";
    output += "<table style='width:100%;'>";
    output += "<tr>";
    output += "<td style='width:33%;'>";
    output += "<select class='form-control input-sm' style='font-size:0.9em; display:inline-block;' id='daySlctRoom" + roomNo + "Request" + RequestNo + "' onchange='updateRooms(" + roomNo + "," + RequestNo + ")'>";
    output += "<option value='1'>1 - Monday</option>";
    output += "<option value='2'>2 - Tuesday</option>";
    output += "<option value='3'>3 - Wednesday</option>";
    output += "<option value='4'>4 - Thursday</option>";
    output += "<option value='5'>5 - Friday</option>";
    output += "</select>";
    output += "</td>";
    output += "<td style='width:25%;'>";
    output += "<select class='form-control input-sm' style='font-size:0.9em; display:inline-block;' id='timeSlctRoom" + roomNo + "Request" + RequestNo + "' onchange='timeChange(" + roomNo + "," + RequestNo + ")'>";
    output += "<option value='9'>1 - 09:00</option>";
    output += "<option value='10'>2 - 10:00</option>";
    output += "<option value='11'>3 - 11:00</option>";
    output += "<option value='12'>4 - 12:00</option>";
    output += "<option value='13'>5 - 13:00</option>";
    output += "<option value='14'>6 - 14:00</option>";
    output += "<option value='15'>7 - 15:00</option>";
    output += "<option value='16'>8 - 16:00</option>";
    output += "<option value='17'>9 - 17:00</option>";
    output += "</select>";
    output += "</td>";
    output += "<td style='width:33%;'>";
    output += "<div style='display:inline-block; font-size:0.9em;'>";
    output += "<div class='input-group number-spinner' id='timeSpinnerDivRoom"+roomNo+"Request"+RequestNo+"'>";
    output += "<span class='input-group-btn data-dwn'>";
    output += "<button class='btn btn-default btn-primary test' data-dir='dwn' id='lengthDownRoom" + roomNo + "Request" + RequestNo + "'><span class='glyphicon glyphicon-minus'></span></button>";
    output += "</span>";
    output += "<input type='text' class='form-control text-center' value='1' min='1' max='9' id='timeSpinnerRoom" + roomNo + "Request" + RequestNo + "' onchange='updateRooms(" + roomNo + "," + RequestNo + ");'>";
    output += "<span class='input-group-btn data-up'>";
    output += "<button class='btn btn-default btn-primary test' data-dir='up' id='lengthUpRoom"+roomNo+"Request"+RequestNo+"'><span class='glyphicon glyphicon-plus'></span></button>";
    output += "</span>";
    output += "</div>";
    output += "</div>";
    output += "</td>";
    output += "<td style='width:8%'>";
    output += "<h6 style='display:inline-block;'>Hour(s)</h6>";
    output += "</td>";
    output += "</tr>";
    output += "</table>";
    output += "</div>";
    output += "<br />";
    output += "<h5 style='display:inline-block'>Weeks:</h5>";
    output += "<table id='weeksTbleRoom" + roomNo + "Request" + RequestNo + "' style='text-align:center; width:100%;'></table>";
    output += "<h5 style='display:inline-block;'>No. of Students:</h5>";
    output += "<div class='input-group number-spinner' id='capacitySpinnerDivRoom"+roomNo+"Request"+RequestNo+"'>";
    output += "<span class='input-group-btn data-dwn'>";
    output += "<button class='btn btn-default btn-primary' data-dir='dwn'><span class='glyphicon glyphicon-minus'></span></button>";
    output += "</span>";
    output += "<input type='text' class='form-control text-center' value='40' min='10' max='400' id='capacitySpinnerRoom" + roomNo + "Request" + RequestNo + "'>";
    output += "<span class='input-group-btn data-up'>";
    output += "<button class='btn btn-default btn-primary' data-dir='up'><span class='glyphicon glyphicon-plus'></span></button>";
    output += "</span>";
    output += "</div></div>";
    output += "<div class='well' style='width:100%;'>";
    output += "<table style='width:100%;'>";
    output += "<tr><td>";
    output += "<div>";
    output += "<h5 style='display:inline-block;'>Room Type: </h5>";
    output += "<button type='button' class='btn btn-primary btn-xs' style='display:inline-block; margin-left:5px;' id='roomTypeBtnRoom" + roomNo + "Request" + RequestNo + "'>▼</button>";
    output += "</div></td>";
    output += "<td><div>";
    output += "<h5 style='display:inline-block;'>Park: </h5>";
    output += "<button type='button' class='btn btn-primary btn-xs' style='display:inline-block; margin-left:5px;' id='parkBtnRoom" + roomNo + "Request" + RequestNo + "'>▼</button>";
    output += "</div></td>";
    output += "<td><div>";
    output += "<h5 style='display:inline-block;'>Room Facilities:</h5>";
    output += "<button type='button' class='btn btn-primary btn-xs' style='display:inline-block; margin-left:5px;' id='facilitiesBtnRoom" + roomNo + "Request" + RequestNo + "'>▼</button>";
    output += "</div></td>";
    output += "<td></div>";
    output += "<h5 style='display:inline-block;'>Special Requirements:</h5>";
    output += "<button type='button' class='btn btn-primary btn-xs' style='display:inline-block; margin-left:5px;' id='specialReqsBtnRoom" + roomNo + "Request" + RequestNo + "'>▼</button>";
    output += "</div></td></tr></table>";
    output += "<div id='roomTypeDivRoom"+roomNo+"Request"+RequestNo+"' hidden></div>";
    output += "<div id='parkDivRoom" + roomNo + "Request" + RequestNo + "'></div>";
    output += "<div id='facilitiesTableRoom" + roomNo + "Request" + RequestNo + "'></div>";
    output += "<div id='specialReqsDivRoom" + roomNo + "Request" + RequestNo + "' hidden><textarea class='form-control' placeholder='Enter any special requirements here.' id='specialReqsRoom" + roomNo + "Request" + RequestNo + "'></textarea></div>";
    output += "</div>";
    output += "<div class='well' style='width:100%;' id='roomBuildingSlctRoom" + roomNo + "Request" + RequestNo + "'>";
    output += "<div style='display:inline-block; '>";
    output += "<h5 >Building:</h5>";
    output += "<div id='buildingsSlctRoom"+roomNo+"Request"+RequestNo+"'></div>";
    output += "</div>";
    output += "<div style='display:inline-block;'>";
    output += "<h5>Room:</h5>";
    output += "<div id='roomsSlctRoom" + roomNo + "Request" + RequestNo + "'></div></div></div>";
    output += "<div class='well' style='width:100%'><button type='button' class='btn btn-primary btn-sm' style='display:inline-block; float:right; margin-bottom:5px;' id='addRoomBtnRoom"+roomNo+"Request"+RequestNo+"'>Add Room</button>";
    output += "<button type='button' class='btn btn-danger btn-sm' style='display:inline-block; float:left; margin-bottom:5px;' id='removeRoomBtnRoom" + roomNo + "Request" + RequestNo + "'>Remove Room</button></div><div>";
    return output;
}

function initiateFunctionality(roomNo, RequestNo) {
    $("#removeRoomBtnRoom" + (roomNo - 1) + "Request" + RequestNo).hide("slow");
    $("#timeHelpBtnRoom"+roomNo+"Request"+RequestNo).click(function () {
        $("#helpTime").dialog("open");
    });
    fillWeeks(roomNo, RequestNo);
    $("#specialReqsBtnRoom"+roomNo+"Request"+RequestNo).click(function () {
        if ($("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).is(":visible")) {
            $("#specialReqsBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).hide("slow");
        } else {
            $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#parkBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#parkDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#specialReqsBtnRoom" + roomNo + "Request" + RequestNo).text("▲");
            $("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).show("slow");
        }
    });

    $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).click(function () {
        if ($("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).is(":visible")) {
            $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).hide("slow");
        } else {
            $("#specialReqsBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#parkBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#parkDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).text("▲");
            $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).show("slow");
        }
    });
    $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).click(function () {
        if ($("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).is(":visible")) {
            $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).hide("slow");
        } else {
            $("#specialReqsBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#parkBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#parkDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).text("▲");
            $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).show("slow");
        }
    });

    $("#parkBtnRoom" + roomNo + "Request" + RequestNo).click(function () {
        if ($("#parkDivRoom" + roomNo + "Request" + RequestNo).is(":visible")) {
            $("#parkBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#parkDivRoom" + roomNo + "Request" + RequestNo).hide("slow");
        } else {
            $("#facilitiesBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#facilitiesTableRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#roomTypeBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#roomTypeDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#specialReqsBtnRoom" + roomNo + "Request" + RequestNo).text("▼");
            $("#specialReqsDivRoom" + roomNo + "Request" + RequestNo).hide("slow");

            $("#parkBtnRoom" + roomNo + "Request" + RequestNo).text("▲");
            $("#parkDivRoom" + roomNo + "Request" + RequestNo).show("slow");
        }
    });
    populateFacilitiesTable(roomNo, RequestNo);
    populateRoomType(roomNo, RequestNo);
    fillParks(roomNo, RequestNo);
    updateRooms(roomNo, RequestNo);
    $("#addRoomBtnRoom"+roomNo+"Request"+RequestNo).click(function () {
        addRoomTab(RequestNo);
    });
   
    $("#removeRoomBtnRoom" + roomNo + "Request" + RequestNo).click(function () {
        $("div#rooms_choicesRequest"+RequestNo+" ul li").last().remove();
        $("#removeRoomBtnRoom" + (roomNo - 1) + "Request" + RequestNo).show("slow");
        $("#room"+roomNo+"Request"+RequestNo).replaceWith("")
        $()
        $("#rooms_choicesRequest" + RequestNo).tabs("refresh");
    });


    var action3;
    $("#timeSpinnerDivRoom"+roomNo+"Request"+RequestNo+" button").mousedown(function () {
        btn = $(this);
        input = btn.closest('.number-spinner').find('input');
        btn.closest('.number-spinner').find('button').prop("disabled", false);

        if (btn.attr('data-dir') == 'up') {
            action3 = setInterval(function () {
                if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                    input.val(parseInt(input.val()) + 1);

                } else {
                    btn.prop("disabled", true);
                    clearInterval(action3);
                }
            }, 50);
        } else {
            action3 = setInterval(function () {
                if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                    input.val(parseInt(input.val()) - 1);

                } else {
                    btn.prop("disabled", true);
                    clearInterval(action3);
                }
            }, 50);
        }
    }).mouseup(function () {
        clearInterval(action3);
        updateRooms(roomNo, RequestNo);
    });


    var action4;
    $("#capacitySpinnerDivRoom"+roomNo+"Request"+RequestNo+" button").mousedown(function () {
        btn = $(this);
        input = btn.closest('.number-spinner').find('input');
        btn.closest('.number-spinner').find('button').prop("disabled", false);

        if (btn.attr('data-dir') == 'up') {
            action4 = setInterval(function () {
                if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                    input.val(parseInt(input.val()) + 1);

                } else {
                    btn.prop("disabled", true);
                    clearInterval(action4);
                }
            }, 50);
        } else {
            action4 = setInterval(function () {
                if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                    input.val(parseInt(input.val()) - 1);

                } else {
                    btn.prop("disabled", true);
                    clearInterval(action4);
                }
            }, 50);
        }
    }).mouseup(function () {
        clearInterval(action4);
        updateRooms(roomNo, RequestNo);
    });

}
                   
function roundChange(RequestNo) {
    var roomCount = $("#rooms_choicesRequest1 >ul >li").size();
    var newWeeksAmount = $("$roundSelectRequest" + RequestNo).val();
    for (var i = 1; i <= roomCount; i++) {
        fillWeeks(i, RequestNo);
        updateRooms(i,RequestNo);
    }

}

function disableSelectOption(roomNo, RequestNo, selectNo, disableValue) {
    var room1Value = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 :selected").val();
    var room2Value = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 :selected").val();
    var room3Value = $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 :selected").val();
    if (selectNo == 1) {
        //disable select 2 and 3
        
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option").prop("disabled", false);
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option[value='" + room1Value + "']").attr("disabled", "disabled");
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option[value='" + room3Value + "']").attr("disabled", "disabled");
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option:not([disabled])").first().attr("selected", "selected");
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option").prop("disabled", false);
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option[value='" + room2Value + "']").attr("disabled", "disabled");
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option[value='" + room1Value + "']").attr("disabled", "disabled");
        $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option:not([disabled])").first().attr("selected", "selected");
    } else {
        if (selectNo == 2) {
            //disable 1 and 3
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option").prop("disabled", false);
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option[value='" + room2Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option[value='" + room3Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option:not([disabled])").first().attr("selected", "selected");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option").prop("disabled", false);
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option[value='" + room2Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option[value='" + room1Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref3 option:not([disabled])").first().attr("selected", "selected");
        } else {
            //disable 1 and 2
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option").prop("disabled", false);
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option[value='" + room1Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option[value='" + room3Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref2 option:not([disabled])").first().attr("selected", "selected");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option").prop("disabled", false);
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option[value='" + room2Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option[value='" + room3Value + "']").attr("disabled", "disabled");
            $("#roomSlctRoom" + roomNo + "Request" + RequestNo + "Pref1 option:not([disabled])").first().attr("selected", "selected");
        }
    }
}
