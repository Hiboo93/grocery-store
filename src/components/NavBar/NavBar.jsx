import { NAVLINKS } from "../../constants/index";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ sideBar, handleSideBar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange<span className="font-normal text-2xl">Mint</span>
          </h1>
      
          {/* NavLinks section */}
          <ul className=" lg:flex hidden space-x-4 text-xl">
            {NAVLINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
      
          {/* Hamburger menu */}
          <div onClick={(sideBar) => handleSideBar(sideBar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
