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
    public class modulesController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: modules
        public ActionResult Index()
        {
            var modules = db.modules.Include(m => m.department);
            return View(modules.ToList());
        }

        // GET: modules/Details/5
        public ActionResult Details(string deptCode, string moduleCode)
        {
            if (deptCode == null || moduleCode == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            module module = db.modules.Find(moduleCode,deptCode);
            if (module == null)
            {
                return HttpNotFound();
            }
            return View(module);
        }

        // GET: modules/Create
        public ActionResult Create()
        {
            ViewBag.deptCode = new SelectList(db.departments, "code", "name");
            return View();
        }

        // POST: modules/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "moduleCode,deptCode,moduleTitle")] module module)
        {
            if (ModelState.IsValid)
            {
                db.modules.Add(module);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.deptCode = new SelectList(db.departments, "code", "name", module.deptCode);
            return View(module);
        }

        // GET: modules/Edit/5
        public ActionResult Edit(string deptCode, string moduleCode)
        {
            if (deptCode == null || moduleCode == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            module module = db.modules.Find(moduleCode, deptCode);
            if (module == null)
            {
                return HttpNotFound();
            }
            ViewBag.deptCode = new SelectList(db.departments, "code", "name", module.deptCode);
            return View(module);
        }

        // POST: modules/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "moduleCode,deptCode,moduleTitle")] module module)
        {
            if (ModelState.IsValid)
            {
                db.Entry(module).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.deptCode = new SelectList(db.departments, "code", "name", module.deptCode);
            return View(module);
        }

        // GET: modules/Delete/5
        public ActionResult Delete(string deptCode, string moduleCode)
        {
            if (deptCode == null || moduleCode == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            module module = db.modules.Find(moduleCode, deptCode);
            if (module == null)
            {
                return HttpNotFound();
            }
            return View(module);
        }

        // POST: modules/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            module module = db.modules.Find(id);
            db.modules.Remove(module);
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
