import { works } from "../../my_data";
import CardPortfolio from "./CardPortfolio";
const DownPortfolio = () => {
  return (
    <>
      <div className="w-full flex overflow-scroll">
        {works.map((work) => {
          return <CardPortfolio key={work.id} {...work} />;
        })}
      </div>
    </>
  );
};
export default DownPortfolio;
