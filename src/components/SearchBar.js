import React from 'react';
import '../style/SearchBar.css'

export default ({ searchValue, data, update }) => {

  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(firm => {
      return firm.title.toLowerCase().includes(value);
    });

    update({
      firms: data,
      curFirms: filter,
      searchValue: value
    });

  };

  return (
      <div className="">
        <input
            value={searchValue}
            type="text"
            className="searchBar"
            placeholder="Поиск..."
            onChange={dataSearch}
        />
      </div>
  );
};