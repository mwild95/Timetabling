using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class RequestDepartment
    {
        public department user { get; set; }
        public List<request> requests { get; set; }
    }
}