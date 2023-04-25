import { useState, useEffect } from "react";
import { workshops } from "../constants";
import { CSVLink } from "react-csv";
import { BiUserCircle, BiBriefcaseAlt2, BiInfoCircle } from "react-icons/bi";

const Workshops = () => {
  const headerData = ["Id", "Topic", "Speaker", "Company", "About", "Visit"];

  const [tableData, setTableData] = useState(
    workshops.map((workshop) => Object.values(workshop))
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTableData(workshops.map((workshop) => Object.values(workshop)));
  }, [workshops]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterTable = (workshop) => {
    return Object.values(workshop).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredWorkshops = workshops.filter(filterTable);

  return (
    <section id="workshops" className="workshops">
      <div className="container mx-auto py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-left pt-0 pb-6">
              <h2 className=" mt-4 text-5xl font-extralight text-white md:-mt-2">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                  <span className="relative font-semibold">Workshops</span>
                </span>
                <br className="block sm:hidden" />
              </h2>
            </div>

            <div className="flex items-center justify-start mt-4 sm:justify-end sm:mt-0 sm:space-x-7">
              {/* Search bar */}
              <div className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    id="simple-search"
                    onChange={handleSearch}
                    className="h-8 mt-1 bg-black border border-transparent text-white text-xs rounded-lg block w-full pl-3 p-6 md:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </div>

              <CSVLink
                data={tableData}
                headers={headerData}
                filename={"hayley-workshops-attended.csv"}
                target="_blank"
              >
                <button
                  type="button"
                  className="items-center hidden px-3 py-2 mt-1 text-sm font-medium leading-4 text-white bg-black border border-gray-300 rounded-lg shadow-sm sm:inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg
                    className="w-4 h-4 mr-1 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export to CSV
                </button>
              </CSVLink>

              {/* // Add sorting function in the future! */}

              {/* <div className="inline-flex items-center justify-end pt-3 md-pt-0">
                <label
                  htmlFor="sort"
                  className="text-base font-semibold text-white sm:text-sm mr-2"
                >
                  {" "}
                  Sort:{" "}
                </label>
                <select
                  id="sort"
                  name="sort"
                  onChange={handleSort}
                  className="cursor-pointer block w-full bg-custom-black text-white py-1 md:py-2 pl-1 pr-10 text-normal font-semibold border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                >
                  <option value="default">Default</option>
                  <option value="asc">A-Z (Topics)</option>
                  <option value="desc">Z-A (Topics)</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full pb-12 align-middle md:px-6 lg:px-8">
                <table className="min-w-full lg:divide-gray-200 lg:divide-y">
                  <thead className="hidden lg:table-header-group">
                    <tr>
                      <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">
                        Topic
                      </th>

                      <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                        Speaker
                      </th>

                      <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                        Company
                      </th>

                      <th className="py-3.5 px-4 text-left hidden xl:table-cell text-xs uppercase tracking-widest font-medium text-gray-500">
                        About
                      </th>

                      <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                        Visit
                      </th>
                    </tr>
                  </thead>

                  {Object.keys(filteredWorkshops).length === 0 ? (
                    <p className="text-white mx-5 py-5 font-light text-sm">
                      Sorry. No matching records.
                    </p>
                  ) : (
                    <tbody className="">
                      {filteredWorkshops.map((workshop) => (
                        <tr key={workshop.id}>
                          <td className="px-6 py-4 text-sm font-semibold text-white align-top lg:align-middle whitespace-nowrap">
                            <div className="flex items-center">
                              {workshop.title}
                            </div>

                            <div className="mt-1 space-y-2 font-light pl-11 pt-3 lg:hidden">
                              <div className="flex items-center">
                                <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                  <BiUserCircle />
                                </div>
                                {workshop.speaker}
                              </div>

                              <div className="flex items-center">
                                <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                  <BiBriefcaseAlt2 />
                                </div>
                                {workshop.company}
                              </div>

                              <div className="flex items-start whitespace-break-spaces">
                                <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                  <BiInfoCircle />
                                </div>
                                {workshop.about}
                              </div>

                              <td className="px-4 py-4 lg:table-cell whitespace-nowrap">
                                <div className="flex items-center space-x-4">
                                  <a
                                    href={workshop.url}
                                    target="_blank"
                                    className="inline-flex items-center px-8 md:px-10 py-1 md:py-2 text-sm font-light text-white transition-all duration-200 bg-custom-red border border-1 border-white rounded-md shadow-sm focus:outline-none hover:text-white hover:opacity-90 focus:ring-2 focus:ring-offset-1 focus:ring-white"
                                  >
                                    Visit
                                  </a>
                                </div>
                              </td>
                            </div>
                          </td>

                          <td className="hidden px-4 py-4 text-xs font-light text-white lg:table-cell whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                <BiUserCircle />
                              </div>
                              {workshop.speaker}
                            </div>
                          </td>

                          <td className="hidden px-4 py-4 text-xs font-light text-white lg:table-cell ">
                            <div className="flex items-center">
                              <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                <BiBriefcaseAlt2 />
                              </div>
                              {workshop.company}
                            </div>
                          </td>

                          <td className="hidden px-4 py-4 text-xs font-light text-white xl:table-cell ">
                            <div className="flex items-center">
                              <div className="w-4 h-4 mr-2 mt-1 text-gray-400">
                                <BiInfoCircle />
                              </div>
                              {workshop.about}
                            </div>
                          </td>

                          <td className="px-4 py-4 lg:table-cell whitespace-nowrap">
                            <div className="flex items-center space-x-4">
                              <a
                                href={workshop.url}
                                target="_blank"
                                className="inline-flex items-center px-10 py-2 text-sm font-medium text-white transition-all duration-200 bg-custom-red border border-1 border-white rounded-md shadow-sm focus:outline-none hover:text-white hover:opacity-80 focus:ring-2 focus:ring-offset-1 focus:ring-white"
                              >
                                Visit
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
