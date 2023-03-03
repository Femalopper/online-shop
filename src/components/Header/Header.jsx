import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuantity, cartStateSwitcher } from '../../store/cartSlice';
import '../test.css';
import './Header.css';
import { goodsStateSwitcher, selectGoodsState } from '../../store/goodsSlice';
import { formStateSwitcher } from '../../store/formSlice';
import cart from '../../img/shopping-basket-wight.svg';
import classNames from 'classnames';
import require from 'requirejs';

const Header = (props) => {
  const categories = props.data.nav.map((item, index) => (
    <li key={index} className="nav_a">
      <NavLink to={item.link}>{item.text}</NavLink>
    </li>
  ));

  const goodsState = useSelector(selectGoodsState);
  const totalQuantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const openCart = (event) => {
    event.preventDefault();
    dispatch(goodsStateSwitcher('closed'));
    dispatch(cartStateSwitcher('openning'));
    setTimeout(() => {
      dispatch(cartStateSwitcher('opened'));
    });
  };

  const openRegistrationForm = (event) => {
    event.preventDefault();
    dispatch(goodsStateSwitcher('closed'));
    dispatch(formStateSwitcher('openning'));
    setTimeout(() => {
      dispatch(formStateSwitcher('opened'));
    });
  };

  return (
    <div className={classNames({ hide: goodsState === 'closed' }, 'scrollable')} id="goods">
      <header>
        {/* Форма регистрации */}
        <form className="form">
          <fieldset>
            <legend>Войти или зарегистрироваться</legend>
            <span className="name">Имя:</span>
            <input className="enter" type="text" name="username" />
            <span className="passw">Пароль:</span>
            <input className="enter" type="password" name="psw" />
            <div className="submission">
              <input className="entry_1" type="submit" value="Войти" />
              <input
                className="entry_2"
                type="button"
                value="Зарегистрироваться"
                href="#"
                onClick={openRegistrationForm}
              />
            </div>
          </fieldset>
        </form>
        {/*<!---Логотип сайта----------------------------------------------->*/}
        <div className="logo">
          <img src={require('../../img/logo.png')} />
        </div>
      </header>
      {/*<!---Меню-------------------------------------------------->*/}
      <nav className="nav">
        <ul className="mainNav">
          {categories}
          <li className="basket">
            <img
              src={cart}
              className="smart-basket__min-icon"
              alt="mini-cart-img"
              width="40"
              height="40"
              onClick={openCart}
            ></img>
            <span className="circle">{totalQuantity}</span>
          </li>
        </ul>
      </nav>
      <main id="wrapper">
        <Outlet />
      </main>
      {/*<!---Футер------------------------->*/}
      <footer>
        <address>
          2017 - 2018 © Интернет магазин Shellac-butic. Все права защищены.
          <br />
          <a id="a2" href="mailto:lina-kursk@mail.ru">
            Email us
          </a>
          <br />
          Юридический адрес: г. Москва, ул. Новая Басманная, д.15
          <br />
          Телефон для связи: 8 981 881 36 26
        </address>
      </footer>
    </div>
  );
};

export default Header;
