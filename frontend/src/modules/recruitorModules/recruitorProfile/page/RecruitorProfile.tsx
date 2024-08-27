import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

// Apis
import { useGetUserByIdQuery } from "../../../../redux/features/userApi";

const RecruitorProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: userData } = useGetUserByIdQuery({ id: user?._id });

  const updateProfileData = (data: any) => {
    console.log(data);
  };

  return (
    <main className="">
      {/* BreadCrumbs */}
      <section className="flex items-center w-full gap-2 p-3 rounded-md bg-light-blue">
        <Link
          to="/recruitor/dashboard"
          className="text-sm text-slate font-poppin"
        >
          Dashboard
        </Link>
        <p className="text-sm text-green font-poppin">
          {" "}
          <span className="pe-1">/</span>Edit Profile
        </p>
      </section>

      <section className="grid grid-cols-12 gap-6 mt-4">
        {/* Left Profile section */}
        <div className="px-4 py-10 rounded-md col-span-full lg:col-span-4 xl:col-span-3 bg-light-blue">
          <div className="flex flex-col items-center justify-center">
            <img
              src={userData?.data?.profile?.profilePhoto || "/image/avator.jpg"}
              // src="/image/avator.jpg"
              className="sm:w-[130px] w-[100px] rounded-full border-2 border-green"
              alt=""
            />
            <h3 className="mt-3 text-xl font-medium leading-none text-white capitalize font-poppin">
              {userData?.data?.fullName}
            </h3>
            <p className="text-sm text-slate font-jakarta">Recruitor</p>
          </div>
          {/* <div className="mt-4">
            <div className="flex items-center justify-center gap-4 lg:justify-between">
              <p className="text-sm text-white font-jakarta">
                Total Jobs Posted:{" "}
              </p>
              <p className="text-sm text-slate font-jakarta">12</p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 lg:justify-between">
              <p className="text-sm text-white font-jakarta">Website Link:</p>
              <p className="text-sm text-slate font-jakarta">GoMarkho.com</p>
            </div>
          </div> */}
        </div>

        {/* Profile update section */}
        <div className="p-4 rounded-md col-span-full lg:col-span-8 xl:col-span-9 bg-light-blue">
          <h3 className="pb-4 text-lg font-medium text-white border-b font-poppin border-b-gray-700">
            Profile Setup
          </h3>

          <form
            className="grid w-full grid-cols-12 gap-4 pb-4 mt-6"
            onSubmit={handleSubmit(updateProfileData)}
          >
            {/* Name input */}
            <div className="sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Name</p>
              <input
                type="text"
                className="w-full capitalize border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.fullName}
                {...register("fullName", { required: "Name is required" })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mt-2 sm:col-span-6 col-span-full sm:mt-0">
              <p className="mb-1.5 text-xs text-white font-jakarta">Email</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.email}
                {...register("email", { required: "Email is required" })}
              />
            </div>

            {/* Phone number input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Phone</p>
              <input
                type="tel"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.phoneNumber}
                {...register("phoneNumber", { required: "Name is required" })}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Address input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Address</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.profile?.address}
                {...register("address", { required: "Name is required" })}
              />
              {errors.address && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Country input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Country</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.profile?.country}
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* City input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">City</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder={userData?.data?.profile?.city}
                {...register("city", { required: "Name is required" })}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="flex gap-2 pt-4 mt-4 border-t md:pt-8 md:mt-8 col-span-full border-t-gray-700">
              <button className="primary-btn px-[20px]">Update</button>
              <button className="primary-btn bg-red-500 px-[20px]">
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RecruitorProfile;
