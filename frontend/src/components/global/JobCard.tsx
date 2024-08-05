import { Link } from "react-router-dom";

// Icons
import { FaRegBookmark } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const JobCard = ({ data }: any) => {
  return (
    <Link
      to={`job-details/${data}`}
      className="block w-full p-4 border border-gray-700 rounded-lg shadow-sm shadow-gray-600 transitions hover:shadow-lg hover:shadow-gray-700"
    >
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md justify-center h-[40px] w-[40px] border border-gray-700 shadow-md shadow-gray-700">
            <img src="/image/hero/img-1.png" className="w-[22px]" alt="" />
          </div>
          <h4 className="text-base font-medium leading-none text-white font-jakarta">
            Fullstack Developer
          </h4>
        </div>
        <button className="w-[30px] h-[30px] rounded-full border border-green text-green text-[13px] grid  place-content-center transitions hover:bg-green hover:text-white focus:bg-green focus:text-white bg-[#05966813]">
          <FaRegBookmark />
        </button>
      </div>

      {/* Date and salary section */}
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="m-1 text-[10px] mb-2 leading-none badge border-none px-2 badge-outline font-medium font-poppin  text-green transitions hover:bg-green hover:text-white focus:bg-green bg-[#05966813] focus:text-white">
            Part Time
          </p>
          <p className="flex items-center text-sm text-slate font-poppin gap-x-1">
            <IoLocationSharp /> Islamabad
          </p>
        </div>
        <div>
          <p className="flex items-center mb-2 text-sm text-slate font-poppin gap-x-1">
            <FaRegClock /> 20th Feb 2023
          </p>
          <p className="text-sm leading-none text-white font-poppin text-end">
            40k - 80k
          </p>
        </div>
      </div>

      {/* Apply button */}
      <div className="mt-5">
        <button className="w-full primary-btn">Apply Now</button>
      </div>
    </Link>
  );
};

export default JobCard;
