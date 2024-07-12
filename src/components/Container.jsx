export const Container = ({
  children,
  extraClassWrapper,
  extraClassContainer,
}) => {
  return (
    <section className={`w-full h-fit ${extraClassWrapper}`}>
      <div className={`container mx-auto ${extraClassContainer}`}>
        {children}
      </div>
    </section>
  );
};
