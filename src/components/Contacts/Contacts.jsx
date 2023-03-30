import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section className="goods-wrapper">
      <h1>Контакты</h1>
      <div className="about_us">
        <h2>Отдел розничных продаж:</h2>
        <p className="p-margin">+7 495 790-99-75 с 10 00 до 20 00 (по Московскому времени)</p>
        <p className="p-margin">
          +7 903 790-99-75 с 10 00 до 20 00 (по Московскому времени) - WhatsApp \ Viber
        </p>
        <p className="p-margin">e-mail: info@Shellac-butik.ru</p>
        <p className="p-margin">Мы в Инстаграмм: @Nail_mania.ru</p>
        <p className="p-margin">Мы в Вконтакте: Shellac-butik.ru</p>
        <h2>Отдел оптовых продаж:</h2>
        <p className="p-margin">e-mail: info@nail-mania.ru</p>
        <h2>Мастер консультант:</h2>
        <p className="p-margin">+7 903 790-99-75 c 10 00 до 20 00 (по Московскому времени)</p>
        <p className="p-margin">
          В интернет магазине Shellac-butik работает дипломированный мастер маникюра и педикюра,
          который всегда с радостью ответит на все Ваши вопросы касательно технологии использования
          товаров нашего магазина
        </p>
        <p className="p-margin">e-mail: info@Shellac-butik.ru</p>
        <p className="p-margin">Юридический адрес: г. Москва, ул. Новая Басманная, д. 15</p>
      </div>
    </section>
  );
};

export default Contacts;
