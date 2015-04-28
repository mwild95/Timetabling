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
    public class roundsController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: rounds
        public ActionResult Index()
        {
            var rounds = db.rounds.Include(r => r.semester1);
            return View(rounds.ToList());
        }

        // GET: rounds/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            round round = db.rounds.Find(id);
            if (round == null)
            {
                return HttpNotFound();
            }
            return View(round);
        }

        // GET: rounds/Create
        public ActionResult Create()
        {
            ViewBag.semester = new SelectList(db.semesters, "semester1", "semester1");
            return View();
        }

        // POST: rounds/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "roundID,roundNo,semester,year,startTime,endTime")] round round)
        {
            if (ModelState.IsValid)
            {
                db.rounds.Add(round);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.semester = new SelectList(db.semesters, "semester1", "semester1", round.semester);
            return View(round);
        }

        // GET: rounds/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            round round = db.rounds.Find(id);
            if (round == null)
            {
                return HttpNotFound();
            }
            ViewBag.semester = new SelectList(db.semesters, "semester1", "semester1", round.semester);
            return View(round);
        }

        // POST: rounds/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "roundID,roundNo,semester,year,startTime,endTime")] round round)
        {
            if (ModelState.IsValid)
            {
                db.Entry(round).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.semester = new SelectList(db.semesters, "semester1", "semester1", round.semester);
            return View(round);
        }

        // GET: rounds/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            round round = db.rounds.Find(id);
            if (round == null)
            {
                return HttpNotFound();
            }
            return View(round);
        }

        // POST: rounds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            round round = db.rounds.Find(id);
            db.rounds.Remove(round);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

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
