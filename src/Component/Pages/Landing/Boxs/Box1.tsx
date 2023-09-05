import { FC } from "react";
import box from "../../../Assets/Landing_page_Asset/Rectangle 54.png";
import box1 from "../../../Assets/Landing_page_Asset/Rectangle 12.png";
import "./Box1.css";

export const Box1: FC = () => {
  return (
    <>
      {/* BOX */}

      <div className="bg-[#FFF] flex flex-col md:px-[30px] px-[15px] pt-[30px] md:pt-[25px] lg:pt-[25px] gap-[20px] md:flex-row lg:flex-row xl:flex-row xl:flex lg:items-center md:items-center xl:items-center xl:gap-[40px] lg:px-[25px] xl:px-[160px] xl:pb-[50px] md:pb-[25px] lg:pb-[25px] xl:justify-between">
        <div className="flex flex-col gap-[20px] md:gap-[10px] xl:gap-[10px]">
          <h1
            style={{ fontFamily: "Millik" }}
            className="xl:text-[70px] text-[40px] md:w-[300px] w-[200px] lg:w-[300px] xl:w-[550px] font-[400] leading-[100%]"
          >
            <span className="text-[#004643]">The best place to</span>{" "}
            <span className="text-[#D1AC00]">find an Apartment in Awka.</span>
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#414647] font-[medium] xl:text-[20px] md:text-[20px] font-[600] xl:leading-[170%] xl:w-[550px] lg:w-[500px] md:w-[350px]"
          >
            In a number of Awka Capital City locations, Mich Homes offers the
            greatest local apartment locators ready to find you a rad place to
            live for the lowest possible price.
          </p>

          <div className="flex items-center xl:h-[60px]">
            <input
              style={{ fontFamily: "Poppins" }}
              type="text"
              placeholder="Search by Location or Type"
              className="shadow xl:text-[20px] text-[10px] w-[100%] lg:w-[80%] md:w-[80%] pl-[10px] xl:pl-[20px] h-[30px] xl:h-[60px] text-[#818181] py-[15px] font-[500] rounded-l-[8px] border-2 border-[#0C1618] leading-[150%]"
            />
            <div className="bg-[#000] flex rounded-r-[8px] justify-center items-center py-[17px] xl:py-[30px] h-[25px] xl:h-[60px] w-[60px] xl:w-[70px]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6965 18.3909L18.0193 18.7123L25.7193 26.379L25.3665 26.7333L25.7402 26.4012C25.8189 26.4897 25.9087 26.5333 26.0505 26.5333C26.1923 26.5333 26.3047 26.4881 26.413 26.3798C26.5255 26.2672 26.5665 26.1587 26.5665 26.0333C26.5665 25.8903 26.5242 25.7981 26.4463 25.7202L18.7463 18.0202L18.4245 17.6985L18.7147 17.3479C19.2075 16.7523 19.6024 16.0487 19.8959 15.2311C20.1869 14.4206 20.3332 13.5668 20.3332 12.6667C20.3332 10.5066 19.5943 8.70155 18.113 7.22022C16.6306 5.73787 14.8363 5 12.6999 5C10.5409 5 8.73628 5.74339 7.25471 7.23493L17.6965 18.3909ZM17.6965 18.3909L17.3464 18.6826M17.6965 18.3909L17.3464 18.6826M17.3464 18.6826C16.7274 19.1984 16.0126 19.6035 15.1976 19.8961M17.3464 18.6826L15.1976 19.8961M15.1976 19.8961C14.3845 20.1879 13.5528 20.3333 12.6999 20.3333M15.1976 19.8961L12.6999 20.3333M12.6999 20.3333C10.5398 20.3333 8.73476 19.5944 7.25342 18.1131M12.6999 20.3333L7.25342 18.1131M7.25342 18.1131C5.77209 16.6318 5.0332 14.8268 5.0332 12.6667M7.25342 18.1131L5.0332 12.6667M5.0332 12.6667C5.0332 10.5302 5.77114 8.72941 7.25461 7.23503L5.0332 12.6667ZM17.4057 17.3853L17.4058 17.3852C18.6883 16.0902 19.3332 14.5076 19.3332 12.6667C19.3332 10.8257 18.6883 9.24316 17.4058 7.94816L17.4057 7.94803C16.1211 6.65194 14.5424 6 12.6999 6C10.837 6 9.24703 6.65058 7.96194 7.94816C6.67857 9.24311 6.0332 10.8257 6.0332 12.6667C6.0332 14.5077 6.67857 16.0902 7.96194 17.3852C9.24703 18.6827 10.837 19.3333 12.6999 19.3333C14.5424 19.3333 16.1211 18.6814 17.4057 17.3853Z"
                  stroke="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <img
            src={box}
            alt="gallery"
            className="xl:block lg:block hidden md:block xl:h-[600px]"
          />
          <img
            src={box1}
            alt="gallery"
            className="xl:hidden block lg:hidden md:hidden"
          />
        </div>
      </div>
    </>
  );
};
