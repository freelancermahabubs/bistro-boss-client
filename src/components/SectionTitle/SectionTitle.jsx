const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto my-8">
      <p className="text-yellow-600 text-center mb-2">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-4 border-gray-300 py-4 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
