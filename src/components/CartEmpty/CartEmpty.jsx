import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/img/empty-cart.webp';
import s from './CartEmpty.module.scss';

export const CartEmpty = () => {
  return (
    <>
      <div className={`${s.cart} ${s.cart__empty}`}>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className={`${s.button} ${s.button__black}`}>
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
