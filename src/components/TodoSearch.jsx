import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        onChange={onSearchValueChange}
        className="todo-search"
        type="text"
        value={searchValue}
        placeholder="Filtra el todo"
      />
      <p>{searchValue}</p>
    </>
  );
};

export { TodoSearch };
