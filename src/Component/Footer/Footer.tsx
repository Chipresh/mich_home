import { FC } from "react";
import logo from "../Assets/Footer/BrandLogoLarge.png";

export const Footer: FC = () => {
  return (
    <>
      <footer className="hidden md:hidden xl:flex lg:flex bg-[#0C1618] xl:px-[50px] lg:px-[25px] lg:py-[40px] xl:py-[60px] w-[100%] flex-col lg:gap-[30px] xl:gap-[50px]">
        <div className="justify-between flex">
          <div className="flex flex-col items-start lg:gap-[10px] xl:gap-[20px]">
            <img
              src={logo}
              alt="img"
              className="flex items-center lg:w-[100px] xl:w-[200px]"
            />
            <p
              style={{ fontFamily: "Poppins" }}
              className="xl:w-[300px] lg:w-[250px] text-[#FFF] text-[15px] font-[400] leading-[170%]"
            >
              Mich Homes is a website for listing homes for rent that features
              houses, apartments, and lodges that are available within Awka
              city, Nigeria.
            </p>
          </div>
          <div className="flex flex-col lg:gap-[10px] xl:gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[20px] font-[900] leading-[130%] text-[#FFF]"
            >
              GET STARTED
            </p>
            <ul
              style={{ fontFamily: "Poppins" }}
              className="text-[15px] font-[400] leading-[170%] text-[#FFF]"
            >
              <li>Latest Apartment Listings</li>
              <li>Our Process</li>
              <li>Neighbourhood</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px] xl:gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[20px] font-[900] leading-[130%] text-[#FFF]"
            >
              LEARN MORE
            </p>
            <ul
              style={{ fontFamily: "Poppins" }}
              className="text-[15px] font-[400] leading-[170%] text-[#FFF]"
            >
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px] xl:gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[20px] font-[900] leading-[130%] text-[#FFF]"
            >
              CONTACT
            </p>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[15px] font-[400] leading-[170%] text-[#FFF]"
            >
              <div className="pb-[20px]">
                <p>3, court road Amawbia,</p>
                <p>Awka, Anambra State.</p>
              </div>
              <p>info@michhomes.ng</p>
              <p>(+234) 801 2345 678</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] xl:gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[20px] font-[900] leading-[130%] text-[#FFF]"
            >
              SOCIAL
            </p>
            <div className="flex items-center lg:gap-[10px] xl:gap-[20px]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="76" height="76" rx="38" fill="white" />
                <path
                  d="M40.7941 55.994V39.602H46.3241L47.1461 33.184H40.7941V29.096C40.7941 27.244 41.3101 25.976 43.9681 25.976H47.3361V20.254C45.6973 20.0784 44.0502 19.9936 42.4021 20C37.5141 20 34.1581 22.984 34.1581 28.462V33.172H28.6641V39.59H34.1701V55.994H40.7941Z"
                  fill="#004643"
                />
              </svg>
              <svg
                width="50"
                height="50"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="76" height="76" rx="38" fill="white" />
                <g clipPath="url(#clip0_2974_223)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M59.8002 27.9999C59.8002 21.4879 54.5122 16.2 48.0002 16.2H28.0002C21.4882 16.2 16.2002 21.4879 16.2002 27.9999V47.9999C16.2002 54.5119 21.4882 59.7999 28.0002 59.7999H48.0002C54.5122 59.7999 59.8002 54.5119 59.8002 47.9999V27.9999ZM56.2002 27.9999V47.9999C56.2002 52.5259 52.5262 56.2 48.0002 56.2H28.0002C23.4742 56.2 19.8002 52.5259 19.8002 47.9999V27.9999C19.8002 23.4739 23.4742 19.7999 28.0002 19.7999H48.0002C52.5262 19.7999 56.2002 23.4739 56.2002 27.9999ZM47.7802 36.476C47.1502 32.218 43.7822 28.8499 39.5242 28.2199C39.0482 28.1479 38.5682 28.114 38.0862 28.114C32.7102 28.114 28.2862 32.5379 28.2862 37.9139C28.2862 43.2899 32.7102 47.7139 38.0862 47.7139C43.4622 47.7139 47.8862 43.2899 47.8862 37.9139C47.8862 37.4319 47.8522 36.952 47.7802 36.476ZM44.2202 37.0039C44.2642 37.3059 44.2862 37.6099 44.2862 37.9139C44.2862 41.3139 41.4882 44.114 38.0862 44.114C34.6862 44.114 31.8862 41.3139 31.8862 37.9139C31.8862 34.5119 34.6862 31.7139 38.0862 31.7139C38.3902 31.7139 38.6942 31.7359 38.9962 31.7799C41.6902 32.1799 43.8202 34.3099 44.2202 37.0039ZM49.0002 25.2C49.9942 25.2 50.8002 26.0059 50.8002 26.9999C50.8002 27.9939 49.9942 28.7999 49.0002 28.7999C48.0062 28.7999 47.2002 27.9939 47.2002 26.9999C47.2002 26.0059 48.0062 25.2 49.0002 25.2Z"
                    fill="#004643"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2974_223">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(14 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="50"
                height="50"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="76" height="76" rx="38" fill="white" />
                <path
                  d="M29.0014 32C29.0009 32 29.0006 32 29.0002 32H21.0002C20.4482 31.9996 20.0006 32.4469 20.0002 32.9988C20.0002 32.9993 20.0002 32.9996 20.0002 33V57C19.9998 57.552 20.4471 57.9996 20.999 58C20.9995 58 20.9998 58 21.0002 58H29.0002C29.5522 58.0004 29.9998 57.5531 30.0002 57.0011C30.0002 57.0007 30.0002 57.0004 30.0002 57V33C30.0006 32.448 29.5533 32.0004 29.0014 32ZM28.0002 56H22.0002V34H28.0002V56ZM50.0002 32C47.8305 32.0001 45.7215 32.7162 44.0002 34.0371V33C44.0006 32.448 43.5533 32.0004 43.0014 32C43.0009 32 43.0006 32 43.0002 32H35.0002C34.4482 31.9996 34.0006 32.4469 34.0002 32.9988C34.0002 32.9993 34.0002 32.9996 34.0002 33V57C33.9998 57.552 34.4471 57.9996 34.9991 58C34.9995 58 34.9998 58 35.0002 58H43.0002C43.5522 58.0004 43.9998 57.5531 44.0002 57.0011C44.0002 57.0007 44.0002 57.0004 44.0002 57V46C44.0002 44.3432 45.3433 43 47.0002 43C48.6571 43 50.0002 44.3432 50.0002 46V57C49.9998 57.552 50.4471 57.9996 50.9991 58C50.9995 58 50.9998 58 51.0002 58H59.0002C59.5522 58.0004 59.9998 57.5531 60.0002 57.0011C60.0002 57.0007 60.0002 57.0004 60.0002 57V42C59.9937 36.4799 55.5203 32.0065 50.0002 32ZM58.0002 56H52.0002V46C52.0002 43.2385 49.7617 41 47.0002 41C44.2387 41 42.0002 43.2385 42.0002 46V56H36.0002V34H42.0002V36.4063C42.0002 36.8312 42.269 37.2096 42.6703 37.3496C43.0705 37.4939 43.5183 37.3656 43.7816 37.0313C46.5067 33.5776 51.5155 32.9872 54.9691 35.7124C56.8928 37.2305 58.0108 39.5494 58.0002 42V56ZM25.7362 18.0037C25.5009 17.9872 25.2649 17.986 25.0295 18C22.011 17.7938 19.3968 20.0737 19.1906 23.0923C19.1823 23.2138 19.1782 23.3353 19.1779 23.457C19.1519 26.45 21.5571 28.8972 24.55 28.9232C24.6722 28.9243 24.7943 28.9212 24.9162 28.914H24.9729C27.9857 29.1248 30.5988 26.8533 30.8097 23.8405C31.0205 20.8276 28.749 18.2145 25.7362 18.0037ZM25.6671 26.9197C25.4361 26.9409 25.2035 26.9391 24.9729 26.914H24.9162C23.004 27.0609 21.3348 25.63 21.1878 23.7178C21.0409 21.8057 22.4718 20.1364 24.384 19.9894C24.5991 19.9729 24.8152 19.9765 25.0295 20C26.9403 19.824 28.632 21.2302 28.8082 23.141C28.9842 25.0519 27.578 26.7437 25.6671 26.9197Z"
                  fill="#004643"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-[#FFF]">
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[15px] font-[400] leading-[170%]"
          >
            Copyright 2022, All rights reserved!
          </p>
          <ul
            style={{ fontFamily: "Poppins" }}
            className="flex text-[15px] font-[400] leading-[170%] gap-[50px]"
          >
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>

      {/* Moblie */}

      <footer className="flex flex-col lg:hidden xl:hidden px-[15px] py-[20px] gap-[30px] bg-[#0C1618] md:px-[30px]">
        <div className="flex flex-col gap-[10px] md:gap-[15px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[15px] font-[700] text-[#fff] leading-[130%] md:text-[20px]"
          >
            SOCIAL
          </p>
          <div className="flex gap-[10px] md:gap-[15px]">
            <svg
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="white" />
              <path
                d="M25.8625 35.996V25.068H29.5492L30.0972 20.7893H25.8625V18.064C25.8625 16.8293 26.2065 15.984 27.9785 15.984H30.2239V12.1693C29.1314 12.0522 28.0333 11.9957 26.9345 12C23.6759 12 21.4385 13.9893 21.4385 17.6413V20.7813H17.7759V25.06H21.4465V35.996H25.8625Z"
                fill="#0C1618"
              />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="white" />
              <g clipPath="url(#clip0_3051_565)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.5332 17.3333C38.5332 12.992 35.0079 9.46667 30.6666 9.46667H17.3332C12.9919 9.46667 9.46655 12.992 9.46655 17.3333V30.6667C9.46655 35.008 12.9919 38.5333 17.3332 38.5333H30.6666C35.0079 38.5333 38.5332 35.008 38.5332 30.6667V17.3333ZM36.1332 17.3333V30.6667C36.1332 33.684 33.6839 36.1333 30.6666 36.1333H17.3332C14.3159 36.1333 11.8666 33.684 11.8666 30.6667V17.3333C11.8666 14.316 14.3159 11.8667 17.3332 11.8667H30.6666C33.6839 11.8667 36.1332 14.316 36.1332 17.3333ZM30.5199 22.984C30.0999 20.1453 27.8546 17.9 25.0159 17.48C24.6986 17.432 24.3786 17.4093 24.0572 17.4093C20.4732 17.4093 17.5239 20.3587 17.5239 23.9427C17.5239 27.5267 20.4732 30.476 24.0572 30.476C27.6412 30.476 30.5906 27.5267 30.5906 23.9427C30.5906 23.6213 30.5679 23.3013 30.5199 22.984ZM28.1466 23.336C28.1759 23.5373 28.1905 23.74 28.1905 23.9427C28.1905 26.2093 26.3252 28.076 24.0572 28.076C21.7906 28.076 19.9239 26.2093 19.9239 23.9427C19.9239 21.6747 21.7906 19.8093 24.0572 19.8093C24.2599 19.8093 24.4626 19.824 24.6639 19.8533C26.4599 20.12 27.8799 21.54 28.1466 23.336ZM31.3332 15.4667C31.9959 15.4667 32.5332 16.004 32.5332 16.6667C32.5332 17.3293 31.9959 17.8667 31.3332 17.8667C30.6706 17.8667 30.1332 17.3293 30.1332 16.6667C30.1332 16.004 30.6706 15.4667 31.3332 15.4667Z"
                  fill="#0C1618"
                />
              </g>
              <defs>
                <clipPath id="clip0_3051_565">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="white" />
              <path
                d="M18.0008 19.9999C18.0005 19.9999 18.0002 19.9999 18 19.9999H12.6666C12.2986 19.9997 12.0002 20.2979 12 20.6658C12 20.6661 12 20.6663 12 20.6666V36.6666C11.9997 37.0346 12.2979 37.333 12.6658 37.3333C12.6662 37.3333 12.6664 37.3333 12.6666 37.3333H18C18.368 37.3335 18.6664 37.0353 18.6666 36.6673C18.6666 36.6671 18.6666 36.6668 18.6666 36.6666V20.6666C18.6669 20.2986 18.3687 20.0002 18.0008 19.9999ZM17.3333 35.9999H13.3333V21.3333H17.3333V35.9999ZM32 19.9999C30.5535 20 29.1475 20.4774 28 21.358V20.6666C28.0002 20.2986 27.702 20.0002 27.3341 19.9999C27.3338 19.9999 27.3336 19.9999 27.3333 19.9999H22C21.632 19.9997 21.3336 20.2979 21.3333 20.6658C21.3333 20.6661 21.3333 20.6663 21.3333 20.6666V36.6666C21.3331 37.0346 21.6312 37.333 21.9992 37.3333C21.9995 37.3333 21.9997 37.3333 22 37.3333H27.3333C27.7013 37.3335 27.9997 37.0353 28 36.6673C28 36.6671 28 36.6668 28 36.6666V29.3333C28 28.2287 28.8954 27.3333 30 27.3333C31.1045 27.3333 32 28.2287 32 29.3333V36.6666C31.9997 37.0346 32.2979 37.333 32.6659 37.3333C32.6662 37.3333 32.6664 37.3333 32.6666 37.3333H38C38.368 37.3335 38.6664 37.0353 38.6666 36.6673C38.6666 36.6671 38.6666 36.6668 38.6666 36.6666V26.6666C38.6623 22.9865 35.6801 20.0042 32 19.9999ZM37.3333 35.9999H33.3333V29.3333C33.3333 27.4923 31.841 25.9999 30 25.9999C28.159 25.9999 26.6666 27.4923 26.6666 29.3333V35.9999H22.6666V21.3333H26.6666V22.9374C26.6666 23.2207 26.8458 23.473 27.1133 23.5663C27.3802 23.6625 27.6787 23.577 27.8542 23.3541C29.671 21.0517 33.0102 20.658 35.3126 22.4749C36.595 23.4869 37.3404 25.0329 37.3333 26.6666V35.9999ZM15.824 10.669C15.6671 10.658 15.5097 10.6572 15.3528 10.6666C13.3405 10.5291 11.5977 12.0491 11.4603 14.0615C11.4547 14.1424 11.452 14.2235 11.4518 14.3046C11.4345 16.2999 13.0379 17.9314 15.0332 17.9487C15.1146 17.9495 15.196 17.9474 15.2773 17.9426H15.3151C17.3236 18.0831 19.0657 16.5688 19.2063 14.5602C19.3468 12.5517 17.8325 10.8096 15.824 10.669ZM15.7779 16.613C15.6239 16.6272 15.4688 16.626 15.3151 16.6092H15.2773C14.0025 16.7072 12.8897 15.7533 12.7917 14.4784C12.6937 13.2037 13.6477 12.0908 14.9225 11.9928C15.0659 11.9819 15.2099 11.9842 15.3528 11.9999C16.6267 11.8826 17.7545 12.8201 17.872 14.0939C17.9893 15.3678 17.0518 16.4957 15.7779 16.613Z"
                fill="#0C1618"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] md:gap-[15px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[15px] font-[700] text-[#fff] leading-[130%] md:text-[20px]"
          >
            CONTACT US
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            3, court road Amawbia, <br /> Awka, Anambra State.
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            info@michhomes.ng
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            (+234) 801 2345 678
          </p>
        </div>

        <div className="flex flex-col gap-[10px] md:gap-[15px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[15px] font-[700] text-[#fff] leading-[130%] md:text-[20px]"
          >
            GET STARTED
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            Latest Apartment Listings
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            Our Process
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            Neighbourhood
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            FAQs
          </p>
        </div>

        <div className="flex flex-col gap-[10px] md:gap-[15px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[15px] font-[700] text-[#fff] leading-[130%] md:gap-[20px]"
          >
            LEARN MORE
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            About us
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            Careers
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%]"
          >
            Blog
          </p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-[8px] md:gap-[10px]">
          <img src={logo} alt="img" className="flex items-center h-[50px]" />
          <div
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] text-[15px] leading-[140%] flex gap-[10px] md:gap-[15px] md:text-[20px]"
          >
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Disclaimer</p>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="text-[#fff] font-[400] leading-[140%] text-[10px] md:text-[15px]"
          >
            <p>Copyright 2022, All rights reserved!</p>
          </div>
        </div>
      </footer>
    </>
  );
};
