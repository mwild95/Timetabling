//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Timetabling06.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class request
    {
        public request()
        {
            this.room_request = new HashSet<room_request>();
            this.weeks_request = new HashSet<weeks_request>();
            this.rooms = new HashSet<room>();
            this.facilities = new HashSet<facility>();
        }
    
        public int requestID { get; set; }
        public string moduleCode { get; set; }
        public string deptCode { get; set; }
        public byte priority { get; set; }
        public byte day { get; set; }
        public int start { get; set; }
        public byte length { get; set; }
        public string weeks { get; set; }
        public string type { get; set; }
        public string otherReqs { get; set; }
        public int roundID { get; set; }
        public Nullable<int> requestLink { get; set; }
        public byte sent { get; set; }
        public byte status { get; set; }
        public byte viewed { get; set; }
        public byte booked { get; set; }
        public Nullable<System.DateTime> date { get; set; }
    
        public virtual department department { get; set; }
        public virtual module module { get; set; }
        public virtual round round { get; set; }
        public virtual ICollection<room_request> room_request { get; set; }
        public virtual ICollection<weeks_request> weeks_request { get; set; }
        public virtual ICollection<room> rooms { get; set; }
        public virtual ICollection<facility> facilities { get; set; }
    }
}
