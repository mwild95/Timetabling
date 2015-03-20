using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class ModuleDepartment
    {
        public string code { get; set; }
        public string username { get; set; }
        public ICollection<module> modules { get; set; }
        public ICollection<building> buildings { get; set; }
        public ICollection<room> rooms { get; set; }
        public ICollection<round> rounds { get; set; }
    }
}