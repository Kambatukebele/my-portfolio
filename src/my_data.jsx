//Hero Navigation data
import imageHero from "./assets/images/judens.png";
import background from "./assets/images/bg.png";
import logo from "./assets/images/logo.png";
import blue_circle from "./assets/images/blue_circle.png";
import circle from "./assets/images/circle_bg.png";
//End Hero Navigation data

// Technologies
import laravel from "./assets/svg/laravel.svg";
import php from "./assets/svg/php.svg";
import javascript from "./assets/images/javascript.webp";
import reactjs from "./assets/svg/reactjs.svg";
import tailwindcss from "./assets/images/tailwindcss.webp";
import mysqld from "./assets/images/mysql.webp";
// End Technologies

export const heroNavigation = {
  circle: circle,
  imgHero: imageHero,
  background: background,
  logo: logo,
  blue_circle: blue_circle,
};

export const technologies = [
  {
    id: 1,
    title: "laravel",
    img: laravel,
  },
  {
    id: 2,
    title: "php",
    img: php,
  },
  {
    id: 3,
    title: "reactjs",
    img: reactjs,
  },
  {
    id: 4,
    title: "javascript",
    img: javascript,
  },
  {
    id: 5,
    title: "tailwindcss",
    img: tailwindcss,
  },
  {
    id: 6,
    title: "mysql",
    img: mysqld,
  },
];

export const Icon = () => {
  return (
    <span className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
            fill="#000000"
          ></path>{" "}
        </g>
      </svg>
    </span>
  );
};
