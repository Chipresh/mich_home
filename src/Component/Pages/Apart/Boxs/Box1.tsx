import { FC } from "react";

export const Box1: FC = () => {
  return (
    <>
      <div className="xl:px-[50px] lg:px-[25px] md:px-[30px] py-[40px] md:py-0 xl:py-0 px-[15px] bg-[#0C1618] md:bg-[#fff] xl:bg-white">
        <div className="flex flex-col pb-[20px] md:pb-0 xl:pb-0 md:py-[25px] xl:py-[50px] gap-[10px] md:gap-[20px] xl:gap-[20px] items-center text-center">
          <p
            style={{ fontFamily: "Millik" }}
            className="xl:text-[#004643] md:text-[#004643] text-[#fff] text-[30px] xl:text-[50px] font-[400] leading-[130%] md:w-[100%] xl:w-[100%] w-[200px]"
          >
            Latest Apartment Listings
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="xl:w-[1010px] xl:text-[#414647] md:text-[#414647] text-[#fff] xl:text-[20px] font-[500] leading-[170%] xl:pb-[20px] md:pb-[20px]"
          >
            This is the current situation with “Location” apartments. Since
            apartment prices fluctuate daily, we'll let you in on a little
            secret: as we come across listings that grab our eye, we'll post
            them here so you can see them, too. After all, it is our duty to
            locate your ideal apartment at no cost to you. Browse through some
            of the most up-to-date apartment listings in Location, Awka below,
            then get in touch if one catches your eye and you require
            information on current rates and availability. Contact a
            representative now for more information!
          </p>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="xl:flex xl:justify-between md:flex md:justify-between grid grid-cols-2 gap-y-[10px] gap-x-[10px] md:gap-[5px] xl:gap-[10px] text-center xl:text-[15px] md:text-[15px] font-[600] leading-[150%] text-[#FFF]"
        >
          <div className="xl:w-[200px] md:w-[150px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>Neighbourhood</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>Budget</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>Layout</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>Sq. Footage</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>All Recent</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#414647] xl:bg-[#0C1618]">
            <button>Sort</button>
          </div>
          <div className="xl:w-[200px] md:w-[100px] xl:h-[50px] flex items-center justify-center py-[15px] xl:py-[30px] xl:px-[20px] rounded-[8px] bg-[#D1AC00]">
            <button>Clear Filters</button>
          </div>
        </div>
      </div>
    </>
  );
};
