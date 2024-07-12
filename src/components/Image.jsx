const Image = ({ image }) => {
  return (
    <>
      <img
        className="w-full h-full object-cover object-center"
        src={image}
        alt=""
      />
    </>
  );
};
export default Image;
