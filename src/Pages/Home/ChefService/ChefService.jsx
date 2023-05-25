import ChefServices from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="mb-40 ">
      <div
        style={{
          backgroundImage: ` url(${ChefServices})`,
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
          width: "700",
          boxShadow: "15px",
          backgroundSize: "cover",
          borderRadius: "10px",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="w-[64%] mx-auto -mt-64 rounded-md py-8 bg-red-50 ">
        <h2 className="text-4xl uppercase text-center mb-2">Bistro Boss</h2>
        <p className="text-sm font-semibold relative text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero <br /> accusamus laborum deseruntratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto <br /> ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
