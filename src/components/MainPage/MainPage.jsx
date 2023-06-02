import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/Aside/Aside';
import Dishes from '../../components/Dishes/Dishes';
import Search from '../../components/Search/Search';
import s from './MainPage.module.scss';
import dishes from './../../assets/dishes.json';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
  //console.log(dishes);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const { searchValue, sort, categoryId, subCategoryIds, currentPage } = useSelector(
    (state) => state.filterSlice,
  );
  const sortType = sort.sortProperty;

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchData = () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';

    fetch(
      `https://641f346cf228f1a83eb2a028.mockapi.io/items?page=${currentPage}&limit=16&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        //console.log(arr);
      });
    //filterRes();
  };

  useEffect(() => {
    fetchData();
  }, [searchValue, sort, categoryId, currentPage]);
  //console.log(items);

  let filteredItems = [];

  //   const filterRes = () => {
  //     for (let i = 0; i < items.length; i++) {
  //       let includedDish = subCategoryIds.find((item) => item == items[i].subcategoriesIds);
  //       if (includedDish) {
  //         filteredItems.push(items[i]);
  //       }
  //     }
  //     console.log(filteredItems);
  //     //setItems(filteredItems);
  //   };

  //filterRes();

  let dishesSubCategoriesFiltered = [];

  const filterSubCategories = () => {
    for (let i = 0; i < items; i++) {
      let dishesSubcategoriesIds = items[i].subCategoryIds;
      let common = dishesSubcategoriesIds.filter((x) => subCategoryIds.includes(x));
      if (common.length > 0) {
        dishesSubCategoriesFiltered.push(items[i]);
      }
    }
  };

  return (
    <div className={s.mainpage}>
      <Search fetchData={fetchData} />
      <div className={s.title}>All dishes</div>
      <div className={s.mainblock}>
        <Aside
          filterSubCategories={filterSubCategories}
          filteredItems={filteredItems}
          setItems={setItems}
        />
        <Dishes items={items} />
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default MainPage;
