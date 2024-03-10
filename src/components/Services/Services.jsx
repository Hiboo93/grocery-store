import { SERVICESDATA } from "../../constants/index.js";

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark">
          Fresh and <span className="text-primary">Tasty Fruits</span>{" "}
        </h1>
        <p className="text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          ratione similique illum id iste possimus tempora harum assumenda
          error! Neque!
        </p>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICESDATA.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="p-4 text-center space-y-6"
          >
            <img
              src={item.image}
              alt=""
              height={180}
              width={180}
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{item.title}</h1>
              <p className="text-dark">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
