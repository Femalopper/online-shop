import React from 'react';
import '../test.css';
import require from 'requirejs';

const Main = () => {
  return (
    <section id="page1">
      <h1>Хиты продаж</h1>
      <article className="table">
        <article className="row">
          <article className="cell">
            <a href="#">
              <img src={require('../../img/1.jpg')} alt="element_1" />
            </a>
            <figcaption>База + Топ комплект</figcaption>
            <div className="price">
              <p className="price0">400 руб.</p>
              <p className="price1">250 руб.</p>
            </div>
            <div className="product__quantity"></div>
            <button className="add-to-cart" type="button">
              <div className="add">Добавить в корзину</div>
              <img src={require('../../img/shopping-basket-wight.svg').default} />
            </button>
          </article>
          <article className="cell">
            <a href="#">
              <img src={require('../../img/6.jpg')} alt="element_6" />
            </a>
            <figcaption>Начальный Bluesky</figcaption>
            <div className="price">
              <p className="price0">2300 руб.</p>
              <p className="price1">1700 руб.</p>
            </div>
            <div className="product__quantity"></div>
            <button className="add-to-cart" type="button">
              <div className="add">Добавить в корзину</div>
              <img src={require('../../img/shopping-basket-wight.svg').default} />
            </button>
          </article>
          <article className="cell">
            <a href="#">
              <img src={require('../../img/11.jpg')} alt="element_11" />
            </a>
            <figcaption>Bluesky Гибридный</figcaption>
            <div className="price">
              <p className="price0">3900 руб.</p>
              <p className="price1">3600 руб.</p>
            </div>
            <div className="product__quantity"></div>
            <button className="add-to-cart" type="button">
              <div className="add">Добавить в корзину</div>
              <img src={require('../../img/shopping-basket-wight.svg').default} />
            </button>
          </article>
          <article className="cell">
            <a href="#">
              <img src={require('../../img/12.jpg')} alt="element_12" />
            </a>
            <figcaption>Продвинутый Bluesky</figcaption>
            <div className="price">
              <p className="price0">4200 руб.</p>
              <p className="price1">3900 руб.</p>
            </div>
            <div className="product__quantity"></div>
            <button className="add-to-cart" type="button">
              <div className="add">Добавить в корзину</div>
              <img src={require('../../img/shopping-basket-wight.svg').default} />
            </button>
          </article>
        </article>
      </article>
      <section className="main__description">
        <h2>
          <i>Shellac-butik – все для профессионального маникюра и дизайна ногтей</i>
        </h2>
        <br />
        <br />
        В интернет-магазине Shellac-Butik для покупателя доступна вся необходимая косметика по уходу
        за ресницами, бровями и ногтями. В ассортименте представлена продукция для макияжа,
        наращивания ногтей, маникюра, ухода за кожей тела и волосами, а также проведения других
        косметических процедур.
        <br />
        <br />
        Начав работу в 2014 году, мы успели добиться больших успехов, заслужили внимание и
        лояльность со стороны многих покупателей и построили на этом хорошую репутацию. У нас
        собрана вся косметика и инструменты для того, чтобы женщина могла самостоятельно привести
        себя в порядок, выглядеть стильно и привлекательно. Мы готовы предложить в полном объеме
        продукцию для поддержания функциональности большого салона красоты.
        <br />
        <br />
        <br />
        <h3>Широкий выбор продукции</h3>
        <br />
        <br />
        Ассортимент продукции наполнен натуральной косметикой и надежными инструментами, тщательно
        подобранными в соответствии с новыми направлениями и технологиями в области маникюра и
        дизайна ногтей, макияжа и ухода за волосами. На полках магазина можно выбрать:
        <ul className="main_info">
          <li>гель-лаки;</li>
          <li>средства для наращивания и дизайна ногтей;</li>
          <li>наборы для Shellac;</li>
          <li>специальные жидкости по уходу за ногтями и кожей рук;</li>
          <li>терки, кисти, бафы и пилы;</li>
          <li>сумки и чемоданы;</li>
          <li>одноразовые материалы;</li>
        </ul>
        <br />
        <br />
        <h3>Почему отдать предпочтение стоит именно нам</h3>
        <br />
        <br />
        Мы реализуем качественный товар, который иногда можно увидеть в других интернет-магазинах.
        Однако благодаря нашей плодотворной работе мы может предложить покупателю лучшие условия для
        покупки:
        <ul className="main_info">
          <li>огромный ассортимент товаров от самых популярных брендов;</li>
          <li>доступные цены на все позиции товаров;</li>
          <li>высокое качество продукции;</li>
          <li>оперативная доставка товара.</li>
        </ul>
        <br />
        <br />
        Профессиональная команда консультантов готова в любое время ответить на все вопросы
        покупателей и оказать грамотную помощью в выборе продукции. Мы обеспечиваем лучшие условия
        для оформления заказа, как для розничных клиентов, так и для профессиональных салонов.
      </section>
    </section>
  );
};

export default Main;
