import Image from "next/image";
import SocialMedia from "./../SocialMedia/SocialMedia";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeThemeFunc } from "@/app/features/theme";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";



const Header =()=> {

  const { theme } = useAppSelector((state) => state.colorTheme);
  const dispatch = useAppDispatch();

  const changeTheme = (event) => {
    event.preventDefault();
    dispatch(changeThemeFunc(!theme));
  };
  return (
    <div>
      <div
        id="header-title"
        className="flex flex-col md:flex-row justify-center px-4 items-center"
      >
        <div className="flex justify-around items-center gap-4 w-1/2 flex-row">

          {/* start lable darck mode  whit table*/}
          <div
              className="text-4xl transition ease-in-out delay-1000"
              onClick={(event) => changeTheme(event)}
          >
            {theme ? <BsMoon /> : <BsSun />}
          </div>
          {/* end lable darck mode */}


          <div className="flex justify-center items-center flex-col gap-2 ">
            <p className="font-semibold ">021-96646</p>
            <button className="btn btn-outline md:text-xl">
              دانلود کاتالوگ
            </button>
          </div>


          <div id="social">
            <SocialMedia />
          </div>
        </div>

        <div className="hidden md:flex flex-row justify-center gap-4  items-center  md:border-l-4 md:border-orange-400 pl-4">
          <p className="md:text-2xl text-xl font-semibold">آساک‌قرن</p>

          <Image
            width={50}
            height={50}
            src="/assets/image/logo/dian.svg"
            alt="LogoDian"
            className={ `rounded  ${theme? "bg-orange-400" : ""}`}
          />
            {/*animate-bounce*/}
        </div>
        </div>

      <div
        id="navbarMenu"
        className="flex flex-row justify-around px-12 md:p-0"
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                   <Link href="/">آساک</Link>
                </li>

                <li>
                  <a>آساکی‌شو</a>
                </li>
                <li>
                  <Link href="/ProductPage">محصولات</Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    خدمات‌ما
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-50 bg-base-300">
                    <li>
                      <a>خدمات 1</a>
                    </li>
                    <li>
                      <a>خدمات 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>تماس‌با‌ما</a>
                </li>
                <li>
                  <a>ارتباط با‌ما</a>
                </li>
                <li>
                  <Link href="/aboutPage">درباره‌ما</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* start navbar for deskTop */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 md:text-xl">
              <li>
                <Link href="/aboutPage">درباره‌ما</Link>
              </li>
              <li>
                <a>تماس باما</a>
              </li>
              <li tabIndex={0}>
                <a>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                  خدمات ما
                </a>
                <ul className="p-2 z-50 bg-base-300">
                  <li>
                    <a>خدمات یک</a>
                  </li>
                  <li>
                    <a>خدمات دو</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>آساکی‌شو</a>
              </li>
              <li>
                <Link href="/ProductPage">محصولات</Link>
              </li>
              <li>
                <Link href="/">
                    آساک   
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center md:border-l-4 md:border-warning pl-4 md:hidden">
          <p className="text-2xl font-semibold">آساک‌قرن</p>
          {/* start lable darck mode whit mobile */}
          <div
            className="text-4xl p-4 transition ease-in-out delay-1000"
            onClick={(event) => changeTheme(event)}
          >
            {theme ? <BsMoon /> : <BsSun />}
          </div>
          {/* end lable darck mode */}
          <Image
            width={50}
            height={50}
            src="/assets/image/logo/dian.svg"
            alt="LogoDian"
            className="bg-orange-400 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
