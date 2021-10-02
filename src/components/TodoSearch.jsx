import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
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
    </>
  );
};

export { TodoSearch };