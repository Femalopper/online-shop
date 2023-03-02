import CartList from './containers/Cartlist/CartList';
import GoodsList from './containers/GoodsList/GoodsList';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Shippment from './components/Shippment/Shippment';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Error from './components/Error/Error';

const list = {
  nav: [
    { link: '/online-shop-template/main', text: 'Главная' },
    { link: '/online-shop-template/goods', text: 'Каталог товаров' },
    { link: '/online-shop-template/shippment', text: 'Доставка и оплата' },
    { link: '/online-shop-template/about', text: 'О компании' },
    { link: '/online-shop-template/contacts', text: 'Контакты' },
  ],
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/online-shop-template" element={<Header data={list} />}>
            <Route path="main" element={<Main />} />
            <Route path=":cardURLL" element={<Card />} />
            <Route path="goods" element={<GoodsList />} />
            <Route path=":cardURL" element={<Card />} />
            <Route path="shippment" element={<Shippment />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
      <CartList />
    </>
  );
};

export default App;
