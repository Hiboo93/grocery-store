import OrangeImg from "../../assets/orangebg.png"

const Hero = () => {
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}

          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl pl-6 md:pl-14">01_______</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ad iste recusandae maxime modi.
              </p>
              <button className="primary-btn">Shop Now</button>
            </div>

            {/* image section */}
            <div>
              <img src={OrangeImg} alt="Not found" className="relative z-10 w-[400px] img-shadow" />
            </div>
            {/* blank div section */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
