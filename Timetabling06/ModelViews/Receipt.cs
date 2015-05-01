using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Timetabling06.Models;

namespace Timetabling06.ModelViews
{
    public class Receipt
    {
        public string moduleCode { get; set; }
        public string moduleTitle { get; set; }
        public round submittedIn { get; set; }
        public string department { get; set; }
        public createObjects[] requests { get; set; }

    }
}