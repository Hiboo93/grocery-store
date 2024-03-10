import { useState } from "react";
import OrangeImg from "../../assets/orangebg.png"
import NavBar from "../NavBar/NavBar.jsx";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = (sidebar) => {
      if (!sideBar) {
        setSideBar(true)
      } else {
        setSideBar(false)
      }
  }

  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}
          <NavBar sideBar={sideBar} handleSideBar={handleSideBar} />

          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl pl-6 md:pl-14">01_______</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ad iste recusandae maxime modi.
              </p>
              <button className="secondary-btn">Shop Now</button>
            </div>

            {/* image section */}
            <div>
              <img src={OrangeImg} alt="Not found" className="relative z-10 w-[400px] img-shadow" />
            </div>

            {/* blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* background large text */}
        <h1 className="large-text">Orange</h1>

        {/* sidebar section */}
        {
          sideBar && (
            <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-white flex flex-col justify-center items-center gap-6">
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                  <div className="inline-block p-2 cursor-pointer">
                    <FaFacebook className="text-2xl hover:text-green-500 "/>
                  </div>
                  <div className="inline-block p-2 cursor-pointer">
                    <FaInstagram className="text-2xl hover:text-green-500 "/>
                  </div>
                  <div className="inline-block p-2 cursor-pointer">
                    <FaLinkedin className="text-2xl hover:text-green-500"/>
                  </div>
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </div>
          )
        }
      </section>
    </main>
  );
};

export default Hero;
