import React from 'react';
import { useParams } from 'react-router-dom';
import { selectGoods } from '../../store/goodsSlice';
import { useSelector } from 'react-redux';
import Goods from '../Goods/Goods';
import './Card.css';

const Card = () => {
  const { cardURL } = useParams();
  const goods = useSelector(selectGoods);
  const goodsObj = goods.reduce((acc, item) => {
    acc[item['articul']] = item;
    return acc;
  }, {});

  return (
    <article className="goods-wrapper">
      <h1>{goodsObj[cardURL].title}</h1>
      <div className="card-and-description">
        <Goods data={goodsObj[cardURL]} key={cardURL} />
        <div className="description">
          <div>{goodsObj[cardURL].description.join('\n')}</div>
          <br></br>
          <br></br>
          <h3>Состав набора:</h3>
          <ol>
            <br></br>
            {goodsObj[cardURL].composition.map((good, index) => (
              <li key={index}>{good}</li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
};

export default Card;
