import CartList from './components/Cartlist/CartList';
import GoodsList from './components/GoodsList/GoodsList';
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
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

const list = {
  nav: [
    { link: '/online-shop/', text: 'Главная' },
    { link: '/online-shop/goods', text: 'Каталог товаров' },
    { link: '/online-shop/shippment', text: 'Доставка и оплата' },
    { link: '/online-shop/about', text: 'О компании' },
    { link: '/online-shop/contacts', text: 'Контакты' },
  ],
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/online-shop/" element={<Header data={list} />}>
            <Route index element={<Main />} />
            <Route path="goods" element={<GoodsList />} />
            <Route path="goods/:cardURL" element={<Card />} />
            <Route path="shippment" element={<Shippment />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
      <CartList />
      <RegistrationForm />
    </>
  );
};

export default App;
