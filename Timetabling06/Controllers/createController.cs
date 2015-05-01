using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using Timetabling06.Models;
using Timetabling06.ModelViews;

namespace Timetabling06.Controllers
{
    public class createController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: create
        public ActionResult Index(String user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                ModuleDepartment createData = new ModuleDepartment();

                var rounds = db.rounds.Where(r => r.startTime <= DateTime.Now).Where(r => r.endTime >= DateTime.Now);
                var modules = db.modules.Where(r => r.deptCode == user);
                var facilities = db.facilities.Select(r=>r.facilityName);
                var roomTypes = db.rooms.Select(r=>r.roomType).Distinct();
                var parks = db.buildings.Select(r => r.park).Distinct();
                var rooms = db.rooms;
                var buildings = db.buildings;
                try
                {
                    createData.rounds = rounds.ToList();
                    createData.modules = modules.ToList();
                    createData.facilities = facilities.ToList();
                    createData.roomTypes = roomTypes.ToList();
                    createData.parks = parks.ToList();
                    createData.rooms = rooms.ToList();
                    createData.buildings = buildings.ToList();
                }
                catch
                {
                }
             return View(createData);
            }
           
            
            
        }
        public ActionResult Submit(createObjects[] JSONdata) {
            List<int> requestIDs = new List<int>();

            for (int r = 0; r < JSONdata.Length;r++ ) { 
                request reqData = new request();
                reqData.moduleCode = JSONdata[r].requests.moduleCode;
                reqData.deptCode = JSONdata[r].requests.deptCode;
                reqData.priority = JSONdata[r].requests.priority;
                reqData.day = JSONdata[r].requests.day;
                reqData.start = JSONdata[r].requests.start;
                reqData.length = JSONdata[r].requests.length;
                reqData.weeks = JSONdata[r].requests.weeks;
                if (Convert.ToInt16(JSONdata[r].requests.weeks) == 0)
                {
                for (var i = 0; i < JSONdata[r].weeks.Length; i++)
                {
                    
                    weeks_request newWeek = new weeks_request();
                    newWeek.week = Convert.ToInt16(JSONdata[r].weeks[i]);
                    reqData.weeks_request.Add(newWeek);
                }
            }
            reqData.type = JSONdata[r].requests.type;
            reqData.otherReqs = JSONdata[r].requests.otherReqs;
            reqData.roundID = JSONdata[r].requests.roundID;
            reqData.room_request = JSONdata[r].requests.room_request;
            reqData.date = DateTime.Now;
            ViewBag.module = reqData.weeks;
            if (JSONdata[r].requests.otherReqs == null)
            {
                reqData.otherReqs = "None";
            }
            else {
                reqData.otherReqs = JSONdata[r].requests.otherReqs;
            }
            reqData.sent = 1;
            reqData.status = 0;
            reqData.viewed = 0;
            reqData.booked = 0;
            if (!(JSONdata[r].facilities == null))
            {
                for (var q = 0; q < JSONdata[r].facilities.Count(); q++)
                {
                    facility newFac = new facility();
                    var tmp = JSONdata[r].facilities[q];
                    newFac = db.facilities.Where(a => a.facilityName.Equals(tmp)).First();
                    reqData.facilities.Add(newFac);
                }
            }
            
                db.requests.Add(reqData);
            
                try {
                    db.SaveChanges();
                    requestIDs.Add(reqData.requestID);
                }
                catch { 
            
                }
            }
            if(requestIDs.Count>1){
            for (var f = 0; f < requestIDs.Count;f++ ) {
                var requestToEdit = db.requests.Find(requestIDs[f]);
                if (f == 0)
                {
                    requestToEdit.requestLink = requestIDs[f+1];
                }
                else {
                    if (f == requestIDs.Count - 1)
                    {
                        requestToEdit.requestLink = requestIDs[0];
                    }
                    else {
                        requestToEdit.requestLink = requestIDs[f + 1];
                    }
                }
                
                    db.Entry(requestToEdit).State = EntityState.Modified;
                    db.SaveChanges();
                    
                
            }
        }
            



            int count = 0;
            foreach(var requestID in requestIDs){
                var DBrequests = db.requests.Find(requestID);
                JSONdata[count].requests = DBrequests;
                count++;
            }
            var allAvailable = true;
           /* if(JSONdata[0].requests.round.roundNo==0){
                //this is an adhoc request, therefore needs to be booked/rejected immediately.
                for (var v = 0; v < JSONdata.Length;v++ ) {
                    var checkIfBooked = db.requests.Where(y=>y.booked==JSONdata[v].requests.booked);
                    checkIfBooked = checkIfBooked.Where(y=>y.start==JSONdata[v].requests.start);
                    checkIfBooked = checkIfBooked.WHere
                }
            }*/
            /*var proposedRequest = db.requests.Include(r => r.rooms);
            proposedRequest = proposedRequest.Where(r=>r.booked==1);
            proposedRequest = proposedRequest.Where(r => r.roundID==(JSONdata.roundID));
            proposedRequest = proposedRequest.Where(r => r.day==JSONdata.day);
            proposedRequest = proposedRequest.Where(s => s.start < JSONdata.start + JSONdata.length && s.start + s.length > JSONdata.start);
            int[] standardWeeks = new int[12] {1,2,3,4,5,6,7,8,9,10,11,12};
            if (JSONdata.weeks.Length == 0)
            {

            }
            else {
                var containsStandard = standardWeeks.Intersect(JSONdata.weeks);
                if (containsStandard.Count() != 0)
                {
                    proposedRequest = proposedRequest.Where(r => r.weeks_request.Any(f => JSONdata.weeks.Contains(f.week)) || r.weeks == 1.ToString());
                }
                else
                {
                    proposedRequest = proposedRequest.Where(r => r.weeks_request.Any(f => JSONdata.weeks.Contains(f.week)));
                }
            }
            

            



            var bookedRooms = proposedRequest.Select(r => r.rooms);
            List<room> bookedRoomsList = new List<room>();
            foreach(var room in bookedRooms){
                bookedRoomsList.Add(room.First());
            }*/

            Receipt receiptDetails = new Receipt();
            receiptDetails.moduleCode = JSONdata[0].requests.moduleCode;
            receiptDetails.moduleTitle = db.modules.Find(JSONdata[0].requests.moduleCode,JSONdata[0].requests.deptCode).moduleTitle;
            receiptDetails.department = JSONdata[0].requests.deptCode;
            receiptDetails.submittedIn = db.rounds.Find(JSONdata[0].requests.roundID);
            receiptDetails.requests = JSONdata;

            
            return View(receiptDetails);
        }


        public ActionResult _roomChecker(checkRooms JSONdata){
            var rooms = db.rooms.Include(r=>r.building).Include(r=>r.facilities);
            rooms = rooms.Where(r => r.capacity >= JSONdata.capacity);
            if (JSONdata.type != "Any")
            {
                rooms = rooms.Where(r => r.roomType==JSONdata.type);
            }
            if (JSONdata.park != "Any")
            {
                rooms = rooms.Where(r => r.building.park==JSONdata.park);
            }

            if (JSONdata.facilities != null)
            {
                for (var i = 0; i < JSONdata.facilities.Length; i++)
                {
                    var tmp = JSONdata.facilities[i];
                    rooms = rooms.Where(r => r.facilities.Any(f => f.facilityName==tmp));

                }
            }

            var proposedRequest = db.requests.Include(r => r.rooms);
            proposedRequest = proposedRequest.Where(r=>r.booked==1);
            proposedRequest = proposedRequest.Where(r => r.roundID==(JSONdata.roundID));
            proposedRequest = proposedRequest.Where(r => r.day==JSONdata.day);
            proposedRequest = proposedRequest.Where(s => s.start < JSONdata.start + JSONdata.length && s.start + s.length > JSONdata.start);
            int[] standardWeeks = new int[12] {1,2,3,4,5,6,7,8,9,10,11,12};
            if (JSONdata.weeks.Length == 0)
            {

            }
            else {
                var containsStandard = standardWeeks.Intersect(JSONdata.weeks);
                if (containsStandard.Count() != 0)
                {
                    proposedRequest = proposedRequest.Where(r => r.weeks_request.Any(f => JSONdata.weeks.Contains(f.week)) || r.weeks == 1.ToString());
                }
                else
                {
                    proposedRequest = proposedRequest.Where(r => r.weeks_request.Any(f => JSONdata.weeks.Contains(f.week)));
                }
            }
            

            



            var bookedRooms = proposedRequest.Select(r => r.rooms);
            List<room> bookedRoomsList = new List<room>();
            foreach(var room in bookedRooms){
                bookedRoomsList.Add(room.First());
            }
            
            List<room> suitableRoomsList = rooms.ToList();

            var complementList = new List<room>(suitableRoomsList);
            foreach (var bookedRoom in bookedRoomsList) {
                complementList.Remove(bookedRoom);
            }



            var deptRooms = db.rooms.Include(r => r.building).Include(r => r.facilities).Where(r => r.belongsTo==JSONdata.deptCode);

            roomCheckerObject suitableRooms = new roomCheckerObject();
            suitableRooms.code = JSONdata.deptCode;
            suitableRooms.roomNo = JSONdata.roomNo;
            suitableRooms.RequestNo = JSONdata.RequestNo;
            if(rooms.ToList().Count() >0){
                suitableRooms.rooms = complementList.ToList();
                var buildings = rooms.Select(r => r.building).Distinct();
                suitableRooms.buildings = buildings.ToList();
            }
            if(bookedRooms.Count() >0){
                suitableRooms.bookedRooms = bookedRoomsList;
            }

            if(deptRooms.Count() >0){
                suitableRooms.deptRooms = deptRooms.ToList();
            }
            return PartialView(suitableRooms);
        }

        // POST: create/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        /*[HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "requestID,moduleCode,deptCode,priority,day,start,length,weeks,type,otherReqs,date,roundID,requestLink,sent,status,viewed,booked")] request request)
        {
            if (ModelState.IsValid)
            {
                db.requests.Add(request);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.deptCode = new SelectList(db.departments, "code", "name", request.deptCode);
            ViewBag.moduleCode = new SelectList(db.modules, "moduleCode", "moduleTitle", request.moduleCode);
            ViewBag.roundID = new SelectList(db.rounds, "roundID", "roundID", request.roundID);
            return View(request);
        }*/

        

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

