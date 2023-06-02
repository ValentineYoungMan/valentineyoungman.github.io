import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
import s from './Sort.module.scss';

export const list = [
  { name: 'Popularity Descending', sortProperty: 'rating' },
  { name: 'Popularity Ascending', sortProperty: '-rating' },
  { name: 'Price Descending', sortProperty: 'price' },
  { name: 'Price Ascending', sortProperty: '-price' },
  { name: 'Title (A-Z)', sortProperty: '-name' },
  { name: 'Title (Z-A)', sortProperty: 'name' },
];

const Sort = React.memo(() => {
  // const [sort, setSort] = useState({ name: 'Popularity Descending', sortProperty: '-rating' });
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const sort = useSelector((state) => state.filterSlice.sort);
  const sortRef = useRef();

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={s.sort}>
      <div className={s.aside__section}>
        <div className={s.title}>Sort</div>
        <div className={s.content}>
          <div className={s.content__title}>Sort Results By </div>
          <div className={s.customSelect}>
            <div ref={sortRef} className={s.customSelect__top} onClick={() => setOpen(!open)}>
              <div className={s.customSelect__title}>{sort.name}</div>
              <div className={s.triangle}>&#9662;</div>
            </div>
            {open && (
              <div className={s.customSelect__popup}>
                <ul>
                  {list.map((obj, i) => (
                    <li
                      key={i}
                      className={
                        sort.sortProperty == obj.sortProperty
                          ? `${s.customSelect__property__active} ${s.customSelect__property}`
                          : s.customSelect__property
                      }
                      onClick={() => onClickListItem(obj)}>
                      {obj.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Sort;
