import React from 'react'
import "./Account.css"
export default function Account(){
    return (
        <div className="screen">
            <div className="label font-black ..."><b>Edit Profiles</b></div>
            <div className="image"></div>
            <div className="info1"><b>User Information</b></div>
            <div className="input1">
            <div className="fname">
                <label><b>First Name</b></label>
                <input id="firstname" type="text" />
                </div>
                <div className="lname">
                <label><b>Last Name</b></label>
                <input id="lastname" type="text" />
            </div>
            </div>
            <div className="emailaddress">
                <label><b>Email Address</b></label>
                <input id="email" type="text" />
            </div>
            <div className="input2">
            <div className="gender">
                <label><b>Gender</b></label>
                <input id="Gender" type="text" />
                </div>
                <div className="phone">
                <label><b>Phone</b></label>
                <input id="Phone" type="text" />
            </div>
            </div>
            <div className="address">
               <div> <label className="info2"><b>Address</b></label><label className="newaddress">NEW ADDRESS</label></div>
             <label className="newaddress1"><b>Charles K. Kelfer</b><input className="NewAddress1"type="radio" name="address"/></label>
             <div className="new-address">
                 3012 Broaddus Avenue Saint Joseph, California 4908
             </div>
             <div className="path1"><hr/></div>
              <label className="newaddress2"><b>Phyllis C. Madrid</b><input className="NewAddress2" type="radio" name="address"/></label>
              <div className="new-address">
           1195 Sherman Street Lenora, California 6764
              </div>
              <div className="path1"><hr/></div>
            </div>
            <button className="save">Save</button>
            <div className="path2"></div>
            </div>
        
    )
}
