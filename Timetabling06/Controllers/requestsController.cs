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
    public class requestsController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: requests
        public ActionResult Index()
        {
            var requests = db.requests.Include(r => r.department).Include(r => r.module).Include(r => r.round);
            return View(requests.ToList());
        }

        // GET: requests/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            request request = db.requests.Find(id);
            if (request == null)
            {
                return HttpNotFound();
            }
            return View(request);
        }

        // GET: requests/Create
        public ActionResult Create()
        {
            ViewBag.deptCode = new SelectList(db.departments, "code", "name");
            ViewBag.moduleCode = new SelectList(db.modules, "moduleCode", "moduleTitle");
            ViewBag.roundID = new SelectList(db.rounds, "roundID", "roundID");
            return View();
        }

        // POST: requests/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
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
        }

        // GET: requests/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            request request = db.requests.Find(id);
            if (request == null)
            {
                return HttpNotFound();
            }
            ViewBag.deptCode = new SelectList(db.departments, "code", "name", request.deptCode);
            ViewBag.moduleCode = new SelectList(db.modules, "moduleCode", "moduleTitle", request.moduleCode);
            ViewBag.roundID = new SelectList(db.rounds, "roundID", "roundID", request.roundID);
            return View(request);
        }

        // POST: requests/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "requestID,moduleCode,deptCode,priority,day,start,length,weeks,type,otherReqs,date,roundID,requestLink,sent,status,viewed,booked")] request request)
        {
            if (ModelState.IsValid)
            {
                db.Entry(request).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.deptCode = new SelectList(db.departments, "code", "name", request.deptCode);
            ViewBag.moduleCode = new SelectList(db.modules, "moduleCode", "moduleTitle", request.moduleCode);
            ViewBag.roundID = new SelectList(db.rounds, "roundID", "roundID", request.roundID);
            return View(request);
        }

        // GET: requests/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            request request = db.requests.Find(id);
            if (request == null)
            {
                return HttpNotFound();
            }
            return View(request);
        }

        // POST: requests/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            request request = db.requests.Find(id);
            db.requests.Remove(request);
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
