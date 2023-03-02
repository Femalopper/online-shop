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
    { link: '/', text: 'Главная' },
    { link: '/goods', text: 'Каталог товаров' },
    { link: '/shippment', text: 'Доставка и оплата' },
    { link: '/about', text: 'О компании' },
    { link: '/contacts', text: 'Контакты' },
  ],
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header data={list} />}>
            <Route index element={<Main />} />
            <Route path="goods" element={<GoodsList />}>
              <Route path=":cardURL" element={<Card />} />
            </Route>
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
