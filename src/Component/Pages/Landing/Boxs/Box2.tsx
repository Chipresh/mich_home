import { FC } from "react";
import img from "../../../Assets/Landing_page_Asset/Rectangle 4.png";
import img1 from "../../../Assets/Landing_page_Asset/Re.png";
import rec from "../../../Assets/Landing_page_Asset/Rectangle 4 (1).png";

export const Box2: FC = () => {
  return (
    <>
      {/* BOX2 */}
      <div className="bg-[#FAFAFC] flex flex-col md:px-[30px] lg:px-[25px] xl:px-[50px] px-[15px] py-[20px] md:py-[50px] lg:py-[50px] xl:py-[100px] gap-[20px] lg:gap-[50px] xl:gap-[100px] md:gap-[50px]">
        <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row justify-center items-center md:gap-[30px] lg:gap-[30px] xl:gap-[90px]">
          <div className="flex flex-col xl:gap-[20px] md:gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="xl:text-[30px] lg:text-[25px] text-[20px] font-[900] leading-[130%]"
            >
              Deals you can’t get anywhere else
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="xl:text-[20px] font-[400] text-[#414647] leading-[170%] md:w-[400px] lg:w-[450px] xl:w-[710px]"
            >
              We provide our friends special access to the agreements we reach
              with properties! Act quickly to benefit from the discounts as
              these limited offers are only accessible through Mich Homes.
              Obtain the information first by subscribing to alerts.
            </p>
          </div>
          <div>
            <img
              src={img}
              alt="gallery"
              className="hidden xl:block lg:block md:block"
            />
            <img
              src={img1}
              alt="gallery"
              className="block xl:hidden lg:hidden pt-[10px] md:hidden"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row md:flex-row xl:flex-row items-center lg:gap-[30px] xl:gap-[90px] md:gap-[20px]">
          <div className="xl:block hidden lg:block md:block">
            <img src={rec} alt="gallery" />
          </div>
          <div className="flex flex-col xl:gap-[20px] lg:gap-[10px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="xl:text-[30px] lg:text-[25px] text-[20px] font-[900] lg:w-[250px] xl:w-[500px] leading-[130%]"
            >
              Exclusive concierge services from Mich Homes!
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="xl:w-[600px] lg:w-[450px] md:w-[400px] font-[400] leading-[170%] text-[#414647] xl:text-[20px]"
            >
              In order to make your life simpler even after you have been
              matched with your new apartment, our concierge service specializes
              in connecting our customers with partners that offer affordable
              prices. All Mich Homes customers can use this feature for free!
            </p>
          </div>
        </div>
      </div>

      {/* BOX2 */}
      <div className="xl:px-[50px] lg:px-[25px] md:px-[30px] px-[15px] flex flex-col xl:gap-[10px] md:gap-[10px] lg:gap-[10px] md:pb-[50px] xl:pb-[100px]">
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row justify-between items-center py-[25px] md:py-[50px] xl:py-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="xl:text-[30px] lg:text-[25px] text-[20px] font-[900] leading-[130%]"
          >
            A single, universal blog
          </p>
          <div className="flex items-center xl:gap-[8px] gap-[4px]">
            <p className="text-[#004643] xl:block lg:block hidden xl:text-[20px] font-[400] leading-[170%]">
              Read more insights from our team
            </p>
            <p className="text-[#000] xl:hidden lg:hidden block font-[400] leading-[170%]">
              Read more insights from our team
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.676 21.45L22.1236 12L12.6736 2.55002M1.87598 12H22.126H1.87598Z"
                stroke="#004643"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex lg:flex xl:flex justify-center items-center gap-[10px]">
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px]">
            <div className="flex lg:pl-[10px] xl:pl-[20px] md:pt-[240px] md:pl-[10px] lg:pt-[240px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center md:w-[50%] lg:w-[50%] xl:w-[40%] px-[4px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px]">
            <div className="flex lg:pl-[10px] xl:pl-[20px] lg:pt-[240px] md:pt-[240px] md:pl-[10px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[20%] px-[8px] text-[#FFF]"
              >
                RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                5 Things to Look For in a Great Apartment Finder
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px] md:hidden xl:block">
            <div className="flex lg:pl-[10px] xl:pl-[20px] lg:pt-[240px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[35%] px-[8px] text-[#FFF]"
              >
                PEOPLE, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                Renting with roommates: Your Guide
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:flex lg:flex justify-center hidden items-center gap-[10px] md:flex">
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px]">
            <div className="flex lg:pl-[10px] xl:pl-[20px] lg:pt-[240px] md:pl-[10px] md:pt-[240px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center md:w-[50%] lg:w-[50%] xl:w-[40%] px-[4px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px]">
            <div className="flex lg:pl-[10px] xl:pl-[20px] lg:pt-[240px] md:pl-[10px] md:pt-[240px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center md:w-[50%] lg:w-[50%] xl:w-[40%] px-[4px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[500px] h-[408px] md:hidden xl:block">
            <div className="flex pl-[10px] xl:pl-[20px] lg:pt-[240px] xl:pt-[250px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[10px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center lg:w-[50%] xl:w-[40%] px-[4px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[300px] text-[20px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] xl:hidden lg:hidden md:hidden">
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/angle(2).png')] xl:hidden block bg-cover bg-no-repeat bg-center h-[296px]">
            <div className="flex pl-[10px] xl:pl-[20px] pt-[180px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] xl:text-[10px] text-[5px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[30%] px-[4px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[200px] xl:text-[20px] text-[10px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] xl:text-[14px] text-[10px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="50"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/angle(1).png')] xl:hidden block bg-cover bg-no-repeat bg-center h-[296px]">
            <div className="flex pl-[10px] xl:pl-[20px] pt-[180px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] xl:text-[10px] text-[5px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[20%] px-[4px] text-[#FFF]"
              >
                RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[200px] xl:text-[20px] text-[10px] font-[500] leading-[150%] text-[#FFF]"
              >
                5 Things to Look For in a Great Apartment Finder
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] xl:text-[14px] text-[10px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="50"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/angle.png')] xl:hidden block bg-cover bg-no-repeat bg-center h-[296px]">
            <div className="flex pl-[10px] xl:pl-[20px] pt-[180px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] xl:text-[10px] text-[5px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[20%] px-[4px] text-[#FFF]"
              >
                PEOPLE, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[150px] xl:text-[20px] text-[10px] font-[500] leading-[150%] text-[#FFF]"
              >
                Renting with roommates: Your Guide
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] xl:text-[14px] text-[10px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="50"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
