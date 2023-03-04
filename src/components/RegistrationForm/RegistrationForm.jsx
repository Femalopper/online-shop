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
import Swal from 'sweetalert2';

const RegistrationForm = () => {
  const formState = useSelector(selectFormState);
  const registerBtn = useSelector(selectRegisterVisibility);
  const registerForm = useSelector(selectConsumerData);
  const containerRef = React.createRef();
  const formRef = React.createRef();
  const dispatch = useDispatch();

  const activateRegisterBtn = () => {
    const { name, tel, mail, password } = registerForm;
    if (name.validity && tel.validity && mail.validity && password.validity) {
      dispatch(registerBtnSwitcher(false));
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
    const currentId = event.target.name;
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

  const sendRegisterData = (event) => {
    event.preventDefault();
    fetch('#', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ userData: [...new FormData(formRef.current)] }),
    });
    dispatch(formStateSwitcher('sent register data'));

    setTimeout(() => {
      dispatch(formStateSwitcher('closed'));
      Swal.fire({
        heightAuto: false,
        position: 'center',
        icon: 'success',
        title:
          'Вы зарегистрированы! Для того, чтобы подтвердить регистрацию, перейдите по ссылке на почте',
        showConfirmButton: false,
        timer: 2500,
        width: 400,
      });
      dispatch(goodsStateSwitcher('opened'));
    }, 500);
  };

  return (
    <div
      id="blind_Layer"
      className={classNames(
        {
          hide: formState === 'closed',
        },
        'blind_Layer'
      )}
      ref={containerRef}
    >
      <div
        id="registration"
        className={classNames('popup', {
          'cart-active': formState === 'opened',
          'animate-cart-close': formState === 'closing' || formState === 'sent register data',
        })}
      >
        <button href="#" style={{ float: 'right' }} className="closeButton" onClick={closeForm}>
          ✕
        </button>
        <h2>Введите ваши контактные данные</h2>

        <form id="formToSend" onSubmit={sendRegisterData} ref={formRef}>
          <input id="name" type="text" placeholder="Имя" onInput={checkValidity} name="name" />
          <input
            id="mail"
            type="text"
            placeholder="Электронная почта"
            className="text-input"
            onInput={checkValidity}
            name="mail"
          />
          <input
            id="password"
            type="password"
            placeholder="Пароль"
            className="text-input"
            onInput={checkValidity}
            name="password"
          />
          <input id="tel" type="text" placeholder="Телефон" onInput={checkValidity} name="tel" />
          <button
            type="submit"
            id="send_reg"
            className="send_registration"
            href="#"
            disabled={registerBtn}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
