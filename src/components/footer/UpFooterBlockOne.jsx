// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import Logo from "../Logo";
import Paragraph from "../Paragraph";
// faXTwitter,
// faInstagram,
// faYoutube,
const UpFooterBlockOne = () => {
  return (
    <div className="w-full flex justify-center items-start flex-col py-4 gap-4">
      <Logo logo={logo} />
      <Paragraph
        paraText="By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position (SEO)"
        width="w-[270px] lg:w-[230px]"
      />
      <div>
        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
        {/* <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} /> */}
      </div>
    </div>
  );
};
export default UpFooterBlockOne;
