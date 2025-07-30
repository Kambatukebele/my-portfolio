import React, { useState } from "react";
import { works } from "../../my_data";
import CardPortfolio from "./CardPortfolio";
const DownPortfolio = () => {
  const [selectedStack, setSelectedStack] = useState("all");

  const filteredItems =
    selectedStack === "all"
      ? works
      : works.filter((item) => item.stack === selectedStack);
  return (
    <div>
      <div className="w-full flex justify-center gap-4 items-center flex-wrap mb-20">
        {["all", "shopify", "react", "html+css+js", "wordpress", "laravel"].map((stack) => {          
          return (
            <button
              key={stack}
              onClick={() => setSelectedStack(stack)}
              type="button"
              className={`${
                selectedStack === stack
                  ? "bg-blue text-white"
                  : "bg-transparent text-blue border-gray-300 border "
              } py-2 px-6 rounded-md border-1`}
            >
              {stack.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-1 gap-5 my-5 lg:grid-cols-2">
        {filteredItems.map((work) => {
          return <CardPortfolio key={work.id} {...work} />;
        })}
      </div>
    </div>
  );
};
export default DownPortfolio;
