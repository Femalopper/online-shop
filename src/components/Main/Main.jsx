import React from 'react';
import { selectGoods } from '../../store/goodsSlice';
import { useSelector } from 'react-redux';
import Goods from '../GoodsList/Goods/Goods';
import './Main.css';

const Main = () => {
  const goods = useSelector(selectGoods);

  const showHits = () => {
    const hits = goods.filter((product) => Object.hasOwn(product, 'hit'));
    const priceSortedHits = hits.sort((a, b) => +a.cost - +b.cost);
    return priceSortedHits.map((item) => <Goods data={item} key={item.articul} />);
  };

  return (
    <section className="goods-wrapper">
      <h1>Хиты продаж</h1>
      <section className="goods-field">{showHits()}</section>
      <section className="main__description">
        <h2>
          <i>Shellac-butik – все для профессионального маникюра и дизайна ногтей</i>
        </h2>
        <p className="p-margin">
          В интернет-магазине Shellac-Butik для покупателя доступна вся необходимая косметика по
          уходу за ресницами, бровями и ногтями. В ассортименте представлена продукция для макияжа,
          наращивания ногтей, маникюра, ухода за кожей тела и волосами, а также проведения других
          косметических процедур. Начав работу в 2014 году, мы успели добиться больших успехов,
          заслужили внимание и лояльность со стороны многих покупателей и построили на этом хорошую
          репутацию. У нас собрана вся косметика и инструменты для того, чтобы женщина могла
          самостоятельно привести себя в порядок, выглядеть стильно и привлекательно. Мы готовы
          предложить в полном объеме продукцию для поддержания функциональности большого салона
          красоты.
        </p>
        <h3>Широкий выбор продукции</h3>
        <p className="p-margin">
          Ассортимент продукции наполнен натуральной косметикой и надежными инструментами, тщательно
          подобранными в соответствии с новыми направлениями и технологиями в области маникюра и
          дизайна ногтей, макияжа и ухода за волосами. На полках магазина можно выбрать:
        </p>
        <ul className="main-info">
          <li>гель-лаки;</li>
          <li>средства для наращивания и дизайна ногтей;</li>
          <li>наборы для Shellac;</li>
          <li>специальные жидкости по уходу за ногтями и кожей рук;</li>
          <li>терки, кисти, бафы и пилы;</li>
          <li>сумки и чемоданы;</li>
          <li>одноразовые материалы;</li>
        </ul>
        <h3>Почему отдать предпочтение стоит именно нам</h3>
        <p className="p-margin">
          Мы реализуем качественный товар, который иногда можно увидеть в других интернет-магазинах.
          Однако благодаря нашей плодотворной работе мы может предложить покупателю лучшие условия
          для покупки:
        </p>
        <ul className="main-info">
          <li>огромный ассортимент товаров от самых популярных брендов;</li>
          <li>доступные цены на все позиции товаров;</li>
          <li>высокое качество продукции;</li>
          <li>оперативная доставка товара.</li>
        </ul>
        <p className="p-margin">
          Профессиональная команда консультантов готова в любое время ответить на все вопросы
          покупателей и оказать грамотную помощью в выборе продукции. Мы обеспечиваем лучшие условия
          для оформления заказа, как для розничных клиентов, так и для профессиональных салонов.
        </p>
      </section>
    </section>
  );
};

export default Main;
