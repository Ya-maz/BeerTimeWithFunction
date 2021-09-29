import React, {useState} from 'react'
import classes from './Registration.module.css'
import Input from './../../components/UI/Input/Input'
import { classesHandlerForRegistration, submitHandler, showInputList, onSendHendler } from './../../utils'

export default function Registration(props) {

  const [state, setState] = useState({
      isFormSend: false,
      isFormValid: false,
      formControls:{
          email: {
              value: '',
              type: 'email',
              label: 'Email', 
              errorMessage: 'Введите корректный email',
              valid: false,
              touched: false,
              validation: {
                  required: true,
                  email: true
              }
          },
          password: {
              value: '',
              type: 'password',
              label: 'Пароль', 
              errorMessage: 'Введите пароль не менее 6 символов',
              valid: false,
              touched: false,
              validation: {
                  required: true,
                  minLength: 6,
              }
          }

      }
  })
  
  return (
    <div className={classesHandlerForRegistration.call(this, classes, props.isOpen)} 
      onClick={ event => event.stopPropagation() }>
        <div >
          <h1>Регистрация</h1>

          <form onSubmit={submitHandler.bind(this)}>
            { showInputList.call(this, Input, state.formControls, setState) }
              <button 
                type='success' 
                onClick={onSendHendler.bind(this, props.onToggle, setState)}
                disabled={!state.isFormValid}
              >
                Зарегистрироваться
              </button>
              <button onClick={props.onToggle}>Отмена</button>
            </form>
          </div>
      </div>
  )
}
