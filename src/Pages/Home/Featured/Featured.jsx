import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="mb-20 pt-8"
      style={{
        backgroundImage: ` url(${FeaturedImg})`,
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
        width: "600",
        boxShadow: "15px",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: "10px",
      }}
    >
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36 ">
        <div>
          <img className="rounded-md" src={FeaturedImg} alt="FeaturedImg" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2029</p>
          <p className="uppercase text-white">Where Can i get Some?</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe enim quod delectus consequuntur. Beatae incidunt dicta
            laudantium ab fuga mollitia fugiat labore assumenda autem aut non ad
            sint adipisci cupiditate optio quae laboriosam dolores voluptates
            sed reiciendis, facilis magnam accusantium eum? Animi molestias
            veniam repudiandae. Exercitationem fugit saepe quas?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
