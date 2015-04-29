using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Timetabling06.Models;
using Timetabling06.ModelViews;


namespace Timetabling06.Controllers
{
    public class adminController : Controller
    {
        private team06Entities db = new team06Entities();

        // GET: admin
        public ActionResult Index(String user)
        {
            if (user == null)
            {
                return RedirectToAction("Index", "Home", new { error = "Please Log In." });
            }
            else
            {
                HomeModel data = new HomeModel();
                data.user = db.departments.Where(r => r.code == user).First();
                data.unseenRequests = db.requests.Where(r => r.deptCode == user).Count();


                return View(data);
            }

        }

    }
}