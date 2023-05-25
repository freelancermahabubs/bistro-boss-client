import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  // console.log(title);
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 my-16">
        {items.map((items) => (
          <MenuItem key={items._id} item={items} />
        ))}
      </div>
      <div className="text-center mb-2">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
