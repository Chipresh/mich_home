import { FC } from "react";
import logo from "../../../Assets/Landing_page_Asset/Brand Logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      {/* Nav */}
      <header className="custom-shadow hidden md:hidden lg:flex xl:flex justify-between lg:px-[25px] xl:px-[160px] h-[96px] text-center rounded-[8px] bg-[#FFF] items-center sticky top-0">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <nav style={{ fontFamily: "Poppins" }}>
          <ul className="flex lg:gap-[20px] xl:gap-[40px] items-center text-[#0C1618] text-center text-[16px] font-[600] leading-[170%] ">
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div style={{ fontFamily: "Poppins" }}>
          <button className="flex bg-[#EBEBF0] text-[#0C1618] font-[600] leading-[150%] text-[16px] rounded-[8px] lg:h-[50px] xl:h-[50px] px-[10px] xl:px-[24px] py-[16px] items-center gap-[8px]">
            <Link to="/location">Choose Location</Link>
            <svg
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                fill="#0C1618"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="custom-shadow md:flex lg:hidden xl:hidden flex sticky top-0 justify-between items-center md:px-[30px] px-[15px] bg-[#FFF] h-[80px] rounded-[8px]">
        <div className="flex items-center gap-[10px] md:gap-[20px]">
          <div
            className="h-8 w-8 md:w-10 md:h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.93451 23.5C4.66722 23.5 4.4464 23.4058 4.27204 23.2173C4.09687 23.028 4.00928 22.7889 4.00928 22.5C4.00928 22.2333 4.09687 22 4.27204 21.8C4.4464 21.6 4.66722 21.5 4.93451 21.5H24.6728C24.9401 21.5 25.1614 21.6 25.3365 21.8C25.5109 22 25.5981 22.2333 25.5981 22.5C25.5981 22.7889 25.5109 23.028 25.3365 23.2173C25.1614 23.4058 24.9401 23.5 24.6728 23.5H4.93451ZM4.93451 17C4.66722 17 4.4464 16.9053 4.27204 16.716C4.09687 16.5276 4.00928 16.2889 4.00928 16C4.00928 15.7111 4.09687 15.472 4.27204 15.2827C4.4464 15.0942 4.66722 15 4.93451 15H24.6728C24.9401 15 25.1614 15.0942 25.3365 15.2827C25.5109 15.472 25.5981 15.7111 25.5981 16C25.5981 16.2889 25.5109 16.5276 25.3365 16.716C25.1614 16.9053 24.9401 17 24.6728 17H4.93451ZM4.93451 10.5C4.66722 10.5 4.4464 10.4 4.27204 10.2C4.09687 10 4.00928 9.76667 4.00928 9.5C4.00928 9.21111 4.09687 8.97244 4.27204 8.784C4.4464 8.59467 4.66722 8.5 4.93451 8.5H24.6728C24.9401 8.5 25.1614 8.59467 25.3365 8.784C25.5109 8.97244 25.5981 9.21111 25.5981 9.5C25.5981 9.76667 25.5109 10 25.3365 10.2C25.1614 10.4 24.9401 10.5 24.6728 10.5H4.93451Z"
                fill="#0C1618"
              />
            </svg>
          </div>
          <div
            style={{ fontFamily: "Millik" }}
            className="text-[#0C1618] text-[20px] md:text-[30px] font-[400]"
          >
            <h1>Mich Homes</h1>
          </div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[10px] md:text-[15px] font-[500] rounded-[8px] leading-[150%] text-[#FFF] bg-[#0C1618] py-[10px] px-[8px] flex justify-center items-center"
        >
          <button className="flex items-center gap-[5px]">
            <Link to="/location">Choose Location</Link>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00008 10.6666L2.66675 5.33325H13.3334L8.00008 10.6666Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            data-aos="fade-right"
            className="h-[100vh] absolute top-0 left-0 py-[10px] px-[15px] md:px-[30px] md:py-[20px] bg-[#FFF] w-[100%]"
          >
            <div className="flex items-center justify-between">
              <div onClick={toggleMenu}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" fill="#0C1618" />
                  <path
                    d="M17.2533 16L24.6222 8.63115C24.7678 8.4611 24.8439 8.24237 24.8353 8.01866C24.8266 7.79495 24.7339 7.58273 24.5756 7.42443C24.4173 7.26612 24.2051 7.17338 23.9814 7.16474C23.7577 7.1561 23.5389 7.23219 23.3689 7.37782L16 14.7467L8.63109 7.36893C8.46371 7.20155 8.2367 7.10751 7.99998 7.10751C7.76327 7.10751 7.53625 7.20155 7.36887 7.36893C7.20149 7.53631 7.10746 7.76333 7.10746 8.00004C7.10746 8.23675 7.20149 8.46377 7.36887 8.63115L14.7466 16L7.36887 23.3689C7.27582 23.4486 7.20025 23.5467 7.14689 23.657C7.09354 23.7672 7.06356 23.8874 7.05883 24.0098C7.0541 24.1322 7.07473 24.2543 7.11942 24.3683C7.1641 24.4824 7.23189 24.586 7.31852 24.6726C7.40514 24.7592 7.50874 24.827 7.62281 24.8717C7.73687 24.9164 7.85895 24.937 7.98136 24.9323C8.10378 24.9276 8.2239 24.8976 8.33418 24.8442C8.44446 24.7909 8.54252 24.7153 8.6222 24.6223L16 17.2534L23.3689 24.6223C23.5389 24.7679 23.7577 24.844 23.9814 24.8353C24.2051 24.8267 24.4173 24.734 24.5756 24.5757C24.7339 24.4173 24.8266 24.2051 24.8353 23.9814C24.8439 23.7577 24.7678 23.539 24.6222 23.3689L17.2533 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                style={{ fontFamily: "Millik" }}
                className="text-[#0C1618] text-[15px] md:text-[20px] font-[400]"
              >
                <h1>Mich Homes</h1>
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[10px] md:text-[15px] font-[500] rounded-[4px] border-[1px] border-[#0C1618] leading-[150%] text-[#000] h-[30px py-[10px] px-[8px] flex justify-center items-center"
              >
                <button className="flex items-center gap-[5px]">
                  <Link to="/location">Choose Location</Link>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99999 10.6667L2.66666 5.33333H13.3333L7.99999 10.6667Z"
                      fill="#0C1618"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex flex-col text-[#000] text-[15px] md:text-[20px] font-[600] leading-[170%] gap-[15px] pt-[30px]"
            >
              <p>Our Process</p>
              <Link to="/apartment">
                <p>Latest Apartment Listings</p>
              </Link>
              <p>Neighbourhoods</p>
              <p>Relocation</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
