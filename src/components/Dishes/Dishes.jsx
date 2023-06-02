import React, { useEffect, useRef, useState } from 'react';
import Dish from '../Dish/Dish';
import s from './Dishes.module.scss';
import { Link } from 'react-router-dom';
import Skeleton from '../Dish/Skeleton';

const Dishes = ({ items, status }) => {
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const dishes = items.map((item) => <Dish key={item.id} {...item} />);

  //   <div className={s.dishes}>{status == 'loading' ? skeletons : dishes}</div>

  return status == 'error' ? (
    <div>
      <h2>Error</h2>
      <p>aaaa</p>
    </div>
  ) : (
    <div className={s.dishes}>{status == 'loading' ? skeletons : dishes}</div>
  );
};

export default Dishes;
