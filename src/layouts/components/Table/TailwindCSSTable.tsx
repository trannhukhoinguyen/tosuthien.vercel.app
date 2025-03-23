import React, { useState } from 'react';
import sectDb from "../../../db/sectDb.tsx";
import '@/styles/table.css';
import Modal from "@/shortcodes/Modal.tsx";

interface TableProps {
  data: {
    id: string
    hasContent?: boolean
    name_en: string
    other_name_en?: string
    nickname_en?: string
    name_ja: string
    other_name_ja?: string
    name_zh: string
    other_name_zh?: string
    nickname_zh?: string
    pinyin?: string
    wade_giles?: string
    name_vi: string
    other_name_vi?: string
    nickname_vi?: string
    worship_tower?: string
    birth_death_time: string[]
    epoch?: string
    records: string | undefined
    sect: string[] | []
    country: string
    place: string
    teachers: string[]
    successors: string[]
    disciples: string[]
    reference: string[]
  }[];
  lang: string | undefined;
  itemsPerPage?: number;
  searchTermProp?: string;
}
const formatUrl = (url: String) => url.replace(/%20| /g, '-');
const removeTextBetweenParentheses = (url: String) => url.replace(/\s*\(.*?\)/g, '');
const TailwindCSSTable: React.FC<TableProps> = ({ data, lang, itemsPerPage = 10, searchTermProp }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const filteredData = data.filter(
    (item) =>
      item.name_en?.toLowerCase().includes(searchTerm)
      || item.other_name_en?.toLowerCase().includes(searchTerm)
      || item.nickname_en?.toLowerCase().includes(searchTerm)
      || item.name_vi?.toLowerCase().includes(searchTerm)
      || item.other_name_vi?.toLowerCase().includes(searchTerm)
      || item.nickname_vi?.toLowerCase().includes(searchTerm)
      || item.name_zh?.toLowerCase().includes(searchTerm)
      || item.other_name_zh?.toLowerCase().includes(searchTerm)
      || item.pinyin?.toLowerCase().includes(searchTerm)
      || item.wade_giles?.toLowerCase().includes(searchTerm)
      || item.nickname_zh?.toLowerCase().includes(searchTerm)
      || item.name_ja?.toLowerCase().includes(searchTerm)
      || item.other_name_ja?.toLowerCase().includes(searchTerm)
      || item.birth_death_time?.some(time => time.toLowerCase().includes(searchTerm))
      || item.epoch?.toLowerCase().includes(searchTerm)
      || item.sect?.some(s => s.toLowerCase().includes(searchTerm))
      || item.country?.toLowerCase().includes(searchTerm)
      || item.place?.toLowerCase().includes(searchTerm)
      || item.teachers?.some(teacher => teacher.toLowerCase().includes(searchTerm))
      || item.successors?.some(successor => successor.toLowerCase().includes(searchTerm))
      || item.disciples?.some(disciple => disciple.toLowerCase().includes(searchTerm))
  );
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const lastPage = filteredData.length % itemsPerPage === 0 ? filteredData.length / itemsPerPage : Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Zen Master Data Table</h1>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <input
              className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                   stroke="currentColor" className="w-8 h-8 text-slate-600">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          <button
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-50">
          <tr>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English Name
            </th>
            {lang === "vi" && <th scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vietnamese
              Name</th>}
            {lang === "zh" && <th scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chinese
              Name</th>}
            {lang === "ja" && <th scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Japanese
              Name</th>}
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birth - Death
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sect
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teachers
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Successors
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disciples
            </th>
            <th scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">References
            </th>
          </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
          {
            currentData.map((item) => (
              <tr className="hover:bg-gray-50" key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                {
                  item.hasContent
                    ? <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a
                      target="_blank"
                      href={"/masters/" + formatUrl(removeTextBetweenParentheses(item.name_en.toLowerCase()))}
                      title="read more"
                      className="text-blue-700"
                    >
                      <Modal lang={lang} title={item.name_en + "⬆️"} content={item.other_name_en} />
                    </a></td>
                    : <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Modal lang={lang} title={item.name_en + "⬆️"} content={item.other_name_en} />
                    </td>
                }
                {lang === 'ja' &&
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name_ja}<Modal
                    lang={lang} title={"⬆️"} content={item.other_name_ja} /></td>}
                {lang === 'zh' &&
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name_zh}<Modal
                    lang={lang} title={"⬆️"} content={item.other_name_zh} /></td>}
                {lang === 'vi' &&
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name_vi}<Modal
                    lang={lang} title={"⬆️"} content={item.other_name_vi} /></td>}
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-1">{item.birth_death_time[0]}</span>
                    <span className="mr-1">{item.birth_death_time[0] && item.birth_death_time[1] ? '⇨' : ''}</span>
                    <span className="mr-1">{item.birth_death_time[1]}</span>
                    <Modal lang={lang} title={"⬆️"} content={item.epoch} />
                  </div>
                </td>
                {
                  item.sect.length <= 1
                    ? <td
                      className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{item.sect.join(', ')}</td>
                    : <Modal lang={lang} title={"⬆️"} content={item.sect.join(', ')} />
                }
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.country}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Modal lang={lang}
                                                                                                     title={"⛰⛩"}
                                                                                                     content={item.place} />
                </td>
                {
                  item.teachers.length <= 1
                    ? <td
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.teachers.join(', ')}</td>
                    : <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Modal lang={lang}
                                                                                                           title={"⬆️"}
                                                                                                           content={item.teachers.join(', ')} />
                    </td>
                }
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.successors.join(', ')}</td>
                {
                  item.disciples.length <= 1
                    ? <td
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.disciples.join(', ')}</td>
                    : <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Modal lang={lang}
                                                                                                           title={"⬆️"}
                                                                                                           content={item.disciples.join(', ')} />
                    </td>
                }
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Modal lang={lang}
                                                                                                     title={"🧷"}
                                                                                                     content={item.reference?.join(', ')} />
                </td>
              </tr>
            ))
          }
          </tbody>

        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex-1 flex justify-between sm:hidden">
          <span
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd" />
            </svg>
          </span>
          <span
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span
              className="font-medium">12</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <span
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd" />
                </svg>
              </span>
              {
                Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {index + 1}
                  </button>
                ))
              }
              <span
                 className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                </svg>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindCSSTable;
