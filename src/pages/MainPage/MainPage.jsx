import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/Aside/Aside';
import Dishes from '../../components/Dishes/Dishes';
import Search from '../../components/Search/Search';
import s from './MainPage.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import Pagination from '../../components/Pagination/Pagination';
import { fetchDishes } from '../../redux/slices/dishesSlice';

const MainPage = () => {
  //console.log(dishes);
  const dispatch = useDispatch();

  //const [items, setItems] = useState([]);
  const { items, status } = useSelector((state) => state.dishesSlice);

  const { searchValue, sort, categoryId, currentPage } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchData = async () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';

    dispatch(
      fetchDishes({
        sortBy,
        order,
        search,
        category,
        currentPage,
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, [searchValue, sort, categoryId, currentPage]);
  //console.log(items);

  return (
    <div className={s.mainpage}>
      <Search fetchData={fetchData} />
      <div className={s.title}>All dishes</div>
      <div className={s.mainblock}>
        <Aside />
        <Dishes items={items} status={status} />
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default MainPage;
