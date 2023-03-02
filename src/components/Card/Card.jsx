import React from 'react';
import '../test.css';

const Card = () => {
  return (
    <article id="ninethelem">
      <h1>Комплект Bluesky &#171;CosmoLac Стандарт&#187;</h1>
      <div className="card_and_description">
        <div className="cell firstelement">
          <img src="../../img/9.png" alt="element_9" />
          <figcaption>CosmoLac Стандарт</figcaption>
          <div className="price">
            <p className="price0">3200 руб.</p>
            <p className="price1">3000 руб.</p>
          </div>
          <div className="product__quantity"></div>
          <button
            className="add-to-cart"
            type="button"
            data-sb-id-or-vendor-code="009"
            data-sb-product-name="Комплект для Shellac CosmoLac Стандарт"
            data-sb-product-price="3000"
            data-sb-product-quantity="1"
            data-sb-product-img="../../img/9.png"
          >
            <div className="add">Добавить в корзину</div>
            <img src="../../img/shopping-basket-wight.svg" />
          </button>
        </div>
        <div className="description">
          Состав набора:
          <br />
          <br />
          Набор Стандарт Гибридный Bluesky состоит из 15 самых необходимых товаров для создания
          гель-лакового маникюра в домашних условиях.
          <br />
          <br />
          Готовый набор позволит Вам сэкономить Ваше время на выборе необходимых материалов, а также
          Ваши деньги на посещение салонов красоты.
          <br />
          <br />
          <br />
          Набор:
          <br />
          <br />
          <ol>
            <li>Лампа гибридная CCFL+Led 36 вт</li>
            <li>Bluesky Rubber base coat, Каучуковая основа для гель-лака</li>
            <li>Bluesky Rubber top coat, Каучуковый топ для гель-лака</li>
            <li>Гель-лак Bluesky 3 шт</li>
            <li>Увлажняющее масло-карандаш для кутикулы</li>
            <li>Обезжириватель для ногтей и снятия липкого слоя 100мл, Severina</li>
            <li>Средство для снятия гель-лака, 80мл, Severina</li>
            <li>Пилка тонкая bluesky 180/240</li>
            <li>Бафик полировщик 4х сторонний желтый</li>
            <li>Безворсовые салфетки (70шт)</li>
            <li>Апельсиновые палочки 15 шт.</li>
            <li>Зажимы-прищепки для снятия лака</li>
            <li>Блестки для дизайна ногтей</li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default Card;
