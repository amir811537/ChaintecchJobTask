import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cards from "./Cards/Cards";

const HomeContent = () => {
    return (
        <div>


            <div className=" flex justify-between items-center py-7">
               <div className="text-left">
               <h2 className="text-5xl font-bold">Servies We Offer</h2>
                <p className="text-xl">Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
               </div>
{/* pagination here */}
<div className="flex justify-center items-center gap-3" >
<button><FaArrowLeft className="text-2xl"/></button>
<button className="">
  <FaArrowRight className="text-4xl rounded-full border-black border p-2" />
</button>


</div>
            </div>


            {/* here it all cards  */}
<Cards></Cards>


            
        </div>
    );
};

export default HomeContent;