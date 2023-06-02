import React from 'react';
import Sort from '../Sort/Sort';
import s from './Aside.module.scss';

const Aside = () => {
  return (
    <div className={s.aside}>
      <div className={s.aside__sections}>
        <Sort />
      </div>
    </div>
  );
};

export default Aside;
