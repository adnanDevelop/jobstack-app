import { companyData } from "./dummy";
import CompanyCard from "./component/CompanyCard";
import ExploreJob from "../home/component/ExploreJob";
import PageHeader from "../../components/global/PageHeader";

// Icons
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Companies = () => {
  return (
    <main>
      <section>
        <PageHeader title="Companies" breadCrumb="Companies" />
      </section>

      <section className="padding-inline md:pt-[100px] pt-[70px] ">
        {/* Search bar */}
        <div className=" items-end justify-end w-full md:flex sm:mb-[60px] mb-[50px]">
          <div>
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Company
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>

        {/* Company card section */}
        <section className="grid grid-cols-12 gap-x-4 ">
          {companyData.map((data, index) => {
            return (
              <div key={index} className="col-span-3 mb-[50px]">
                <CompanyCard data={data} />
              </div>
            );
          })}
        </section>

        {/* Pagniation */}
        <div className="flex items-center justify-center mt-8 col-span-full">
          <div className="flex items-center justify-center">
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate  transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              <FaChevronLeft />
            </button>
            {[1, 2, 3, 4, 5].map((element: number, index: number) => {
              return (
                <button
                  key={index}
                  className="w-[40px] h-[40px] flex items-center justify-center  border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
                >
                  {element}
                </button>
              );
            })}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              {" "}
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* Explore job section */}
      <ExploreJob />
    </main>
  );
};

export default Companies;
