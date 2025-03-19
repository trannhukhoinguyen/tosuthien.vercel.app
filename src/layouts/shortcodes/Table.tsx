import React, { useState } from 'react';
import sectDb from "../../../src/db/sectDb.tsx";
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
const Table: React.FC<TableProps> = ({ data, lang, itemsPerPage = 10, searchTermProp }) => {
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
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:px-8 w-full">

      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-flex w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="ml-3">
            <div className="w-full max-w-sm min-w-[200px] relative">
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table>

        <thead>
        <tr>
          <th>ID</th>
          <th>English Name</th>
          { lang === 'vi' && <th>Vietnamese Name</th> }
          { lang === 'zh' && <th>Chinese Name</th> }
          { lang === 'ja' && <th>Japanese Name</th> }
          <th>Birth - Death</th>
          <th>Sect</th>
          <th>Country</th>
          <th>Place</th>
          <th>Teachers</th>
          <th>Successors</th>
          <th>Disciples</th>
          <th>References</th>
        </tr>
        </thead>

        <tbody>
        {
          currentData.map((item) => (
            <tr key={ item.id }>
              <td>{ item.id }</td>
              {
                item.hasContent
                  ? <td><a
                        target="_blank"
                        href={"/masters/" + formatUrl(removeTextBetweenParentheses(item.name_en.toLowerCase()))}
                        title="read more"
                        className="text-blue-700"
                      >
                    <Modal lang={lang} title={item.name_en + "⬆️"} content={item.other_name_en} />
                  </a></td>
                : <td>
                    <Modal lang={lang} title={item.name_en + "⬆️"} content={item.other_name_en} />
                </td>
              }
              { lang === 'ja' && <td>{ item.name_ja }<Modal lang={lang} title={"⬆️"} content={ item.other_name_ja } /></td> }
              { lang === 'zh' && <td>{ item.name_zh }<Modal lang={lang} title={"⬆️"} content={ item.other_name_zh } /></td> }
              { lang === 'vi' && <td>{ item.name_vi }<Modal lang={lang} title={"⬆️"} content={ item.other_name_vi } /></td> }
              <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                <div className="flex items-center">
                  <span className="mr-1">{ item.birth_death_time[0] }</span>
                  <span className="mr-1">{ item.birth_death_time[0] && item.birth_death_time[1] ? '⇨' : '' }</span>
                  <span className="mr-1">{ item.birth_death_time[1] }</span>
                  <Modal lang={lang} title={"⬆️"} content={item.epoch} />
                </div>
              </td>
              {
                item.sect.length <= 1
                  ? <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{ item.sect.join(', ') }</td>
                  : <Modal lang={lang} title={"⬆️"} content={item.sect.join(', ')}/>
              }
              <td>{ item.country }</td>
              <td><Modal lang={lang} title={"⛰⛩"} content={ item.place } /></td>
              {
                item.teachers.length <= 1
                  ? <td>{ item.teachers.join(', ') }</td>
                  : <td><Modal lang={lang} title={"⬆️"} content={ item.teachers.join(', ') } /></td>
              }
              <td>{ item.successors.join(', ') }</td>
              {
                item.disciples.length <= 1
                  ? <td>{ item.disciples.join(', ') }</td>
                  : <td><Modal lang={lang} title={"⬆️"} content={ item.disciples.join(', ') } /></td>
              }
              <td><Modal lang={lang} title={"🧷"} content={ item.reference?.join(', ') } /></td>
          </tr>
          ))
        }
        </tbody>

      </table>

      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-500">
          Showing <b>{ indexOfFirstItem+1 } - { currentPage === lastPage ? indexOfLastItem : indexOfLastItem }</b> of { filteredData.length }
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))
          }
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Table;
