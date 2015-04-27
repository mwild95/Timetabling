using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class createObjects
    {
        public request requests  { get; set; }
        public String[] weeks { get; set; }
        public String[] facilities { get; set; }
    }
}