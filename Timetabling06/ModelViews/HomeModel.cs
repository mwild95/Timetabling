using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class HomeModel
    {
        public Timetabling06.Models.department user { get; set; }
        public int unseenRequests { get; set; }
    }
}