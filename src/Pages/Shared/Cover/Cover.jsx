import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -10, max: 15 }}
      bgImage={img}
      className="rounded-md"
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
        // style={{
        //   backgroundImage: `url("${img}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[64%] h-48 bg-black opacity-60">
            <h1 className="mb-5 mt-5 text-6xl  uppercase text-white font-semibold">
              {title}
            </h1>
            <p className="mb-5 mt-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
