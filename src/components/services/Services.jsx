import DownDiv from "./DownDiv";
import TopDiv from "./TopDiv";
const Services = () => {
  return (
    <section className="w-full h-fit bg-white py-10 lg:py-20 bg-bg-longue bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <TopDiv />
        <DownDiv />
      </div>
    </section>
  );
};
export default Services;
