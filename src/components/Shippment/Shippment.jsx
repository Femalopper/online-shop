import React from 'react';
import require from 'requirejs';
import './Shippment.css';

const Shippment = () => {
  return (
    <section id="page3" className="goods-wrapper">
      <h1>Доставка</h1>
      <div className="ship-info">
        <div className="shippment">
          <h2>Курьерской службой</h2>
          <img src={require('../../img/icons8-доставка-64 (1).png')} alt="shippment to door" />
          <p className="p-margin">
            Ваш заказ застрахован от повреждений во время доставки. Доставка курьерской службой по
            России производится без ограничений по сумме заказа. Стоимость доставки рассчитывается
            автоматически при оформлении заказа.
          </p>
          <p>
            Акция! Бесплатная доставка при заказе от 5000 рублей действует до конца текущего месяца.
          </p>
        </div>
        <div className="shippment">
          <h2>Забрать в магазине</h2>
          <img src={require('../../img/icons8-магазин-64.png')} alt="shop" />
          <p className="p-margin">
            Вы можете забронировать нужный вам товар в любом удобном для вас магазине Shellac-butic.
          </p>
          <p className="p-margin">
            После того, как придет подтверждение из магазина, можно поехать в магазин, оплатить и
            забрать заказ.
          </p>
        </div>
      </div>
      <h1>Оплата</h1>
      <div className="ship-info">
        <div className="shippment">
          <h2>Наличными</h2>
          <img src={require('../../img/icons8-без-кредитных-карт-64.png')} alt="shop" />
          <p className="p-margin">
            Оплатить заказ наличными можно на кассе магазина или при получении у курьера. После
            оформления заказа на сайте менеджер свяжется с вами в течение 30 минут. Пожалуйста,
            проверяйте правильность указания вашего телефонного номера — заказ доставляется только
            после подтверждения. Мы обрабатываем заказы ежедневно с 9:00 до 22:00. Если вы оформите
            ваш заказ ночью, он будет обработан в следующий рабочий день нашего интернет-магазина.
            Вы всегда можете оформить заказ по телефону 8 (800) 700-19-44 и задать все необходимые
            вопросы нашим менеджерам.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shippment;
