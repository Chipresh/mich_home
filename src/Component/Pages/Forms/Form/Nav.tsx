import { FC } from "react";
import "../../Landing/Nav/Nav.css";
import logo from "../../../Assets/Landing_page_Asset/Brand Logo.png";
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
      <header className="custom-shadow hidden lg:flex xl:flex justify-between lg:px-[25px] xl:px-[50px] py-[20px] text-center rounded-[8px] bg-[#FFF] items-center sticky top-0 z-10">
        <div className="flex items-center gap-[20px]">
          <Link to="/">
            <img src={logo} alt="logo" className="lg:h-[30px] xl:h-[100%]" />
          </Link>
        </div>

        <nav style={{ fontFamily: "Poppins" }}>
          <ul className="flex gap-[20px] items-center text-[#0C1618] text-center text-[15px] font-[500] leading-[170%]">
            <Link to="/apartment">
              <li>Latest Apartment Listings</li>
            </Link>
            <li>Our Process</li>
            <div className="flex items-center gap-[5px">
              <li>More</li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L4 8H20L12 16Z" fill="#0C1618" />
              </svg>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex border border-[#0C1618] text-[#0C1618] font-[600] leading-[150%] text-[15px] rounded-[8px] h-[64px px-[10px] py-[10px] items-center gap-[8px]"
            >
              <Link to="/location">
                <button>Location</button>
              </Link>
              <svg
                width="20"
                height="20"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                  fill="#0C1618"
                />
              </svg>
            </div>
          </ul>
        </nav>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex gap-[10px] items-center"
        >
          <div className="flex items-center gap-[8px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1998 22.45C25.8998 22.75 25.5665 22.8246 25.1998 22.674C24.8331 22.5246 24.6498 22.2333 24.6498 21.8V8.69995C24.6498 8.19995 24.8251 7.78328 25.1758 7.44995C25.5251 7.11662 25.9331 6.94995 26.3998 6.94995H39.1998C39.6998 6.94995 40.1165 7.11662 40.4498 7.44995C40.7831 7.78328 40.9498 8.19995 40.9498 8.69995V17.3C40.9498 17.8 40.7831 18.2246 40.4498 18.574C40.1165 18.9246 39.6998 19.1 39.1998 19.1H29.5998L26.1998 22.45ZM27.6498 9.94995V16.1V9.94995ZM27.6498 16.1H37.9498V9.94995H27.6498V16.1ZM38.8498 40.9C34.9831 40.9 31.1418 39.9746 27.3258 38.124C23.5085 36.2746 20.0998 33.85 17.0998 30.85C14.0998 27.85 11.6751 24.45 9.8258 20.65C7.97514 16.85 7.0498 13 7.0498 9.09995C7.0498 8.49995 7.2498 7.99995 7.6498 7.59995C8.0498 7.19995 8.5498 6.99995 9.1498 6.99995H15.6498C16.1831 6.99995 16.6411 7.15795 17.0238 7.47395C17.4078 7.79128 17.6498 8.19995 17.7498 8.69995L18.8998 14.6C18.9665 15.1 18.9498 15.55 18.8498 15.95C18.7498 16.35 18.5331 16.7 18.1998 17L13.6498 21.5C15.2165 24.1666 17.0911 26.5833 19.2738 28.75C21.4578 30.9166 23.9331 32.8 26.6998 34.4L31.1498 29.9C31.4831 29.5666 31.8751 29.3333 32.3258 29.2C32.7751 29.0666 33.2331 29.0333 33.6998 29.1L39.2498 30.25C39.7498 30.35 40.1585 30.5833 40.4758 30.95C40.7918 31.3166 40.9498 31.7666 40.9498 32.2999V38.7999C40.9498 39.3999 40.7498 39.8999 40.3498 40.2999C39.9498 40.6999 39.4498 40.9 38.8498 40.9V40.9ZM12.1998 18.65L15.7998 15.25C15.8665 15.1833 15.9085 15.108 15.9258 15.024C15.9418 14.9413 15.9331 14.8666 15.8998 14.8L14.9998 10.3C14.9665 10.2 14.9165 10.1246 14.8498 10.074C14.7831 10.0246 14.6998 9.99995 14.5998 9.99995H10.3498C10.2831 9.99995 10.2251 10.0246 10.1758 10.074C10.1251 10.1246 10.0998 10.1833 10.0998 10.25C10.1998 11.6166 10.4251 13.008 10.7758 14.424C11.1251 15.8413 11.5998 17.25 12.1998 18.65ZM37.6998 37.7999C37.7665 37.7999 37.8251 37.7746 37.8758 37.7239C37.9251 37.6746 37.9498 37.6166 37.9498 37.5499V33.3499C37.9498 33.2499 37.9251 33.1666 37.8758 33.0999C37.8251 33.0333 37.7498 32.9833 37.6498 32.95L33.4498 32.0999C33.3831 32.0666 33.3165 32.0586 33.2498 32.076C33.1831 32.092 33.1165 32.1333 33.0498 32.2L29.5498 35.75C30.8831 36.3833 32.2585 36.8753 33.6758 37.226C35.0918 37.5753 36.4331 37.7666 37.6998 37.7999V37.7999Z"
                fill="#0C1618"
              />
            </svg>
            <p className="flex items-center text-[#0C1618] text-center text-[15px] font-[500] leading-[170%]">
              Call / Text (234) 456 7890
            </p>
          </div>
        </div>
      </header>

      <div className="custom-shadow lg:hidden xl:hidden flex sticky top-0 justify-between items-center md:px-[30px] px-[15px] bg-[#FFF] h-[80px] rounded-[8px]">
        <div className="flex items-center gap-[10px]">
          <div
            className="h-8 w-8 flex items-center justify-center focus:outline-none"
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
            className="text-[#0C1618] text-[20px] font-[400] md:text-[30px]"
          >
            <h1>Mich Homes</h1>
          </div>
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
                className="text-[#0C1618] text-[15px] md:text-[30px] font-[400]"
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
              className="flex flex-col text-[#000] text-[15px] font-[600] leading-[170%] gap-[15px] pt-[30px] md:text-[20px]"
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
