/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/WhatsApp Image 2024-03-27 at 12.22.56 PM.jpeg"
const Navbar = () => {

    const navlinks =<>

<li><NavLink className= " text-xl text-[#00FFA7]" to="/company">Company</NavLink></li>
<li><NavLink  className= " text-xl hover:text-[#00FFA7]" to="/servies">Services</NavLink></li>
<li><NavLink  className= " text-xl hover:text-[#00FFA7]" to="/businessModel">Business Models</NavLink></li>
<li><NavLink  className= " text-xl hover:text-[#00FFA7]" to="/blogs">Blogs</NavLink></li>
<li><NavLink  className= " text-xl hover:text-[#00FFA7]" to="/contactsUs">Contacts Us</NavLink></li>

</>

    return (
        <div className="navbar flex items-center  md:justify-evenly p-8 h-24 w-full bg-black">
        <div className="flex justify-between items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenu3Line className="text-white text-2xl" />
                        </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black lg:text-white w-52">
             {
                navlinks
             }
            </ul>
          </div>


<img src={logo} alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black lg:text-white">
            {
                navlinks
            }
          </ul>
        </div>

      </div>
    );
};

export default Navbar;