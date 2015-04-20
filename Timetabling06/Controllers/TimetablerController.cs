using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Timetabling06.Models;
using Timetabling06.ModelViews;
namespace Timetabling06.Controllers
{
    public class TimetablerController : Controller
    {
        private team06Entities db = new team06Entities();
        // GET: Timetabler
        public ActionResult Index(String user)
        {
            if(user==null){
                return RedirectToAction("Index", "Home", new { error="Please Log In." });
            }else{
                HomeModel data = new HomeModel();
                data.user = db.departments.Where(r => r.code == user).First();
                data.unseenRequests = db.requests.Where(r=>r.deptCode==user).Count();
                
                
                return View(data);
            }
              public ActionResult Index()
        {
            ViewBag.roomNumber = new SelectList(db.rooms, "roomNumber", "buildingCode").Distinct();

            ViewBag.park = new SelectList(db.buildings, "code", "park" ).Distinct();

            ViewBag.building = new SelectList(db.buildings, "code", "name").Distinct();

            return View();
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
    
        }
            
        }
    }
}
