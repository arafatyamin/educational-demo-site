import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navLinks = <React.Fragment>
  <li>
  <Link to="" className='' >HOME</Link>
  </li>
  <li tabIndex={0} >
  <Link className="justify-between ">ABOUT US</Link>
    <ul className="p-2 -left-64 lg:left-0 w-64 bg-base-200"> 
<li><Link to="" >Message from Chairman</Link></li>
<li><Link to="" >Message from Principal</Link></li>
<li><Link to="" >Governing Body</Link></li>
<li><Link to="" >Master Plan</Link></li>
<li><Link to="" >History</Link></li>
<li><Link to="" >Vision and Objectives</Link></li>
<li><Link to="" >Infrastructure</Link></li>
</ul>
  </li>
  <li tabIndex={0} className="">
  <Link className="justify-between">ACADEMIC</Link>
    <ul className="p-2 -left-64 lg:left-0 w-64 bg-base-200"> 
<li><Link to="" >Code of Conducts</Link></li>
<li><Link to="" >Guideline for Parents</Link></li>
<li><Link to="" >Dress Code</Link></li>
<li className='w-full'><Link to="" className='w-full'>HomeWork A Class <br /> Lecture Documents</Link></li>
<li><Link to="" >Lesson Plan</Link></li>
<li><Link to="" >Academic Calendar</Link></li>
<li><Link to="" >Syllabus</Link></li>
<li><Link to="" >Class Routine</Link></li>
<li><Link to="" >Co-curricular Activities</Link></li>
</ul>
  </li>
  <li tabIndex={0} className="">
  <Link className="justify-between">INFORMATION</Link>
    <ul className="p-2 -left-64 lg:left-0 w-64 bg-base-200"> 
<li><Link to="" >Notice Board</Link></li>
<li><Link to="" >Payment Procedure</Link></li>
<li><Link to="" >Facilities</Link></li>
<li><Link to="" >News and Events</Link></li>
<li><Link to="" >Our Achievements</Link></li>
<li><Link to="" >List Of Holidays</Link></li>
<li><Link to="" >Teachers Info</Link></li>
<li><Link to="" >Student Info</Link></li>
</ul>
  </li>
  
  <li>
  <Link to="" >ADMISSION</Link>
  </li>
  <li>
  <Link to="" >CAMPUS LIFE</Link>
  </li>
  <li>
  <Link to="" >EMPLOYMENT</Link>
  </li>
  <li>
  <Link to="" >CONTACT</Link>
  </li>
  <li className=''>
  <Link to="" >স্বাধীনতার সুবর্ণ জয়ন্তী কর্নার</Link>
  </li>
    
</React.Fragment>

    return (
        
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  <Link to='' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end mr-5">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost  swap swap-rotate lg:hidden">
  
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
      </label>
      <ul tabIndex={0} className="menu right-0 flex-wrap menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-56 -right-0">
        {navLinks}
      </ul>
    </div>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {navLinks}
    </ul>
  </div>
</div>
    );
};

export default Navbar;