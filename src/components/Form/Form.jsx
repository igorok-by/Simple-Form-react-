import React from 'react'
import Input from '../Input'
// import classNames from 'classnames'
import './Form.scss'

const Form = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <header className="form__header">
        <h2 className="form__title">Регистрация</h2>
        <p className="form__subtitle">
          Уже есть аккаунт? <a href=" ">Войти</a>
        </p>
      </header>

      <Input name="Имя" />
      <Input name="Email" />
      <Input name="Номер телефона" />
    </form>
  )
}

export default Form