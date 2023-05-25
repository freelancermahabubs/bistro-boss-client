import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Img from "../../../assets//home/slide5.jpg";
const ChefRecommends = () => {
  return (
    <section className="mb-20">
      <SectionTitle heading="Chef Recommends" subHeading="Should Try " />
      <div className="grid md:grid-cols-2 pl-12 lg:pl-0 md:pl-5 gap-4 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" h-52">
            <img src={Img} alt="Img" className=" w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 border-b-orange-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" h-52">
            <img src={Img} alt="Img" className=" w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline ">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" h-52">
            <img src={Img} alt="Img" className=" w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 border-b-orange-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
