import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph";
import H4 from "../H4";
const ContactInfo = () => {
  return (
    <div className="hidden lg:flex lg:justify-center lg:flex-col lg:items-center lg:gap-4 lg:p-10 lg:w-2/5 lg:bg-black900 lg:rounded-2xl">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
        <H4
          h4Title="Contact Info"
          h4ExtraClass="lg:text-white lg:font-semibold"
        />
        <Paragraph
          paraText="If you're in need of a freelance Shopify developer, want a full Shopify ecommerce website, custom theme development or just need to hear some straightforward advice on how to start your next Shopify project, I'm all ears: let's have a chat!"
          width="text-white lg:text-white"
        />
      </div>
      <div className="lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faLocation}
            />
          </span>
          <div>
            <span className="lg:text-white lg:block lg:font-medium lg:text-xl lg:mb-1">
              Our Location
            </span>
            <Paragraph
              paraText="Remote / Based in Europe, Czech Republic"
              width="lg:text-white"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faPhone}
            />
          </span>
          <div>
            <span className="lg:text-white lg:block lg:font-medium lg:text-xl lg:mb-1">
              Call or Whatsapp me
            </span>
            <Paragraph paraText="+420 607 284 825" width="lg:text-white" />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faEnvelope}
            />
          </span>
          <div>
            <span className="lg:text-white lg:block lg:font-medium lg:text-xl lg:mb-1">
              Email me
            </span>
            <Paragraph
              paraText="kambatukebele@gmail.com"
              width="lg:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
