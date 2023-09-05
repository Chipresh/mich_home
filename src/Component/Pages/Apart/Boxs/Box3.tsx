import { FC } from "react";
import {Link} from "react-router-dom"

export const Box3: FC = () => {
  return (
    <>
      <div className="md:bg-[url('/src/Component/Assets/Apart_Asset/Rectangle.png')] bg-[url('/src/Component/Assets/Apart_Asset/last.png')] h-[448px] bg-no-repeat bg-cover bg-center w-[100%] md:h-[552px]">
        <div className="md:px-[50px] px-[15px] flex flex-col gap-[150px] md:gap-[100px] pt-[50px] md:pt-[100px] items-center md:items-start">
          <div
            style={{ fontFamily: "Satoshi" }}
            className="md:text-[#0C1618] text-[#fff] w-[280px] flex text-center md:text-start md:w-[509px] text-[30px] md:text-[40px] md:font-[900] leading-[130%]"
          >
            <p>Discover your ideal apartment</p>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex gap-[8px] font-[500] h-[56px] px-[16px] leading-[150%] md:text-[20px] items-center md:h-[70px] md:py-[16px] md:px-[30px] rounded-[8px] text-[#FFF] xl::w-[17%] md:bg-[#0C1618] bg-[#D1AC00]"
          >
            <button>
              <Link to="/form">Get Started</Link>
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6755 21.45L22.1231 12L12.6731 2.55003M1.87549 12H22.1255H1.87549Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
