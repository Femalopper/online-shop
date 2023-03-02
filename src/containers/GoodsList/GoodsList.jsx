import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoods } from '../../store/goodsSlice';
import Goods from '../../components/Goods/Goods';
import './GoodsList.css';

const GoodsList = () => {
  const goods = useSelector(selectGoods);

  const showGoods = () => {
    const goodsCopy = [...goods];
    const priceSortedGoods = goodsCopy.sort((a, b) => +a.cost - +b.cost);
    return priceSortedGoods.map((item) => <Goods data={item} key={item.articul} />);
  };

  return (
    <section className="goods-wrapper">
      <h1>Готовые комплекты</h1>
      <div className="goods-field">{showGoods()}</div>
    </section>
  );
};

export default GoodsList;
