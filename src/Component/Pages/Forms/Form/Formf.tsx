import { FC } from "react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export const Formf: FC = () => {
  const [InputClicked, setInputClicked] = useState(false);
  const [input, setInput] = useState("");
  // const [inputError, setInputError] = useState("");
  const navigate = useNavigate();

  const handdleInputChange = () => {
    setInputClicked(true);
  };

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (input.trim() === "") {
    //   setInputError("Please add your input.");
    //   return;
    // }
    navigate("/form1f");
  };
  return (
    <>
      <div className="xl:px-[50px] lg:px-[25px] md:px-[30px] hidden md:flex xl:flex justify-between py-[50px] lg:gap-0 md:gap-[40px]">
        <div className="flex flex-col gap-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="lg:w-[350px] md:text-[20px] xl:text-[30px] lg:text-[30px] font-[900] leading-[130%]"
          >
            When are you looking to move to Awka?
          </p>
          <div className="flex items-center h-[72px] bg-[#DCDFE0] rounded-[8px] pr-[20px] md:w-[300px] lg:w-[400px]">
            <input
              type="text"
              placeholder="Find out the ‘why’?"
              className="py-[21px] lg:w-[400px] px-[24px] bg-[#DCDFE0] border-none"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 16L4 8H20L12 16Z" fill="black" />
            </svg>
          </div>
        </div>
        <form action="" onSubmit={validateForm}>
          <div className="lg:h-[500px] md:h-[450px] flex flex-col md:w-[380px] lg:w-[500px] xl:w-[600px] gap-[25px] px-[50px] pt-[50px] rounded-[8px] bg-[#004643]">
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#FFF] text-[18px] font-[500] leading-[150%]"
            >
              Ideal Move-in-date
            </p>
            <div className="flex h-[60px] items-center w-[100%] rounded-[8px]">
              <input
                onClick={handdleInputChange}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="w-[100%] h-[60px] pl-[10px] bg-[#fff] rounded-l-[8px]"
                placeholder="Input date"
                required
              />
              <div className="hello bg-[#0C1618] py-[11px] rounded-[8px] px-[16px] h-[60px] flex items-center w-[80px]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 28.1001C23.5333 28.1001 23.1246 27.9334 22.774 27.6001C22.4246 27.2668 22.25 26.8668 22.25 26.4001C22.25 25.9001 22.4246 25.4834 22.774 25.1501C23.1246 24.8168 23.5333 24.6501 24 24.6501C24.4666 24.6501 24.8753 24.8168 25.226 25.1501C25.5753 25.4834 25.75 25.9001 25.75 26.4001C25.75 26.8668 25.5753 27.2668 25.226 27.6001C24.8753 27.9334 24.4666 28.1001 24 28.1001ZM16 28.1001C15.5333 28.1001 15.1253 27.9334 14.776 27.6001C14.4253 27.2668 14.25 26.8668 14.25 26.4001C14.25 25.9001 14.4253 25.4834 14.776 25.1501C15.1253 24.8168 15.5333 24.6501 16 24.6501C16.4666 24.6501 16.8753 24.8168 17.226 25.1501C17.5753 25.4834 17.75 25.9001 17.75 26.4001C17.75 26.8668 17.5753 27.2668 17.226 27.6001C16.8753 27.9334 16.4666 28.1001 16 28.1001ZM32 28.1001C31.5333 28.1001 31.1246 27.9334 30.774 27.6001C30.4246 27.2668 30.25 26.8668 30.25 26.4001C30.25 25.9001 30.4246 25.4834 30.774 25.1501C31.1246 24.8168 31.5333 24.6501 32 24.6501C32.4666 24.6501 32.8753 24.8168 33.226 25.1501C33.5753 25.4834 33.75 25.9001 33.75 26.4001C33.75 26.8668 33.5753 27.2668 33.226 27.6001C32.8753 27.9334 32.4666 28.1001 32 28.1001ZM24 35.9501C23.5333 35.9501 23.1246 35.7834 22.774 35.4501C22.4246 35.1168 22.25 34.7168 22.25 34.2501C22.25 33.7501 22.4246 33.3334 22.774 33.0001C23.1246 32.6668 23.5333 32.5001 24 32.5001C24.4666 32.5001 24.8753 32.6668 25.226 33.0001C25.5753 33.3334 25.75 33.7501 25.75 34.2501C25.75 34.7168 25.5753 35.1168 25.226 35.4501C24.8753 35.7834 24.4666 35.9501 24 35.9501ZM16 35.9501C15.5333 35.9501 15.1253 35.7834 14.776 35.4501C14.4253 35.1168 14.25 34.7168 14.25 34.2501C14.25 33.7501 14.4253 33.3334 14.776 33.0001C15.1253 32.6668 15.5333 32.5001 16 32.5001C16.4666 32.5001 16.8753 32.6668 17.226 33.0001C17.5753 33.3334 17.75 33.7501 17.75 34.2501C17.75 34.7168 17.5753 35.1168 17.226 35.4501C16.8753 35.7834 16.4666 35.9501 16 35.9501ZM32 35.9501C31.5333 35.9501 31.1246 35.7834 30.774 35.4501C30.4246 35.1168 30.25 34.7168 30.25 34.2501C30.25 33.7501 30.4246 33.3334 30.774 33.0001C31.1246 32.6668 31.5333 32.5001 32 32.5001C32.4666 32.5001 32.8753 32.6668 33.226 33.0001C33.5753 33.3334 33.75 33.7501 33.75 34.2501C33.75 34.7168 33.5753 35.1168 33.226 35.4501C32.8753 35.7834 32.4666 35.9501 32 35.9501ZM10.75 42.6001C9.81664 42.6001 9.01664 42.2668 8.34998 41.6001C7.68331 40.9334 7.34998 40.1334 7.34998 39.2001V12.7501C7.34998 11.7834 7.68331 10.9668 8.34998 10.3001C9.01664 9.63343 9.83331 9.3001 10.8 9.3001H13.75V6.5501C13.75 6.1501 13.892 5.8081 14.176 5.5241C14.4586 5.24143 14.8 5.1001 15.2 5.1001C15.6 5.1001 15.9333 5.24143 16.2 5.5241C16.4666 5.8081 16.6 6.1501 16.6 6.5501V9.3001H31.45V6.5001C31.45 6.1001 31.5833 5.76676 31.85 5.5001C32.1166 5.23343 32.45 5.1001 32.85 5.1001C33.25 5.1001 33.5833 5.23343 33.85 5.5001C34.1166 5.76676 34.25 6.1001 34.25 6.5001V9.3001H37.2C38.1666 9.3001 38.9833 9.63343 39.65 10.3001C40.3166 10.9668 40.65 11.7834 40.65 12.7501V39.2001C40.65 40.1334 40.3166 40.9334 39.65 41.6001C38.9833 42.2668 38.1833 42.6001 37.25 42.6001H10.75ZM10.8 39.8001H37.2C37.4 39.8001 37.558 39.7414 37.674 39.6241C37.7913 39.5081 37.85 39.3668 37.85 39.2001V20.7001H10.15V39.2001C10.15 39.3668 10.208 39.5081 10.324 39.6241C10.4413 39.7414 10.6 39.8001 10.8 39.8001ZM10.15 17.9001H37.85V12.7501C37.85 12.5501 37.7913 12.3914 37.674 12.2741C37.558 12.1581 37.4 12.1001 37.2 12.1001H10.8C10.6 12.1001 10.4413 12.1581 10.324 12.2741C10.208 12.3914 10.15 12.5501 10.15 12.7501V17.9001ZM10.15 17.9001V12.1001V17.9001Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#C7C9D9",
                color: InputClicked ? "#fff" : "#000",
              }}
              className="flex w-[100%] h-[60px] py-[16px] text-[25px] rounded-[8px] font-[500] leading-[150%] px-[48px] gap-[10px] justify-center items-center"
            >
              Next
              <svg
                style={{
                  color: InputClicked ? "#fff" : "#000",
                }}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1755 21.45L22.6231 12L13.1731 2.55005M2.37549 12H22.6255H2.37549Z"
                  stroke="#0C1618"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="px-[15px] xl:hidden md:hidden flex flex-col py-[30px] gap-[20px]">
        <div
          style={{ fontFamily: "Satoshi" }}
          className="text-[20px] font-[900] leading-[130%] w-[250px]"
        >
          <p>When are you looking to move to Awka?</p>
        </div>
        <form
          action=""
          onSubmit={validateForm}
          className="flex flex-col gap-[30px]"
        >
          <div className="flex flex-col gap-[10px]">
            <label
              style={{ fontFamily: "Poppins" }}
              className="text-[#818181] font-[500] leading-[150%]"
            >
              Ideal Move-in-date
            </label>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex w-[100%] font-[500] leading-[150%] text-[#C7C9D9] border-[1px] border-[#DCDFE0] rounded-[4px]"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={handdleInputChange}
                type="text"
                placeholder="Input date"
                className="w-[80%] pl-[10px] rounded-l-[4px] text-[#000]"
                required
              />
              <svg
                className="bg-[#004643] w-[20%] py-[8px] px-[16px] rounded-[4px]"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 28.1C23.5333 28.1 23.1247 27.9333 22.774 27.6C22.4247 27.2666 22.25 26.8666 22.25 26.4C22.25 25.9 22.4247 25.4833 22.774 25.15C23.1247 24.8166 23.5333 24.65 24 24.65C24.4667 24.65 24.8753 24.8166 25.226 25.15C25.5753 25.4833 25.75 25.9 25.75 26.4C25.75 26.8666 25.5753 27.2666 25.226 27.6C24.8753 27.9333 24.4667 28.1 24 28.1ZM16 28.1C15.5333 28.1 15.1253 27.9333 14.776 27.6C14.4253 27.2666 14.25 26.8666 14.25 26.4C14.25 25.9 14.4253 25.4833 14.776 25.15C15.1253 24.8166 15.5333 24.65 16 24.65C16.4667 24.65 16.8753 24.8166 17.226 25.15C17.5753 25.4833 17.75 25.9 17.75 26.4C17.75 26.8666 17.5753 27.2666 17.226 27.6C16.8753 27.9333 16.4667 28.1 16 28.1ZM32 28.1C31.5333 28.1 31.1247 27.9333 30.774 27.6C30.4247 27.2666 30.25 26.8666 30.25 26.4C30.25 25.9 30.4247 25.4833 30.774 25.15C31.1247 24.8166 31.5333 24.65 32 24.65C32.4667 24.65 32.8753 24.8166 33.226 25.15C33.5753 25.4833 33.75 25.9 33.75 26.4C33.75 26.8666 33.5753 27.2666 33.226 27.6C32.8753 27.9333 32.4667 28.1 32 28.1ZM24 35.95C23.5333 35.95 23.1247 35.7833 22.774 35.45C22.4247 35.1166 22.25 34.7166 22.25 34.25C22.25 33.75 22.4247 33.3333 22.774 33C23.1247 32.6666 23.5333 32.5 24 32.5C24.4667 32.5 24.8753 32.6666 25.226 33C25.5753 33.3333 25.75 33.75 25.75 34.25C25.75 34.7166 25.5753 35.1166 25.226 35.45C24.8753 35.7833 24.4667 35.95 24 35.95ZM16 35.95C15.5333 35.95 15.1253 35.7833 14.776 35.45C14.4253 35.1166 14.25 34.7166 14.25 34.25C14.25 33.75 14.4253 33.3333 14.776 33C15.1253 32.6666 15.5333 32.5 16 32.5C16.4667 32.5 16.8753 32.6666 17.226 33C17.5753 33.3333 17.75 33.75 17.75 34.25C17.75 34.7166 17.5753 35.1166 17.226 35.45C16.8753 35.7833 16.4667 35.95 16 35.95ZM32 35.95C31.5333 35.95 31.1247 35.7833 30.774 35.45C30.4247 35.1166 30.25 34.7166 30.25 34.25C30.25 33.75 30.4247 33.3333 30.774 33C31.1247 32.6666 31.5333 32.5 32 32.5C32.4667 32.5 32.8753 32.6666 33.226 33C33.5753 33.3333 33.75 33.75 33.75 34.25C33.75 34.7166 33.5753 35.1166 33.226 35.45C32.8753 35.7833 32.4667 35.95 32 35.95ZM10.75 42.6C9.81667 42.6 9.01667 42.2666 8.35001 41.6C7.68334 40.9333 7.35001 40.1333 7.35001 39.2V12.75C7.35001 11.7833 7.68334 10.9666 8.35001 10.3C9.01667 9.63331 9.83334 9.29998 10.8 9.29998H13.75V6.54998C13.75 6.14998 13.892 5.80798 14.176 5.52398C14.4587 5.24131 14.8 5.09998 15.2 5.09998C15.6 5.09998 15.9333 5.24131 16.2 5.52398C16.4667 5.80798 16.6 6.14998 16.6 6.54998V9.29998H31.45V6.49998C31.45 6.09998 31.5833 5.76664 31.85 5.49998C32.1167 5.23331 32.45 5.09998 32.85 5.09998C33.25 5.09998 33.5833 5.23331 33.85 5.49998C34.1167 5.76664 34.25 6.09998 34.25 6.49998V9.29998H37.2C38.1667 9.29998 38.9833 9.63331 39.65 10.3C40.3167 10.9666 40.65 11.7833 40.65 12.75V39.2C40.65 40.1333 40.3167 40.9333 39.65 41.6C38.9833 42.2666 38.1833 42.6 37.25 42.6H10.75ZM10.8 39.8H37.2C37.4 39.8 37.558 39.7413 37.674 39.624C37.7913 39.508 37.85 39.3666 37.85 39.2V20.7H10.15V39.2C10.15 39.3666 10.208 39.508 10.324 39.624C10.4413 39.7413 10.6 39.8 10.8 39.8ZM10.15 17.9H37.85V12.75C37.85 12.55 37.7913 12.3913 37.674 12.274C37.558 12.158 37.4 12.1 37.2 12.1H10.8C10.6 12.1 10.4413 12.158 10.324 12.274C10.208 12.3913 10.15 12.55 10.15 12.75V17.9ZM10.15 17.9V12.1V17.9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] rounded-[4px] w-[100%] py-[20px] px-[10px] justify-between bg-[#DCDFE0]"
          >
            <input
              onClick={handdleInputChange}
              type="text"
              placeholder="Find out the ‘why’?"
              className="bg-[#DCDFE0] border-[none] text-[#000]"
              required
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024Z"
                fill="#004643"
              />
            </svg>
          </div>

          <div>
            <button
              type="submit"
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#DCDFE0",
              }}
              className="font-[500] leading-[150%] rounded-[4px] flex justify-center items-center gap-[5px] text-[#fff] py-[14px] px-[16px] w-[100%]"
            >
              Next
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3051_468)">
                  <path
                    d="M8.45037 14.3001L14.7488 8.00007L8.44877 1.70007M1.25037 8.00007H14.7504H1.25037Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3051_468">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
