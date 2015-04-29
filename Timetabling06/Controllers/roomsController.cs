using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Timetabling06.Models;

namespace Timetabling06.Controllers
{
    public class roomsController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: rooms
        public ActionResult Index(string user)
        {
            if(user == null){
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }else{
                var rooms = db.rooms.Include(r => r.building).Include(r => r.department);
                ViewBag.user = user;
                GetBuildings(); //Gets buildings from database to display on load
                return View(rooms.ToList());
            }
            
        }

        // GET: rooms/Details/5
        public ActionResult Details(string roomNumber, string code, string user)
        {
            if(user == null){
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }else{
                if (code == null || roomNumber == null)
                {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                room room = db.rooms.Find(roomNumber, code);
                if (room == null)
                {
                   return HttpNotFound();
                 }
                ViewBag.user = user;
                return View(room);
             }
            
        }

        // GET: rooms/Create
        public ActionResult Create(string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                ViewBag.buildingCode = new SelectList(db.buildings, "code", "name");
                ViewBag.belongsTo = new SelectList(db.departments, "code", "name");
                ViewBag.user = user;
                return View();
            }
        }

        // POST: rooms/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "roomNumber,buildingCode,roomType,roomStructure,capacity,belongsTo")] room room, string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                if (ModelState.IsValid)
                {
                    db.rooms.Add(room);
                    db.SaveChanges();
                    return RedirectToAction("Index", new { user = user });
                }

                ViewBag.buildingCode = new SelectList(db.buildings, "code", "name", room.buildingCode);
                ViewBag.belongsTo = new SelectList(db.departments, "code", "name", room.belongsTo);
                ViewBag.user = user;
                return View(room);
            }
        }

        // GET: rooms/Edit/5
        public ActionResult Edit(string roomNumber, string code, string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else { 
                 if (roomNumber == null || code == null)
                    {
                     return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                    }
                    room room = db.rooms.Find(roomNumber, code);
                    if (room == null)
                    {
                     return HttpNotFound();
                     }
                 ViewBag.buildingCode = new SelectList(db.buildings, "code", "name", room.buildingCode);
                    ViewBag.belongsTo = new SelectList(db.departments, "code", "name", room.belongsTo);
                    ViewBag.user = user;
                    return View(room);
            }
             
        }

        // POST: rooms/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "roomNumber,buildingCode,roomType,roomStructure,capacity,belongsTo")] room room, string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                if (ModelState.IsValid)
                {
                    db.Entry(room).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Index", new { user = user });
                }
                ViewBag.buildingCode = new SelectList(db.buildings, "code", "name", room.buildingCode);
                ViewBag.belongsTo = new SelectList(db.departments, "code", "name", room.belongsTo);
                ViewBag.user = user;
                return View(room);
            }
        }

        // GET: rooms/Delete/5
        public ActionResult Delete(string roomNumber, string code, string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                if (roomNumber == null || code == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                room room = db.rooms.Find(roomNumber, code);
                if (room == null)
                {
                    return HttpNotFound();
                }
                ViewBag.user = user;
                return View(room);
            }
        }

        // POST: rooms/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string roomNumber, string buildingCode , string user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                room room = db.rooms.Find(roomNumber, buildingCode);
                db.rooms.Remove(room);
                db.SaveChanges();
                return RedirectToAction("Index", new { user = user });
            }
        }

        //Yousif

        //Stores buildings from db to display in select box
        public ActionResult GetBuildings()
        {
            ViewBag.buildings = new SelectList(db.buildings, "name", "name");
            return View();
        }
        /*
        public JsonResult GetRoomsByBuilding(string selectedBuilding)
        {
            SelectList rooms = new SelectList(db.rooms.Where(g => g.buildingName == selectedBuilding), "roomNumber", "roomNumber");
            //  var data = from c in db.rooms
            //             select c;
            // SelectList rooms = new SelectList(data);
            return Json(rooms);
        }
        */


        //

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
