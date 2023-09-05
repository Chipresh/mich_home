import { FC } from "react";
import img from "../../../Assets/Location_Asset/Rectangle 4.png";
import imgs from "../../../Assets/Location_Asset/Rectangle 4 (1).png";
import img1 from "../../../Assets/Location_Asset/img (1).png";
import imgs1 from "../../../Assets/Location_Asset/img (2).png";
import { Link } from "react-router-dom";

export const Box3: FC = () => {
  return (
    <>
      <div className="xl:px-[50px] md:px-[30px] lg:px-[25px] px-[15px] flex md:py-[50px] xl:py-[100px] py-[20px] flex-col xl:gap-[100px] gap-[20px]">
        <div className="flex justify-between items-center flex-col-reverse xl:flex-row gap-[20px] md:flex-row xl:gap-0">
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="xl:text-[25px] md:text-[20px] text-[18px] font-[600] xl:font-[900] leading-[150%] xl:leading-[130%] md:w-[250px] xl:w-[450px]"
            >
              Everyone needs a place to live, and you deserve a place you adore.
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#414647] font-[400] leading-[170%] xl:text-[20px] xl:w-[600px] md:w-[400px]"
            >
              Finding an apartment in "Location" might be challenging. Please
              allow us to assist. Our apartment specialists can assist you in
              finding the ideal Fort Worth apartment in the most suitable area
              for your requirements.
            </p>
          </div>
          <div>
            <img
              src={img}
              alt="gallery"
              className="h-[450px] xl:block md:block hidden"
            />
            <img
              src={imgs1}
              alt="gallery"
              className="block xl:hidden md:hidden"
            />
          </div>
        </div>
        <div className="flex justify-between items-center xl:gap-[30px] flex-col md:flex-row xl:flex-row gap-[20px]">
          <div>
            <img
              src={imgs}
              alt="gallery"
              className="h-[450px] xl:block md:block hidden"
            />
            <img
              src={img1}
              alt="gallery"
              className="block xl:hidden md:hidden"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="xl:text-[25px] md:text-[20px] text-[18px] font-[600] xl:font-[900] leading-[150%] xl:leading-[130%] xl:w-[400px]"
            >
              Having access to Location's top apartment bargains.
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#0C1618] font-[400] leading-[170%] xl:text-[20px] xl:w-[550px] md:w-[350px]"
            >
              Trying to get the greatest apartment bargain may be stressful. To
              provide our clients with the greatest cost, our staff negotiates
              with properties.
            </p>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#FFF] xl:text-[20px] font-[500] justify-center w-[80%] leading-[150%] bg-[#0C1618] xl:h-[60px] xl:py-[16px] py-[13px] px-[15px] xl:px-[30px] flex items-center gap-[8px] xl:w-[50%] rounded-[8px]"
            >
              <button>
                <Link to="/apartment">View Latest Deals</Link>
              </button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6755 21.95L22.1231 12.5L12.6731 3.05003M1.87549 12.5H22.1255H1.87549Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
