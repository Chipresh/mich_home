import { FC } from "react";
import box from "../../../Assets/Location_Asset/Rectangle 3.png";
import box1 from "../../../Assets/Location_Asset/ectangle.png";
import { Link } from "react-router-dom";

export const Box: FC = () => {
  return (
    <>
      {/* BOX */}

      <div className="bg-[#FFF] flex flex-col md:flex-row xl:flex-row items-center xl:gap-[40px] md:px-[30px] lg:px-[25px] gap-[20px] px-[25px] xl:px-[50px] py-[20px] xl:py-0 md:pb-[50px] xl:pb-[100px] justify-between md:py-0">
        <div className="flex flex-col xl:gap-[50px] gap-[20px]">
          <h1
            style={{ fontFamily: "Millik" }}
            className="xl:text-[70px] text-[30px] md:text-[35px] w-[250px] md:w-[250px] xl:w-[500px] font-[400] leading-[100%]"
          >
            <span className="text-[#004643]">Find the right apartment</span>
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#414647] xl:text-[20px] font-[500] leading-[170%] md:w-[400px] xl:w-[550px]"
          >
            In Awka, there are over 190,000 housing units. With no cost to you,
            we help you find your one.
          </p>

          <div
            style={{ fontFamily: "Poppins" }}
            className="flex xl:text-[20px] gap-[8px] bg-[#0C1618] justify-center w-[60%] xl:w-[40%] text-[#FFF] rounded-[8px] xl:py-[16px] xl:px-[20px] font-[500] leading-[140%] h-[40px] xl:h-[60px] items-center"
          >
            <button>
              <Link to="/apartment">View Listings</Link>
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.676 21.45L22.1236 12L12.6736 2.55005M1.87598 12H22.126H1.87598Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src={box} alt="gallery" className="hidden xl:block md:block" />
          <img src={box1} alt="gallery" className="block xl:hidden md:hidden" />
        </div>
      </div>
    </>
  );
};
