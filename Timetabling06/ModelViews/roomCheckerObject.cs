using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class roomCheckerObject
    {
        public string code { get; set; }
        public ICollection<room> rooms { get; set; }  
        public ICollection<room> deptRooms { get; set; }
        public ICollection<building> buildings { get; set; }
        public int roomNo { get; set; }
        public int RequestNo { get; set; }
        public ICollection<room> bookedRooms { get; set; }
    }
}
