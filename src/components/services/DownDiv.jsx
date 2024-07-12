import CardServices from "../../components/services/CardServices";
import { services } from "../../my_data";
const DownDiv = () => {
  console.log(services);
  return (
    <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 lg:gap-10">
      {services.map((service) => {
        return <CardServices {...service} />;
      })}
    </div>
  );
};
export default DownDiv;
