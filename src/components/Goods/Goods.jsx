import React from 'react';
import './Goods.css';
import require from 'requirejs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGoods, changeGoodsQuantity } from '../../store/goodsSlice';
import { increment } from '../../store/cartSlice';
import Swal from 'sweetalert2';
import '../test.css';

const Goods = (props) => {
  const goodQuantity = React.createRef();
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, previousCost, cost, title, currency, quantity, articul } = props.data;

  const changeHandler = (event) => {
    event.preventDefault();
    const { id, value } = goodQuantity.current;
    const currentId = goods.findIndex(({ articul }) => articul === id);
    dispatch(changeGoodsQuantity({ currentId, value }));
  };

  const handler = (t) => {
    const currentId = goods.findIndex(({ articul }) => articul === t.dataset.key);
    const value = +goods[currentId].quantity;
    return { currentId, value };
  };

  const plusHandler = (event) => {
    const { currentId, value } = handler(event.target);
    dispatch(changeGoodsQuantity({ currentId, value: value + 1 }));
  };

  const minusHandler = (event) => {
    const { currentId, value } = handler(event.target);
    if (value > 1) {
      dispatch(changeGoodsQuantity({ currentId, value: value - 1 }));
    }
  };

  const goodsObj = goods.reduce((acc, item) => {
    acc[item['articul']] = item;
    return acc;
  }, {});

  const addToCartHandler = (event) => {
    const { currentId, value } = handler(event.target);

    if (value !== 0) {
      const data = [goodsObj[event.target.dataset.key], value];
      dispatch(increment(data));
      dispatch(changeGoodsQuantity({ currentId, value: 1 }));
      Swal.fire({
        heightAuto: false,
        position: 'center',
        icon: 'success',
        title: 'Товар добавлен в корзину!',
        showConfirmButton: false,
        timer: 1500,
        width: 300,
      });
    } else {
      goodQuantity.current.setAttribute('style', 'border: 1px solid red');
      setTimeout(() => {
        goodQuantity.current.removeAttribute('style');
      }, 1000);
    }
  };

  const inputIsValid = (event) => {
    const code = event.keyCode;
    if (code === 8 || code === 37 || code === 39) {
      return;
    }
    if (code < 48 || (code > 57 && code < 96) || code > 105) {
      event.preventDefault();
    }
  };

  const inputIsEmpty = (event) => {
    if (event.target.value === '') {
      event.target.value = 1;
    }
  };

  const openCard = (event) => {
    event.preventDefault();
    if (
      !event.target.classList.contains('minus-quantity') &&
      !event.target.classList.contains('plus-quantity') &&
      !event.target.classList.contains('add-to-cart') &&
      !event.target.classList.contains('input')
    ) {
      navigate(`/goods/${articul}`);
    }
  };

  return (
    <div className="cell" onClick={openCard}>
      <img src={require(`../../img/${image}`)} alt="" />
      <figcaption className="good-title">{title}</figcaption>
      <div className="price">
        <p className="price0">
          {previousCost}
          {currency}
        </p>
        <p className="price1">
          {cost}
          {currency}
        </p>
      </div>
      <div className="change-quantity">
        <button className="minus-quantity" data-key={articul} onClick={minusHandler}>
          -
        </button>
        <input
          id={articul}
          type="text"
          onKeyDown={inputIsValid}
          onBlur={inputIsEmpty}
          maxLength="2"
          ref={goodQuantity}
          onChange={changeHandler}
          value={quantity}
          className="input"
        ></input>
        <button className="plus-quantity" data-key={articul} onClick={plusHandler}>
          +
        </button>
      </div>
      <button className="add-to-cart" type="button" data-key={articul} onClick={addToCartHandler}>
        Добавить в корзину
        <img
          src={require('../../img/shopping-basket-wight.svg').default}
          width="30"
          height="30"
          data-key={articul}
        />
      </button>
    </div>
  );
};

export default Goods;
