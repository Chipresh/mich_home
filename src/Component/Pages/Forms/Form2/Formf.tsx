import { FC } from "react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../Form/Form.css";
import { Link } from "react-router-dom";

export const Formf: FC = () => {
  const [InputClicked, setInputClicked] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hear, setHear] = useState("");
  const [request, setRequest] = useState("");
  // const [firstError, setFirstError] = useState("");
  // const [lastError, setLastError] = useState("");
  // const [numberError, setNumberError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [hearError, setHearError] = useState("");
  // const [requestError, setRequestError] = useState("");
  const navigate = useNavigate();

  const handdleInputChange = () => {
    setInputClicked(true);
  };

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (first.trim() === "") {
    //   setFirstError("Please add your firstName.");
    //   return;
    // }

    // if (last.trim() === "") {
    //   setLastError("Please add your lastName.");
    //   return;
    // }
    // if (number.trim() === "") {
    //   setNumberError("Please add your number.");
    //   return;
    // }

    // if (email.trim() === "") {
    //   setEmailError("Please enter a valid email address.");
    //   return;
    // }

    // if (hear.trim() === "") {
    //   setHearError("Please add your input.");
    //   return;
    // }

    // if (request.trim() === "") {
    //   setRequestError("Please add your input.");
    //   return;
    // }

    navigate("/thanks");
  };
  return (
    <>
      <div className="xl:px-[50px] lg:px-[25px] md:px-[30px] lg:flex xl:flex justify-between py-[50px] hidden">
        <div className="flex flex-col gap-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="xl:w-[500px] lg:w-[300px] lg:text-[30px] font-[900] leading-[130%]"
          >
            Start your search!
          </p>
          <div className="flex items-center h-[72px] bg-[#DCDFE0] rounded-[8px] pr-[10px]">
            <input
              type="text"
              placeholder="Disclaimer?"
              className="py-[21px] w-[100%] px-[24px] bg-[#DCDFE0] border-none"
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
        <div className="lg:w-[600px] h-[1150px] px-[50px] pt-[50px] rounded-[8px] bg-[#004643]">
          <form
            action=""
            onSubmit={validateForm}
            className="flex flex-col gap-[50px]"
          >
            <div className="flex h-[70px] items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  First Name
                </label>
                <input
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  onClick={handdleInputChange}
                  type="text"
                  className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div className="flex h-[70px] items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  Last Name
                </label>
                <input
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  onClick={handdleInputChange}
                  type="text"
                  className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex h-[70px] items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  Phone Number
                </label>
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onClick={handdleInputChange}
                  type="number"
                  className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                  placeholder="(123) 456 7890"
                  required
                />
              </div>
            </div>
            <div className="flex h-[70px] items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={handdleInputChange}
                  type="email"
                  className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                  placeholder="Hello@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex h-[70px] items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  How did you hear about us?
                </label>
                <div className="flex">
                  <input
                    value={hear}
                    onChange={(e) => setHear(e.target.value)}
                    onClick={handdleInputChange}
                    type="text"
                    className="w-[430px] h-[68.67px] pl-[10px] bg-[#fff] rounded-l-[8px]"
                    placeholder="-"
                    required
                  />
                  <div className="hello flex justify-center items-center h-[68.67px] w-[70px] bg-[#0C1618]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.5712C11.8218 17.5712 11.6513 17.5415 11.4885 17.4821C11.3246 17.4227 11.1832 17.3187 11.0644 17.1702L3.26733 9.41773C3.08911 9.23951 3 9.04644 3 8.83852C3 8.6306 3.10396 8.43753 3.31188 8.25931C3.4901 8.08109 3.68317 7.99198 3.89109 7.99198C4.09901 7.99198 4.29208 8.06624 4.4703 8.21476L12 15.789L19.5297 8.21476C19.7079 8.03654 19.901 7.95515 20.1089 7.9706C20.3168 7.98486 20.5248 8.08109 20.7327 8.25931C20.9109 8.43753 21 8.6306 21 8.83852C21 9.04644 20.9109 9.23951 20.7327 9.41773L12.9356 17.1702C12.8168 17.3187 12.676 17.4227 12.5133 17.4821C12.3493 17.5415 12.1782 17.5712 12 17.5712V17.5712Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col">
                <label
                  style={{ fontFamily: "Poppins" }}
                  className="text-[18px] font-[500] leading-[150%] text-[#fff]"
                >
                  Any special requests?
                </label>
                <textarea
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  className="w-[500px] p-[10px] bg-[#fff] rounded-[8px] h-[179.261px]"
                  placeholder="Type something"
                  onClick={handdleInputChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="w-[135px] h-[70px] items-center py-[28px] rounded-[8px] border-[2px] border-[#fff] flex justify-center">
                <Link to="/form1f">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.45254 16.6544L3.45183 16.6537C3.32557 16.5275 3.25904 16.4226 3.22679 16.342C3.18901 16.2475 3.16663 16.1356 3.16663 16.0001C3.16663 15.8646 3.18901 15.7526 3.22679 15.6582C3.25904 15.5776 3.32557 15.4727 3.45183 15.3464L3.45254 15.3457L15.4902 3.26011C15.4903 3.26003 15.4904 3.25996 15.4904 3.25988C15.5575 3.19288 15.6226 3.16675 15.7122 3.16675C15.7471 3.16675 15.8272 3.17749 15.9561 3.32787L15.9686 3.34245L15.9821 3.35603C16.1014 3.47534 16.1235 3.56204 16.1235 3.62598C16.1235 3.68985 16.1015 3.77643 15.9825 3.89553C15.9824 3.89566 15.9823 3.89579 15.9821 3.89593L5.09563 14.7345L4.23751 15.5888H5.4484H28.47C28.5462 15.5888 28.6232 15.6127 28.7169 15.7052C28.7953 15.7847 28.8333 15.8727 28.8333 16.0001C28.8333 16.1272 28.7963 16.1966 28.7341 16.2536C28.6434 16.3355 28.5611 16.3634 28.47 16.3634H5.4484H4.24129L5.09485 17.2169L16.0301 28.1522C16.0973 28.2194 16.1235 28.2845 16.1235 28.3742C16.1235 28.4381 16.1014 28.5248 15.9821 28.6441L15.9686 28.6577L15.9561 28.6723C15.8272 28.8227 15.7471 28.8334 15.7122 28.8334C15.6678 28.8334 15.5637 28.8135 15.3945 28.6444C15.3944 28.6443 15.3944 28.6442 15.3943 28.6441L3.45254 16.6544Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: InputClicked ? "#000" : "#C7C9D9",
                  color: InputClicked ? "#fff" : "#000",
                }}
                className="flex w-[701px] bg-[#C7C9D9 h-[70px] py-[16px] rounded-[8px] text-[25px] font-[500] leading-[150%] px-[48px] gap-[10px] justify-center items-center"
              >
                Submit
                <svg
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
      </div>

      <div className="px-[15px] lg:hidden xl:hidden flex flex-col pt-[30px] pb-[70px] gap-[20px] md:px-[30px]">
        <div
          style={{ fontFamily: "Satoshi" }}
          className="font-[900] leading-[130%] text-[20px] md:text-[25px]"
        >
          <p>Start your search!</p>
        </div>

        <form
          action=""
          onSubmit={validateForm}
          className="flex flex-col gap-[30px]"
        >
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              First Name
            </label>
            <input
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              onClick={handdleInputChange}
              type="text"
              placeholder="Type something"
              className="text-[#000] rounded-[4px] h-[64px] border-[1px] border-[#DCDFE0] pl-[10px]"
              required
            />
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              Last Name
            </label>
            <input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              onClick={handdleInputChange}
              type="text"
              placeholder="Type something"
              className="text-[#000] rounded-[4px] h-[64px] border-[1px] border-[#DCDFE0] pl-[10px]"
              required
            />
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              Phone Number
            </label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onClick={handdleInputChange}
              type="number"
              placeholder="Type something"
              className="text-[#000] rounded-[4px] h-[64px] border-[1px] border-[#DCDFE0] pl-[10px]"
              required
            />
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={handdleInputChange}
              type="email"
              placeholder="Type something"
              className="text-[#000] rounded-[4px] h-[64px] border-[1px] border-[#DCDFE0] pl-[10px]"
              required
            />
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              How did you hear about us?
            </label>
            <div className="flex items-center border-[1px] border-[#DCDFE0] w-[100%] rounded-[4px]">
              <input
                value={hear}
                onChange={(e) => setHear(e.target.value)}
                onClick={handdleInputChange}
                type="text"
                placeholder="-"
                className="text-[#000] pl-[10px] w-[100%] h-[64px]"
                required
              />
              <svg
                className="bg-[#004643] h-[64px] w-[15%] rounded-[4px] px-[5px]"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex font-[500] leading-[150%] text-[#C7C9D9] flex-col gap-[10px]"
          >
            <label className="text-[#818181] font-[500] leading-[150%]">
              Any special requests?
            </label>
            <textarea
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              onClick={handdleInputChange}
              placeholder="Type something"
              className="h-[152px] rounded-[4px] border-[1px] text-[#000] border-[#DCDFE0] pl-[10px] py-[10px]"
              required
            ></textarea>
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

          <div className="flex w-[100%] gap-[20px]">
            <div className="w-[20%] bg-[#D1AC00] flex justify-center items-center rounded-[4px]">
              <Link to="/form1f">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3525 11.8165C21.373 11.8165 21.4 11.8187 21.4492 11.8671C21.4839 11.9025 21.5 11.9366 21.5 12C21.5 12.063 21.485 12.0808 21.4665 12.0977C21.42 12.1396 21.3877 12.1475 21.3525 12.1475H4.08633H2.87922L3.73278 13.001L11.9342 21.2025C11.9614 21.2297 11.9676 21.2468 11.9676 21.2806L11.9676 21.2812C11.9677 21.2903 11.9679 21.325 11.8982 21.3946L11.8847 21.4082L11.8722 21.4228C11.8307 21.4712 11.8021 21.4903 11.7899 21.4968C11.7868 21.4985 11.7847 21.4994 11.7835 21.4999C11.7834 21.4999 11.7834 21.4999 11.7833 21.4999L11.7832 21.4999L11.7795 21.4992C11.7758 21.4983 11.768 21.4959 11.756 21.4898C11.7309 21.4773 11.6898 21.4502 11.6343 21.3949C11.6343 21.3948 11.6342 21.3947 11.6341 21.3946L2.678 12.4025L2.67729 12.4018C2.591 12.3155 2.55245 12.2507 2.53618 12.21C2.51439 12.1555 2.5 12.0875 2.5 12C2.5 11.9125 2.51439 11.8445 2.53618 11.79C2.55245 11.7493 2.591 11.6845 2.6773 11.5982L2.678 11.5975L11.7061 2.53341C11.7062 2.5333 11.7063 2.53319 11.7064 2.53308C11.7331 2.50643 11.7502 2.50013 11.7831 2.5C11.7843 2.50041 11.7865 2.50134 11.7899 2.50319C11.8021 2.50972 11.8307 2.5288 11.8722 2.57719L11.8847 2.59177L11.8982 2.60535C11.9679 2.67498 11.9677 2.70974 11.9676 2.7188L11.9676 2.71942L11.9676 2.72005C11.9677 2.72909 11.9679 2.76379 11.8985 2.83324C11.8984 2.83332 11.8983 2.83341 11.8982 2.8335L3.73356 10.9622L2.87545 11.8165H4.08633H21.3525ZM11.7842 2.5C11.7842 2.5 11.7842 2.5 11.7842 2.5L11.7842 2.5Z"
                    stroke="white"
                  />
                </svg>
              </Link>
            </div>
            <button
              type="submit"
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#DCDFE0",
              }}
              className="font-[500] leading-[150%] rounded-[4px] flex justify-center items-center gap-[5px] text-[#fff] py-[14px] px-[16px] w-[80%]"
            >
              Submit
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
