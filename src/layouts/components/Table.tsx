import React, { useState } from 'react';

interface TableProps {
  data: {
    id: number
    name_en: string
    name_es: string
    name_de: string
    name_fr: string
    name_vi: string
    name_ru: string
    name_zh: string
    name_ja: string
    name_ko: string
    name_ar: string
    country: string
    place: string
    teacher: string
    successor: string
    disciples: string[]
  }[];
  lang: string;
  itemsPerPage?: number;
}

const Table: React.FC<TableProps> = ({ data, lang, itemsPerPage = 10 }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
    console.log('handleSearchhandleSearch')
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log('handlePageChangehandlePageChange')
  };

  const filteredData = data.filter(
    (item) =>
      item.name_en.toLowerCase().includes(searchTerm)
      || item.name_es.toLowerCase().includes(searchTerm)
      || item.name_de.toLowerCase().includes(searchTerm)
      || item.name_fr.toLowerCase().includes(searchTerm)
      || item.name_vi.toLowerCase().includes(searchTerm)
      || item.name_ru.toLowerCase().includes(searchTerm)
      || item.name_zh.toLowerCase().includes(searchTerm)
      || item.name_ja.toLowerCase().includes(searchTerm)
      || item.name_ko.toLowerCase().includes(searchTerm)
      || item.name_ar.toLowerCase().includes(searchTerm)
      || item.country.toLowerCase().includes(searchTerm)
|| item.place.toLowerCase().includes(searchTerm)
      || item.teacher.toLowerCase().includes(searchTerm)
|| item.successor.toLowerCase().includes(searchTerm)
      || item.disciples.some(disciple => disciple.toLowerCase().includes(searchTerm))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>English Name</th>
          {lang === 'es' && <th>Spanish Name</th>}
          {lang === 'de' && <th>German Name</th>}
          {lang === 'fr' && <th>French Name</th>}
          {lang === 'vi' && <th>Vietnamese Name</th>}
          {lang === 'ru' && <th>Russian Name</th>}
          {lang === 'zh' && <th>Chinese Name</th>}
          {lang === 'ja' && <th>Japanese Name</th>}
          {lang === 'ko' && <th>Korean Name</th>}
          {lang === 'ar' && <th>Arabic Name</th>}
          <th>Country</th>
          <th>Place</th>
          <th>Teacher</th>
          <th>Successor</th>
          <th>Disciples</th>
        </tr>
        </thead>
        <tbody>
        {currentData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name_en}</td>
            {lang === 'es' && <td>{item.name_es}</td>}
            {lang === 'de' && <td>{item.name_de}</td>}
            {lang === 'fr' && <td>{item.name_fr}</td>}
            {lang === 'vi' && <td>{item.name_vi}</td>}
            {lang === 'ru' && <td>{item.name_ru}</td>}
            {lang === 'zh' && <td>{item.name_zh}</td>}
            {lang === 'ja' && <td>{item.name_ja}</td>}
            {lang === 'ko' && <td>{item.name_ko}</td>}
            {lang === 'ar' && <td>{item.name_ar}</td>}
            <td>{item.country}</td>
<td>{item.place}</td>
            <td>{item.teacher}</td>
<td>{item.successor}</td>
            <td>{item.disciples}</td>
          </tr>
        ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
