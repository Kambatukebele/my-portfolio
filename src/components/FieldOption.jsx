const FieldOption = ({ fieldOptionTitle, fieldOptionValue }) => {
  return (
    <>
      <option value={`${fieldOptionValue}`} className="">
        {fieldOptionTitle}
      </option>
    </>
  );
};
export default FieldOption;
