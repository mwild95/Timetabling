using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
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

        public ActionResult _roomChecker(int roomNum, int requestNum, String user, int roundID, int day, int time, int length,int[] weeks,int students,String roomType,String park, String[] facilities){
            var rooms = db.rooms.Include(r=>r.building).Include(r=>r.facilities);
            rooms = rooms.Where(r => r.capacity >= students);
            if(roomType != "Any"){
                rooms = rooms.Where(r=>r.roomType.Equals(roomType));
            }
            if (park != "Any") { 
                rooms = rooms.Where(r=>r.building.park.Equals(park));
            }
            
            if (facilities != null)
            {
                for (var i = 0; i < facilities.Length; i++)
                {
                    rooms = rooms.Where(r => r.facilities.Any(f => f.facilityName.Equals(facilities[i])));

                }
            }

            var deptRooms = db.rooms.Include(r => r.building).Include(r => r.facilities).Where(r=>r.belongsTo.Equals(user));

            roomCheckerObject suitableRooms = new roomCheckerObject();
            suitableRooms.code = user;
            suitableRooms.roomNo = roomNum;
            suitableRooms.RequestNo = requestNum;
            if(rooms.Count() >0){
                suitableRooms.rooms = rooms.ToList();
                var buildings = rooms.Select(r => r.building).Distinct();
                suitableRooms.buildings = buildings.ToList();
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

