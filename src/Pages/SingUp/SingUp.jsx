import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginImg from "../../assets/others/authentication2.png";
import Authentication from "../../assets/others/authentication.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";
const SingUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | SingUp</title>
      </Helmet>
      <div
        style={{
          backgroundImage: ` url(${Authentication})`,
          backgroundRepeat: "no-repeat",
          height: "80vh",
          width: "700",
          backgroundSize: "cover",
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
        className="hero lg:mt-16 bg-base-200"
      >
        <div className="hero-content flex-col  lg:flex-row md:flex">
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">SingUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 Characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less then 20 Characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must be one Uppercase one Lower case, one number
                    and one special Characters.
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="SingUp"
                />
              </div>
            </form>
            <p className="mb-2 text-center">
              <small>
                Already registered?
                <Link to="/login">Go to log in</Link>
              </small>
            </p>
            <p className="text-center">
              <small>Or sign up with</small>
            </p>
          </div>
          <div className="text-center lg:text-left">
            <img src={LoginImg} alt="LoginImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
