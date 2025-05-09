import CardServices from "../../components/services/CardServices";
import { services } from "../../my_data";
import Button from "../Button";
const DownDiv = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 lg:gap-10">
        {services.map((service) => {
          return <CardServices key={service.id} {...service} />;
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          buttonText="Book a Call With me"
          buttonExtraClass="bg-purple900 text-white"
          buttonIconClass="bg-white text-blue"
          buttonLink="https://calendly.com/kambatukebele/30min"
        />
      </div>
    </>
  );
};
export default DownDiv;
