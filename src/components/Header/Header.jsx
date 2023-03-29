import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuantity, cartStateSwitcher } from '../../store/cartSlice';
import { goodsStateSwitcher, selectGoodsState } from '../../store/goodsSlice';
import { formStateSwitcher } from '../../store/formSlice';
import cart from '../../img/shopping-basket-wight.svg';
import classNames from 'classnames';
import require from 'requirejs';
import './Header.css';
import $ from 'jquery';

const Header = (props) => {
  const goodsState = useSelector(selectGoodsState);
  const totalQuantity = useSelector(selectQuantity);
  const dispatch = useDispatch();
  const showSpinner = () => {
    $('#load').fadeIn(200);
    $('#load').fadeOut(300);
  };

  useEffect(() => {
    const disableClick = (e) => {
      if (e.target.tagName !== 'INPUT') {
        document.activeElement.blur();
        e.preventDefault();
      }
    };
    document.body.addEventListener('mousedown', disableClick);
  }, []);

  const categories = props.data.nav.map((item, index) => (
    <li key={index} className="nav_a" onClick={showSpinner}>
      <NavLink to={item.link}>{item.text}</NavLink>
    </li>
  ));

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
            <input className="enter" type="text" name="username" autoComplete="off" />
            <span className="passw">Пароль:</span>
            <input className="enter" type="password" name="psw" autoComplete="off" />
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
          <span id="load" className="hide"></span>
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
          <p>2017 - 2018 © Интернет магазин Shellac-butic. Все права защищены.</p>
          <p>
            <a id="a2" href="mailto:lina-kursk@mail.ru">
              Email us
            </a>
          </p>
          <p>Юридический адрес: г. Москва, ул. Новая Басманная, д.15</p>
          <p>Телефон для связи: 8 981 881 36 26</p>
        </address>
      </footer>
    </div>
  );
};

export default Header;
