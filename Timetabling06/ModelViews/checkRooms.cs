using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Timetabling06.ModelViews
{
    public class checkRooms
    {
        public int day { get; set; }
        public int start { get; set; }
        public int length { get; set; }
        public int[] weeks { get; set; }
        public string type { get; set; }
        public int roomNo { get; set; }
        public int RequestNo { get; set; }
        public string deptCode { get; set; }
        public int capacity { get; set; }
        public string park { get; set; }
        public string[] facilities { get; set; }
        public int roundID { get; set; }
    }
}