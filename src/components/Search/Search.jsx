import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import s from './Search.module.scss';

const Search = ({ fetchData }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filterSlice.searchValue);

  //const [value, setValue] = useState('');

  const inputRef = useRef();

  const onChangeSearchValue = (event) => {
    dispatch(setSearchValue(event.target.value));
    //console.log(searchValue);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    fetchData();
  };

  return (
    <div className={s.search}>
      <div className={s.inputContainer}>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={onChangeSearchValue}
          className={s.input}
          placeholder="Search in the menu..."
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            className={s.clearIcon}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        )}
      </div>

      {/* <button onClick={() => fetchData()} className={s.button}>
        Search
      </button> */}
    </div>
  );
};

export default Search;
