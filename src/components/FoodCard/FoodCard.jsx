const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card w-full  bg-base-100 shadow-xl">
      <figure className=" h-52">
        <img src={image} alt="Img" className=" w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="bg-slate-900 absolute text-white right-0 top-4 mr-3 px-2 rounded-md">
          ${price}
        </p>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline bg-gray-300 border-0 border-b-4 border-b-orange-300">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
