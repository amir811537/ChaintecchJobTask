import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cards from "./Cards/Cards";
import img1 from "../../assets/card1.png";
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const HomeContent = () => {
  const serviceData = [
    {
      title: "Blockchain Development",
      imgUrl: img1,
      bgColor: "#DFFFED",
    },
    {
      title: "Blockchain Development",
      imgUrl: img2,
      bgColor: "#D9FDFF",
    },
    {
      title: "Security AAS",
      imgUrl: img3,
      bgColor: "#FFE6E6",
    },
    {
      title: "Motion Graphic",
      imgUrl: img4,
      bgColor: "#E0E3FE",
    },
    {
        title: "Blockchain Development",
        imgUrl: img1,
        bgColor: "#DFFFED",
      },
      {
        title: "Blockchain Development",
        imgUrl: img2,
        bgColor: "#D9FDFF",
      },
      {
        title: "Security AAS",
        imgUrl: img3,
        bgColor: "#FFE6E6",
      },
      {
        title: "Motion Graphic",
        imgUrl: img4,
        bgColor: "#E0E3FE",
      },
  ];
  return (
    <div>
      <div className=" flex justify-between items-center py-7">
        <div className="text-left p-3">
          <h2 className="lg:text-5xl text-3xl font-bold">Servies We Offer</h2>
          <p className="lg:text-xl">
            Discover the digital possibilities for your brand with our
            comprehensive suite of services.
          </p>
        </div>
        {/* pagination here */}
        <div className="flex justify-center items-center gap-3">
          <button>
            <FaArrowLeft className="text-2xl" />
          </button>
          <button className="">
            <FaArrowRight className="text-4xl rounded-full border-black border p-2" />
          </button>
        </div>
      </div>

      {/* here it all cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {serviceData?.map((item, index) => (
          <Cards data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
