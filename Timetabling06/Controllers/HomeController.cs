using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Timetabling06.Models;
using System.Data;
using System.Data.Entity;
using System.Net;


namespace Timetabling06.Controllers
{
    public class HomeController : Controller
    {

        private team06Entities db = new team06Entities();


        // GET: archive/Create
        public ActionResult Index(String error)
        {
            ViewBag.error = error;
            return View();
        }

        // POST: archive/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index([Bind(Include = "username, password")] department user, String deptCode, String password)
        {
            if (ModelState.IsValid)
            {
                var departments = db.departments.Where(r=>r.username==user.username);
                if (departments.Count() == 1)
                {
                    var passwordCheck = departments.First();
                    if (passwordCheck.password == password)
                    {
                        //Yousif
                        if (departments.First().code == "admin")
                        {
                            return RedirectToAction("Index", "admin", new { user = departments.First().code });

                        }
                        else //
                        return RedirectToAction("Index", "Timetabler", new {user=departments.First().code });
                    }
                    else
                    {
                        
                        ViewBag.error = "Password Incorrect";
                        return View();
                    }
                }
                else {
                    ViewBag.error = "No such username and password combination.";
                    return View();
                }
                
            }
            ViewBag.error = "No such username and password combination.";
            return View();
            
        }
    }
}