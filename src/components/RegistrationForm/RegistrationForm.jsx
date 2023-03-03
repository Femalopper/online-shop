import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFormState,
  formStateSwitcher,
  selectRegisterVisibility,
  selectConsumerData,
  registerBtnSwitcher,
  setConsumerData,
} from '../../store/formSlice';
import { goodsStateSwitcher } from '../../store/goodsSlice';
import classNames from 'classnames';

const RegistrationForm = () => {
  const formState = useSelector(selectFormState);
  const registerBtn = useSelector(selectRegisterVisibility);
  const registerForm = useSelector(selectConsumerData);
  const dispatch = useDispatch();

  const activateRegisterBtn = () => {
    const { name, tel, mail, password } = registerForm;
    console.log(registerForm);
    if (name.validity && tel.validity && mail.validity && password.validity) {
      dispatch(registerBtnSwitcher(false));
      console.log(registerBtn);
    } else dispatch(registerBtnSwitcher(true));
  };

  useEffect(() => {
    console.log('changed');
    activateRegisterBtn();
  }, [registerForm]);

  const validateEmail = (email) => {
    const re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const phoneNumber = (number) => {
    const re = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
    return re.test(number);
  };

  const checkValidity = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const currentId = event.target.id;
    const validity =
      currentId === 'name'
        ? value.length >= 2
        : currentId === 'password'
        ? value.length >= 6
        : currentId === 'tel'
        ? phoneNumber(value)
        : validateEmail(value);
    dispatch(setConsumerData({ validity, currentId, value }));
  };

  const closeForm = (event) => {
    event.preventDefault();
    dispatch(formStateSwitcher('closing'));
    setTimeout(() => {
      dispatch(formStateSwitcher('closed'));
      dispatch(goodsStateSwitcher('opened'));
    }, 500);
  };

  return (
    <div
      id="blind_Layer"
      className={classNames(
        {
          hide: formState === 'closed',
          'cart-active': formState === 'opened',
          'animate-cart-close': formState === 'closing' || formState === 'sent order',
        },
        'blind_Layer'
      )}
    >
      <div id="registration" className="popup">
        <button href="#" style={{ float: 'right' }} className="closeButton" onClick={closeForm}>
          ✕
        </button>
        <h2>Введите ваши контактные данные</h2>

        <form id="formToSend">
          <input id="name" type="text" placeholder="Имя" onInput={checkValidity} />
          <input
            id="mail"
            type="text"
            placeholder="Электронная почта"
            className="text-input"
            onInput={checkValidity}
          />
          <input
            id="password"
            type="password"
            placeholder="Пароль"
            className="text-input"
            onInput={checkValidity}
          />
          <input id="tel" type="text" placeholder="Телефон" onInput={checkValidity} />
        </form>
        <button
          type="submit"
          id="send_reg"
          className="send_registration"
          href="#"
          disabled={registerBtn}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;