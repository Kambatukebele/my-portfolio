import { useState } from "react";
import header from "./assets/images/judens.png";
import header2 from "./assets/images/jundes2.png";
import header3 from "./assets/images/header-imgbg.png";
import logo from "./assets/images/logo.png";
import element from "./assets/images/elements1.png";
import { Icon } from "./components/Icon";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowHideMenuOnSmallDevice = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="font-figtree">
      <section className="bg-custom-bg h-[900px] bg-red-300 bg-no-repeat bg-cover bg-center  xl:h-screen xl:relative">
        <div className="container h-fit mx-auto flex flex-col justify-center gap-4 xl:gap-0 ">
          <nav className="flex justify-between items-center py-4 z-40">
            {/* Logo */}
            <a className="w-[100px] block" href="#">
              <img
                className="block w-full h-full object-cover object-center"
                src={logo}
                alt=""
              />
            </a>
            <ul
              className={`${
                isOpen ? " left-0" : "-left-[1024px]"
              } flex w-full bg-white absolute top-16 right-0 bottom-0 z-50  ease-in duration-500 justify-start items-center gap-4 flex-col py-4 h-[600px] lg:static lg:top-0 lg:h-0 lg:flex-row lg:bg-transparent xl:justify-center xl:gap-8`}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <button className="hidden xl:bg-purple-700 xl:w-[228px] xl:h-[48px] xl:rounded-xl xl:text-white xl:flex xl:justify-center xl:items-center xl:gap-2">
              <a href="#">Start Ranking</a>
              <Icon />
            </button>
            {/* Hamburger and close Menu */}
            <div className="xl:hidden">
              <div
                onClick={handleShowHideMenuOnSmallDevice}
                className={isOpen ? "hidden" : "block"}
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 7L7 7M20 7L11 7"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M20 17H17M4 17L13 17"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M4 12H7L20 12"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div
                onClick={handleShowHideMenuOnSmallDevice}
                className={isOpen ? "block" : "hidden"}
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </nav>
          {/* Hero section */}
          <div className="w-full flex flex-col justify-between items-center gap-4 xl:flex-row xl:items-center xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:container xl:h-fit">
            <div className="flex flex-col justify-center items-start gap-4 mt-8 xl:w-1/2 xl:mt-0">
              <h6 className="text-sm bg-purple-100 font-semibold flex justify-center items-center h-[33px] w-[250px] rounded-lg text-center text-black">
                Top #1 SEO & Marketing Agency
              </h6>
              <h1 className="text-4xl font-bold text-start md:text-6xl">
                Elevate Your Brand With Expert SEO & Digital Marketing
              </h1>
              <p className="text-base text-gray-500 font-normal">
                Welcome to SEOC where we specialize in revolutionizing your
                online presence through expert SEO and digital marketing
                solutions.
              </p>
              <div className="flex flex-col justify-center items-start gap-2 sm:flex-row">
                <button className="bg-purple-700 w-[228px] h-[48px] rounded-xl text-white flex justify-center items-center gap-2">
                  <a href="#">Start Ranking Now</a>
                  <Icon />
                </button>
                <button className="bg-purple-700 w-[228px] h-[48px] rounded-xl text-white flex justify-center items-center gap-2">
                  <a href="#">Start Ranking Now</a>
                  <Icon />
                </button>
              </div>
            </div>
            <div className="w-full h-full xl:absolute xl:-top-32 xl:right-72 xl:w-[350px]">
              <div className="relative mx-auto w-[280px]">
                <div className="absolute -top-28 left-0 right-0 w-[280px] mx-auto h-auto sm:w-[320px] xl:w-[500px] z-20">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={header}
                    alt=""
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 z-0 w-[280px] mx-auto h-auto sm:w-[320px] xl:w-[600px]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={header3}
                    alt=""
                  />
                </div>
                <div className="absolute top-0 right-0 mx-auto w-[100px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="111"
                    viewBox="0 0 99 111"
                    fill="none"
                  >
                    <path
                      d="M56.4883 61.3515C49.3427 62.2577 49.9823 55.7097 46.9843 51.035C43.9885 46.0683 40.6048 44.6162 34.8347 45.3406C29.8118 45.9 25.9212 49.3271 25.7207 54.5082C25.5451 59.109 26.1247 63.3461 25.493 67.6602C21.1258 75.0334 16.195 83.845 26.7012 88.2954C32.6935 90.7651 36.7656 88.7045 41.4154 85.1081C46.2263 81.6584 50.0677 83.8755 55.5801 84.6684C65.2177 86.4566 75.3177 73.4584 69.0465 64.751C65.7508 59.7985 61.6543 60.6433 56.4883 61.3515Z"
                      fill="#C8BFF4"
                    />
                    <path
                      d="M46.6557 75.2553C45.6399 77.4641 43.017 78.4213 40.8086 77.4069C38.5985 76.3917 37.6334 73.7864 38.6492 71.5776C39.6642 69.3705 42.2718 68.4043 44.482 69.4195C46.6904 70.4339 47.6707 73.0482 46.6557 75.2553Z"
                      fill="#47586E"
                    />
                    <path
                      d="M76.6574 48.9719C74.2849 54.1305 70.0552 57.8493 65.1251 59.6971C60.8219 61.3129 57.1167 64.1635 54.5227 67.8697L39.1194 60.7943C40.2422 56.367 39.9323 51.6613 38.3645 47.2775C36.6232 42.3653 36.714 36.7929 39.07 31.6935C43.6052 21.8322 55.3405 17.1014 65.4358 21.0913C76.563 25.4753 81.5924 38.2413 76.6574 48.9719Z"
                      fill="#4E2FDA"
                    />
                    <path
                      d="M67.3954 19.6174C67.0211 19.4455 66.8591 19.0043 67.0303 18.632L68.2166 16.0527C68.3878 15.6804 68.8274 15.5177 69.2017 15.6896C69.5743 15.8607 69.737 16.3002 69.5658 16.6725L68.3796 19.2518C68.2084 19.6241 67.7679 19.7885 67.3954 19.6174Z"
                      fill="#4E2FDA"
                    />
                    <path
                      d="M49.3501 18.9278C49.1772 18.8484 49.0338 18.7049 48.9633 18.5107L47.9762 15.8501C47.8354 15.4661 48.0321 15.0385 48.4153 14.8953C48.8004 14.7528 49.2281 14.9493 49.3707 15.3341L50.357 17.9965C50.4995 18.3813 50.3037 18.8071 49.9187 18.9495C49.7253 19.0226 49.523 19.0073 49.3501 18.9278Z"
                      fill="#4E2FDA"
                    />
                    <path
                      d="M79.6561 32.8469C79.4832 32.7675 79.3406 32.6222 79.2694 32.4298C79.1268 32.045 79.3234 31.6175 79.7085 31.475L82.3717 30.4911C82.7567 30.3486 83.1827 30.5443 83.3253 30.9291C83.4678 31.3139 83.2712 31.7414 82.8862 31.8839L80.2247 32.8686C80.0322 32.9399 79.829 32.9263 79.6561 32.8469Z"
                      fill="#4E2FDA"
                    />
                    <path
                      d="M43.5048 63.0654L49.9535 66.0276C52.2559 60.2844 59.3046 52.8722 63.0842 49.1604C61.6213 49.4356 60.5419 49.2289 59.8199 48.5456C58.9737 47.7426 58.8911 46.5093 59.0197 45.4831C57.1041 46.4609 55.6455 46.6 54.5841 45.8989C53.495 45.1828 53.2034 43.7889 53.163 42.6656C51.8321 43.4847 50.6132 43.7081 49.5299 43.3313C48.7922 43.0766 48.2201 42.5743 47.7832 41.9939C47.4235 47.3155 46.3756 57.579 43.5048 63.0654ZM50.0641 67.7117L42.1521 64.0774C41.9596 63.989 41.8155 63.8235 41.7527 63.6221C41.6899 63.4206 41.7178 63.2004 41.8268 63.0197C45.8163 56.4246 46.4459 39.4421 46.4705 38.722C46.4819 38.3453 46.7772 38.0365 47.1536 38.0066C47.5318 37.9775 47.8694 38.234 47.9422 38.6061C47.9972 38.8903 48.5255 41.4265 50.0175 41.9285C51.1363 42.3172 52.5404 41.4001 53.5188 40.5635C53.7552 40.3593 54.0938 40.3271 54.3684 40.4813C54.6403 40.6364 54.7874 40.9456 54.7343 41.2535C54.6148 41.9451 54.484 44.0556 55.4027 44.6589C56.1427 45.1433 57.6977 44.6774 59.7496 43.3328C60.0203 43.1573 60.3738 43.1772 60.6235 43.3761C60.8733 43.5793 60.967 43.9201 60.8505 44.2204C60.6146 44.8413 60.103 46.7704 60.8422 47.4681C61.152 47.7615 62.2501 48.2702 65.7195 46.7116C66.0517 46.5621 66.4442 46.6755 66.6448 46.9812C66.8453 47.2869 66.7928 47.6922 66.5243 47.9378C66.393 48.0544 53.5599 59.796 51.0784 67.2714C51.0121 67.4718 50.8638 67.6346 50.67 67.7182C50.4761 67.8017 50.2548 67.7993 50.0641 67.7117Z"
                      fill="#F6F8F9"
                    />
                    <path
                      d="M52.5312 75.2011C52.242 75.8299 51.7311 76.2836 51.1275 76.5069C50.5281 76.7213 49.8407 76.7184 49.2204 76.4335L36.0807 70.3979C34.8312 69.8239 34.2804 68.3411 34.8588 67.0835C35.1439 66.4636 35.6637 66.0141 36.2601 65.7875C36.8637 65.5642 37.538 65.5719 38.1672 65.8609L51.307 71.8965C52.5565 72.4704 53.1055 73.9525 52.5312 75.2011Z"
                      fill="#A3ADBB"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 -left-10 mx-auto w-[150px] xl:top-44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="139"
                    height="126"
                    viewBox="0 0 139 126"
                    fill="none"
                  >
                    <path
                      d="M58.4468 52.3501C66.356 37.102 86.6982 28.2783 108.26 42.5912C122.615 52.7567 131.358 73.6874 131.358 90.074C131.358 113.455 111.839 125.206 90.368 125.856C52.6216 126.497 43.4723 80.3152 58.4468 52.3501Z"
                      fill="#C8BFF4"
                    />
                    <g clip-path="url(#clip0_9354_1740)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M77.3957 30.3086C78.0786 35.2829 77.4407 41.8938 75.1407 48.8734C72.8409 55.8527 69.4233 61.5489 65.9164 65.1444C62.2459 68.9078 59.3275 69.6108 57.6218 69.0494C55.9161 68.488 53.9868 66.1895 53.2721 60.9828C52.5892 56.0084 53.2271 49.3974 55.527 42.418C57.8269 35.4385 61.2445 29.7424 64.7513 26.147C68.4218 22.3838 71.3403 21.6805 73.046 22.2419C74.7517 22.8033 76.6809 25.102 77.3957 30.3086ZM84.2287 29.2427C83.401 23.2111 80.7654 17.3705 75.2494 15.5551C69.7335 13.7397 64.141 16.8721 59.8891 21.232C55.4732 25.7594 51.5569 32.4737 48.9891 40.2662C46.4212 48.0589 45.5791 55.7848 46.439 62.0487C47.2667 68.0801 49.9023 73.9209 55.4183 75.7364C60.9342 77.5518 66.5268 74.4191 70.7786 70.0594C75.1945 65.532 79.1108 58.8178 81.6787 51.0252C84.2465 43.2326 85.0886 35.5066 84.2287 29.2427Z"
                        fill="#4E2FDA"
                      />
                      <path
                        d="M96.4318 27.8957C88.8745 22.4457 81.0364 17.4601 75.25 15.5557C73.8248 15.0866 72.2888 15.861 71.8194 17.2855C71.35 18.7099 72.125 20.2449 73.5502 20.714C75.8468 21.4699 77.9857 24.3107 78.7891 29.7897C79.5663 35.0891 78.9178 42.0435 76.5177 49.3269C74.1177 56.6103 70.5044 62.589 66.7285 66.3897C62.8246 70.3195 59.4152 71.3344 57.1187 70.5785C55.6934 70.1094 54.1574 70.8839 53.688 72.3083C53.2186 73.7327 53.9936 75.2678 55.4189 75.7369C61.2053 77.6414 70.4739 78.2858 79.7926 78.3903C89.2261 78.4958 99.1025 78.0454 106.325 77.5973C114.06 77.1174 120.572 71.8987 122.971 64.616C125.371 57.3334 123.237 49.2689 117.301 44.2897C111.758 39.64 104.082 33.4126 96.4318 27.8957Z"
                        fill="#4E2FDA"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M101.789 71.9688C99.8264 71.5816 97.9211 72.8578 97.5336 74.8195C96.1118 82.0177 90.4691 87.6117 83.339 88.9457L75.4403 90.4233C73.4733 90.7914 72.1776 92.6829 72.5457 94.6483C72.9141 96.6137 74.8067 97.909 76.7733 97.5408L84.6724 96.063C94.7427 94.1791 102.651 86.2997 104.642 76.2221C105.029 74.2604 103.752 72.3561 101.789 71.9688Z"
                        fill="#4E2FDA"
                      />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.1934 44.516C25.3297 45.1245 21.5236 46.2823 17.8433 47.4316C17.0518 47.6817 16.5947 48.5193 16.8767 49.2751C17.1054 50.0559 17.9476 50.48 18.6856 50.2544C22.2513 49.1375 25.9374 48.0017 29.6241 47.431C30.4114 47.3128 30.9713 46.5569 30.8596 45.749C30.7481 44.9416 29.9809 44.3984 29.1934 44.516Z"
                      fill="#4E2FDA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.4831 31.8791C25.3963 28.7847 16.9459 26.7321 8.89691 23.4379C8.16833 23.1197 7.29928 23.4829 6.99516 24.231C6.69128 24.9797 7.02644 25.8508 7.8085 26.1446C15.8651 29.4553 24.3228 31.5239 32.4172 34.6349C33.1934 34.9158 34.0525 34.5313 34.35 33.7688C34.5942 33.0313 34.2593 32.16 33.4831 31.8791Z"
                      fill="#4E2FDA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.8307 15.9947C32.1957 18.633 34.5604 21.2715 36.9257 23.9103C37.436 24.54 38.379 24.5819 38.9944 24.0332C39.6094 23.484 39.632 22.5781 39.1214 21.9479C36.7527 19.305 34.3847 16.6624 32.0164 14.02C31.4604 13.4272 30.5202 13.3884 29.9077 13.9407C29.3411 14.4561 29.2751 15.4024 29.8307 15.9947Z"
                      fill="#4E2FDA"
                    />
                    <defs>
                      <clipPath id="clip0_9354_1740">
                        <rect
                          width="86.9422"
                          height="86.8998"
                          fill="white"
                          transform="matrix(-0.949876 -0.312628 -0.31297 0.949763 138.604 31.6426)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-0 animate-pulse">
          <img src={element} alt="" />
        </div>
      </section>
    </main>
  );
}

export default App;
