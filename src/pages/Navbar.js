import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <React.Fragment>
                <li>
                <Link to="" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                </li>
                <li>
                <Link to="" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                </li>
                <li>
                <Link to="" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>
                    </React.Fragment>

    return (
        
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  <Link to='' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end mr-5">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu flex-wrap-reverse menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to=''>Item 1</Link></li>
        <li tabIndex={0}>
          <Link to='' className="justify-start">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2">
            <li><Link to=''>Submenu 1</Link></li>
            <li><Link to=''>Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link to=''>Item 3</Link></li>
      </ul>
    </div>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to=''>Item 1</Link></li>
      <li tabIndex={0}>
        <Link to=''>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2">
          <li><Link to=''>Submenu 1</Link></li>
          <li><Link to=''>Submenu 2</Link></li>
        </ul>
      </li>
      <li><Link to=''>Item 3</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;