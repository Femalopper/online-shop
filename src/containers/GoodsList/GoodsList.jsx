import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoods } from '../../store/goodsSlice';
import Goods from '../../components/Goods/Goods';
import './GoodsList.css';

const GoodsList = () => {
  const goods = useSelector(selectGoods);

  return (
    <section className="goods-wrapper">
      <h1>Готовые комплекты</h1>
      <div className="goods-field">
        {goods.map((item) => (
          <Goods data={item} key={item.articul} />
        ))}
      </div>
    </section>
  );
};

export default GoodsList;
